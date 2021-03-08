import React,{Component} from 'react'
import {connect} from 'react-redux'
import {facebook_login} from '../../store/action/action'
import './style.css'

class Home extends Component{
    static getDerivedStateFromProps(props,state){
// console.log('props',state,props)
    }

    render(){

      
        return(
        <div>
            <h1>Home</h1>
            {/* <button onClick={()=>this.props.setData(user)}>SETDATA</button> */}
<button onClick={()=>this.props.facebook_login(this.props.history)}>FACEBOOK LOGIN</button>
        </div>
    )
}
}

const mapStateToProps =(state)=>({
user:state.users
})
const mapDispatchToProps =(dispatch)=>({
   
    facebook_login:(history)=> dispatch(facebook_login(history)),
})

export default connect(mapStateToProps,mapDispatchToProps) (Home)
