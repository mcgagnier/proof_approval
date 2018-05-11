import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import '../Main.css'
import '../input.css'
import { changeNewUserAction, loginUserAction } from '../redux/reducers/user'
import axios from 'axios';
axios.defaults.withCredentials = true;


class Login extends Component {
    constructor() {
        super()
        this.state = {
            id: null,
            name: null,
            password: null,
            admin: false,
            email: null,
            phone: null,
            company: null
        }

    }

    submit(event) {
        event.preventDefault(); // Stop form submission.
        login(this.props.email, this.props.password).then(user => {
            this.props.loginUser(user);
            if (user.admin) {
                this.props.history.push('dashboard')
            } else { this.props.history.push('customer') }
        })
            .catch((err) => {
                console.log(err);
                alert("Incorrect login information")
            })

        return false; // Stop form submission.
    }

    render() {
        if (this.props.user_id) {
            return <p>Hello, world!</p>;
        }

        return (

            <form onSubmit={event => this.submit(event)} className="dashboard_contain">
                <div className="welcome_contain">
                <h1 className="welcome_text">Welcome To</h1>
                <h1 className="welcome_text">Proof Approval Prints</h1>
                </div>
                <div className="input">
                    <label>Email</label>
                    <input onChange={event => this.props.update({ email: event.target.value })} className="input" />
                </div>
                <div className="input">
                    <label>Password</label>
                    <input onChange={event => this.props.update({ password: event.target.value })} className="input" type="password" />
                </div>

                <button type="submit" className="input_button">Login</button>
            </form>
        )
    }
}

// function postJson(url, data) {
//     return axios.post(url, data, {
//         withCredentials: true
//     })
// }

function login(email, password) {
    return axios.post('http://localhost:8686/login', {
        email,
        password
    }, {
            withCredentials: true
        }).then(resp => resp.data)
}

function mapStateToProps(state) {
    const { name, password, phone, email, company, admin } = state.user;
    return { name, password, phone, email, company, admin, user: state.user }
}

const CHANGE_NEW_CUSTOMER = "CHANGE_NEW_CUSTOMER";

function mapDispatchToProps(dispatch) {
    return {
        update: (changes) => dispatch(changeNewUserAction(changes)),
        loginUser: (user) => dispatch(loginUserAction(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);