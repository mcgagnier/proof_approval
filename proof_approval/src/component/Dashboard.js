import React, {Component} from 'react';
import {connect} from 'react-redux'
import Nav from './Nav';
import {Link} from 'react-router-dom';
import axios from 'axios'
import '../Main.css'
import '../input.css' 
import { changeNewJobAction } from '../redux/reducers/job'



class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            jobs: "something"
        }
    }

    get_jobs = () => {
        console.log("loading")
        axios.get('http://localhost:8686/api/printing_job')
          .then(response => this.setState({ jobs: response.data})).then(console.log("jobs on state", this.state.jobs))
    }

    render() {
        return (
            
            <div>
                <Nav /><button 
                    onClick={this.get_jobs}
                    >Jobs
                 </button>
                <p>{this.state.jobs.qty}</p>
                <h2 className="display-text">Job: {this.props.job_name}</h2> 
               <button> <Link to={`/new/customer`}><h2>New Customer</h2></Link></button>
               <button><Link to={`/new/job`}><h2>New Job</h2></Link></button>
            </div>
            
        )
    }
} 

function mapStateToProps(state) {
    const { job_name, substrate, qty, size, finishing, user_id, status, changes } = state.job;
    return { job_name, substrate, qty, size, finishing, user_id, status, changes, job: state.job}
}

const CHANGE_NEW_JOB = "CHANGE_NEW_JOB";

function mapDispatchToProps(dispatch) {
    return {
        update: (changes) => dispatch(changeNewJobAction(changes))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);