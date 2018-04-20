import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import '../Main.css'
import '../input.css'
import { changeNewUserAction } from '../redux/reducers/user'

class Login extends Component {
    constructor() {
        super() 
        this.state = {
            username: null,
            password: null
        }

    }

    render() {
        return (
            <form action="http://localhost:8686/login" method="post" className="input_contain">
        <div>
            <label>Email</label>
            <input onChange={event => this.props.update({email: event.target.value})} placeholder="Email" className="input"/>
        </div>
        <div>
            <label>Password</label>
            <input onChange={event => this.props.update({password: event.target.value})} placeholder="Password" className="input"/>
        </div>

        <button type="submit" className="input_button">Login</button>
    </form>
        )
    }
}

function mapStateToProps(state) {
    const { password, email } = state.user;
    return { password, email }
}

// const CHANGE_NEW_CUSTOMER = "CHANGE_NEW_CUSTOMER";

function mapDispatchToProps(dispatch) {
    return {
        update: (changes) => dispatch(changeNewUserAction(changes))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);