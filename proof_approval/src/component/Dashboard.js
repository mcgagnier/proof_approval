import React, { Component } from 'react';
import { connect } from 'react-redux'
import Nav from './Nav';
import { Link, Route } from 'react-router-dom';
import axios from 'axios'
import '../Main.css'
import '../input.css'
import { changeNewJobAction } from '../redux/reducers/job'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            jobs: []
        }
    }
    componentDidMount() {
        this.get_jobs()
    }
    logout = () => {
        console.log("logging out")
        axios.post('http://localhost:8686/logout').then(res => {
            this.props.history.push('/')
        }).catch(err => this.props.history.push('/'));
    }
    get_jobs = () => {
        // console.log("loading")
        axios.get('http://localhost:8686/api/printing_job')
            .then(response => {
                this.setState({ jobs: response.data })
                console.log(response.data)
            }

            )
    }

    handleClick = (jobid) => {
        console.log("click me")
        axios.get(`http://localhost:8686/api/printing_job/` + jobid.job).then(data => {
            this.props.update({
                ...data.data[0]
            });
            this.props.history.push('job')
            // this.props.update({
            //     job_name: data.data[0].job_name,
            //     substrate: data.data[0].substrate,
            //     changes: data.data[0].changes})
            // console.log("redux", this.props)
            // console.log("job id", jobid.job)
            // console.log(data.data, "data")
        })
    }
    render() {
        let jobs = this.state.jobs
        let status_text
        if (this.props.status) {
            status_text = <p>Approved</p>;
        } else {
            status_text = <p>Proof Out</p>;;
        }
        return (

            <div className="dashboard_contain" >
                <Nav />
                <div >
                    {jobs.map(job =>
                    <h3 className="dashboard_list" key={job.job} onClick={this.handleClick.bind(this, job)}>
                    <span className="list_span">Job Number:  {job.job}</span>
                    <span className="list_span">Title: {job.job_name}</span>
                    Status: {job.status ? <span>Approved</span> : <span>Proof Out</span>}</h3>)}

                </div>

                <div className="button_contain">
                    <button className="input_button_sm"> <Link to={`/newcustomer`}><h2>New Customer</h2></Link></button>
                    <button className="input_button_sm"><Link to={`/newjob`}><h2>New Job</h2></Link></button>
                    <button className="nav_text" onClick={this.logout}>Logout</button>
                </div>

            </div>

        )
    }
}

function mapStateToProps(state) {
    const { job_name, substrate, qty, size, finishing, user_id, status, changes } = state.job;
    return { job_name, substrate, qty, size, finishing, user_id, status, changes, job: state.job }
}

const CHANGE_NEW_JOB = "CHANGE_NEW_JOB";

function mapDispatchToProps(dispatch) {
    return {
        update: (changes) => dispatch(changeNewJobAction(changes))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);







   // get_jobs = () => {
    //     console.log("loading")
    //     axios.get('http://localhost:8686/api/printing_job')
    //       .then(response => console.log(response.data , this.state.jobs))
    // }

      // get_job = () => {
    //     console.log("loading one")
    //     axios.get('http://localhost:8686/api/printing_job') 
    //       .then(response => this.setState({ jobs: response.data})).then(console.log("job on state", this.state.jobs))
    // }