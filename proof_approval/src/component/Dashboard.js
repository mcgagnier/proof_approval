import React, {Component} from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import '../Main.css';

class Dashboard extends Component {
    render() {
        return (
            
            <div>
                <Nav />
                <h1>Dashboard</h1>
               <button> <Link to={`/new/customer`}><h2>New Customer</h2></Link></button>
               <button><Link to={`/new/job`}><h2>New Job</h2></Link></button>
            </div>
            
        )
    }
}
export default Dashboard