import React, { Component } from 'react';
import '../nav.css';
import '../Main.css'
import '../input.css'
import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {logOut} from '../redux/reducers/user'

class Nav extends Component {
    constructor() {
        super()
    }

    logout = () => {
        console.log("logging out")
        axios.post('http://localhost:8686/logout').then(res => {
            this.props.history.push('/')
            this.props.logOut()
        }).catch(err => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="nav">
                <Link to={`/dashboard`} className="nav_text"><h2>Dashboard</h2></Link>
                <h1 className="nav_text">Proof Approval Prints</h1>
                <h2 className="nav_text" onClick={this.logout}>Logout</h2>
            </div>
        )
    }
}



export default withRouter(connect(null, { logOut })(Nav));