import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setData} from '../../store/action/action'
import './style.css'

class Home extends Component{
    static getDerivedStateFromProps(props,state){
console.log('props',state,props)
    }

    render(){

        let user ={
            name:'umair',
            email:'umair@gmail.com'
        }
        return(
        <div>
            <h1>Home</h1>
            <button onClick={()=>this.props.setData(user)}>SETDATA</button>
        </div>
    )
}
}
const mapStateToProps =(state)=>({
user:state.users
})
const mapDispatchToProps =(dispatch)=>({
    setData:(Data)=> dispatch(setData(Data))
})

export default connect(mapStateToProps,mapDispatchToProps) (Home)
