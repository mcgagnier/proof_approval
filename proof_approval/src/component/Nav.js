import React, {Component} from 'react';
import '../nav.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
    constructor(){
        super()
    }
    render() {
        return(
            <div className="nav">
                 <Link to={`/dashboard`} className="nav_text"><h2>Home</h2></Link>
            </div>
        )
    }
}

export default Nav;