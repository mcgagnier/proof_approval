import React, {Component} from 'react';
import {connect} from 'react-redux'
import Nav from './Nav';
import {Link} from 'react-router-dom';
import '../Main.css'
import axios from 'axios'
import '../input.css' 
import { changeNewJobAction } from '../redux/reducers/job'



class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            jobs: []
        }
    }


    componentDidMount(){
        this.get_jobs()
    }
    // get_jobs = () => {
    //     console.log("loading")
    //     axios.get('http://localhost:8686/api/printing_job')
    //       .then(response => console.log(response.data , this.state.jobs))
    // }

    get_jobs = () => {
        console.log("loading")
        axios.get('http://localhost:8686/api/printing_job')
          .then(response => this.setState({ jobs: response.data})).then(console.log("job on state", this.state.jobs[1]))
    }

    
    render() {
        console.log('this.state.jobs', this.state.jobs)
        let jobs = this.state.jobs
        return (
            
            
            <div>
                
                <Nav /><button 
                    onClick={this.get_jobs}
                    >Jobs
                 </button>
                 <div>
                  {/* {this.state.jobs[1]} */}
                </div>
                <div>
                    {jobs.map(job => <h4 key={job.job}>Number:{job.job} Name: {job.job_name}</h4>)}
                </div>
                
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