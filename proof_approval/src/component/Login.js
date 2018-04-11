import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../Main.css'

class Login extends Component {
    constructor() {
        super() 
        this.state = {
            username: null,
            password: null
        }
        this.handleNameInput = this.handleNameInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
    }
    handleNameInput = (event) => {
        let name = event.target.value
        this.setState({ name })
        console.log(this.state.name);
      }
   handlePasswordInput = (event) => {
        let password = event.target.value
        this.setState({ password })
        console.log(this.state.password);
      }
    render() {
        return (
            <div>
                <input onChange={this.handleNameInput} placeholder="Name" />
                <input onChange={this.handlePasswordInput} placeholder="Password" />
                <Link to={`/dashboard`}><h2>Login</h2></Link>
            </div>
        )
    }
}
export default Login