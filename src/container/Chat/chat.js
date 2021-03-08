// import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { get_user, } from '../../store/action/action'
import firebase from '../../config/firebase'


class Chat extends Component {
    constructor() {
        super()
        this.state = {
            chat_user: {},
            chat: [],
            message: []
        }
    }
    componentDidMount() {
        this.props.get_user()
    }

    chat() {
        let user = this.props.current_user;
        let chat_user = this.state.chat_user;
        let uid_merge = this.merge_uid(user.uId, chat_user.uId);
        this.get_messege(uid_merge)
        this.setState({
            chat_user: user
        })
    }

    merge_uid = (uid1, uid2) => {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }
    }



    send_message = () => {
        let user = this.props.current_user;
        let chat_user = this.state.chat_user;
        let uid_merge = this.merge_uid(user.uId, chat_user.uId);

        firebase.database().ref('/').child(`chat/${uid_merge}`).push({
            message: this.state.message,
            name: user.name,
            uid: user.uId
        })
    }

    get_messege(uId) {
        firebase.database().ref('/').child(`chat/${uId}`).on('child_added', (message) => {
            console.log('messege=>>>',message.val())
            // this.state.chat.push(message.val())
            // this.setState({
            //     chat: this.state.chat
            // })
        })
    }



    render() {

        // console.log('firebaseuser==>>>', this.props.user)
        let user = this.props.current_user;
        return (
            <div>
                <h4>Welcome!{user.name}</h4>
                <div className='imgClass'>
                    <img src={user.profile} />
                </div>
                <h6>{user.email}</h6>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: 'gray' }}>
                        <h3>user List:</h3>
                        <ul>
                            {this.props.user.map((v, i) => {
                                return v.uId !== user.uId && <li key={i}><img src={v.profile} alt='' width='20' />{v.name}<button onClick={() => this.chat(v)}>Chat</button></li>
                            })}
                        </ul>
                    </div>
                    <div style={{ width: '400px', backgroundColor: 'yellow' }}>
                        <h4>Chat</h4>


                        {Object.keys(this.state.chat_user).length ?
                            <div>
                                <h4><img src={this.state.chat_user.profile} alt='' width='20' /> {this.state.chat_user.name}</h4>
                                <ul>
                                    {this.state.chat.map((v, i) => {
                                        return <li key={i}>{v.message}</li>
                                    })}
                                </ul>
                                <input value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} type='text' />
                                <button onClick={() => this.send_message()}    >send</button>

                            </div>
                            : <h4>No user</h4>
                        }




                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    current_user: state.current_user,
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    get_user: () => dispatch(get_user()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
