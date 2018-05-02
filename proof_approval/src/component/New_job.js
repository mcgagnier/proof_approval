import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Main.css'
import '../input.css'
import Nav from './Nav';
import { changeNewJobAction } from '../redux/reducers/job'

class New_Job extends Component {
    

    newJob = () => {
        console.log('i ran', this.props.job)
        axios.post('http://localhost:8686/api/printing_job', this.props.job)
          .then(response => console.log(response))
          .catch(err => alert('Must be logged in!'));
      }
    render() {
        return (
            
            <div className="input_contain"> 
                <Nav />
                 <input onChange={event => this.props.update({user_id: event.target.value})} placeholder="User ID" className="input"/> 
                <input onChange={event => this.props.update({job_name: event.target.value})} placeholder="Job Name" className="input"/>
                <input onChange={event => this.props.update({substrate: event.target.value})} placeholder="Substrate" className="input"/>
                <input onChange={event => this.props.update({qty: event.target.value})} placeholder="Quantity" className="input"/>
                <input onChange={event => this.props.update({size: event.target.value})} placeholder="Size" className="input"/>
                <input onChange={event => this.props.update({finishing: event.target.value})} placeholder="Finishing" className="input"/>

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

               
               <Link to="/job" className="input_button_sm"><p 
                    onClick={this.newJob}
                    >New Job
                 </p></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(New_Job);