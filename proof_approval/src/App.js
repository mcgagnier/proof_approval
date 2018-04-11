import React, { Component } from 'react';
import './Main.css';
// import Customer_dash from './component/Customer_dash.js';
// import Dashboard from './component/Dashboard.js';
// import Login from './component/Login.js';
import Nav from './component/Nav.js';
// import New_customer from './component/New_customer.js';
// import New_job from './component/New_job.js';
// import Proof_view from './component/Proof_view.js';
import Route from './route.js'

class App extends Component {
  render() {
    return (
      <body>
            <div>          
           {Route}
          </div>
      </body>
    );
  }
}

export default App;
