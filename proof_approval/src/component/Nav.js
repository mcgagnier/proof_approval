import React, {Component} from 'react';
import '../nav.css';
import {Link} from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <Link to={`/dashboard`}><h2>Home</h2></Link>
        
    </div>
)
export default Nav;