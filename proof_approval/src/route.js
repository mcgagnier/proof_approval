import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Customer_dash from './component/Customer_dash';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Nav from './component/Nav';
import New_customer from './component/New_customer';
import New_job from './component/New_job';
import Proof_view from './component/Proof_view';

export default(
    <Switch>
        <Route component={Login} exact path = '/' />
        <Route component={Dashboard} path = '/dashboard'/>
        <Route component={Customer_dash} path = '/customer' />
        <Route component={New_customer} path = '/new/customer' />
        <Route component={New_job} path = '/new/job' />
        <Route component={Proof_view} path = '/proof' />
        
    </Switch>
)