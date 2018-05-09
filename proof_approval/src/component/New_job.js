import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Main.css'
import '../input.css'
import Nav from './Nav';
import { changeNewJobAction } from '../redux/reducers/job'
axios.defaults.withCredentials = true;

class New_Job extends Component {
    
    // function login(email, password) {
    //     return axios.post('http://localhost:8686/login', {
    //         email,
    //         password
    //     }, {
    //         withCredentials: true
    //     }).then(resp => resp.data)
    // }

    newJob = () => {
        console.log('i ran', this.props.job)
        axios.post('http://localhost:8686/api/printing_job', 
        this.props.job)
          .then(
              response => {
                  console.log(response)
              this.props.history.push('job')})
          .catch(err => { 
              alert('Must be logged in!')
        console.log(err, "error")});
      }
    render() {
        return (
            
            <div className="dashboard_contain"> 
                <Nav />
                 <input onChange={event => this.props.update({user_id: event.target.value})} placeholder="User ID" className="input"/> 
                <input onChange={event => this.props.update({job_name: event.target.value})} placeholder="Job Name" className="input"/>
                <input onChange={event => this.props.update({substrate: event.target.value})} placeholder="Substrate" className="input"/>
                <input onChange={event => this.props.update({qty: event.target.value})} placeholder="Quantity" className="input"/>
                <input onChange={event => this.props.update({size: event.target.value})} placeholder="Size" className="input"/>
                <input onChange={event => this.props.update({finishing: event.target.value})} placeholder="Finishing" className="input"/>
                <input onChange={event => this.props.update({image_url: event.target.value})} placeholder="image_url" className="input"/>                
                

                <div className="radio">
                    <input
                        onChange={event=> this.props.update({status: event.target.value === 'true'})}
                        type="radio"
                        name="status"
                        value={false}
                        checked={!this.props.status}
                    /> Proof Out   
                    <input
                        onChange={event=> this.props.update({status: event.target.value === 'true'})}
                        type="radio"
                        name="status"
                        value={true}
                        checked={this.props.status}
                    /> Approved
                </div>

               
               <button 
                    onClick={this.newJob}
                    className="input_button">Create New Job
                 </button>
            </div>
        )
    }

}
function mapStateToProps(state) {
    const { job_name, substrate, qty, size, finishing, user_id, status, changes, image_url } = state.job;
    return { job_name, substrate, qty, size, finishing, user_id, status, changes, image_url,  job: state.job}
}

const CHANGE_NEW_JOB = "CHANGE_NEW_JOB";

function mapDispatchToProps(dispatch) {
    return {
        update: (changes) => dispatch(changeNewJobAction(changes))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(New_Job);