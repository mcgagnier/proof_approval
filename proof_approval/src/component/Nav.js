import React, { Component } from 'react';
import '../nav.css';
import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'

class Nav extends Component {
    constructor() {
        super()
    }

    logout = () => {
        console.log("logging out")
        axios.post('http://localhost:8686/logout').then(res => {
            this.props.history.push('/')
        }).catch(err => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="nav">
                <Link to={`/dashboard`} className="nav_text"><h2>Home</h2></Link>
                <h1 className="nav_text">Proof Approval Prints</h1>
                {/* Need to fix so actual logout */}
                {/* <h2 className="nav_text" onClick={this.logout}>Logout</h2> */}
                <Link to={`/`} className="nav_text"><h2>Logout</h2></Link>
            </div>
        )
    }
}

export default Nav;