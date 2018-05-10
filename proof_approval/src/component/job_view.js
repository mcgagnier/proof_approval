import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Main.css'
import '../input.css'
import '../nav.css'
import { changeNewJobAction } from '../redux/reducers/job'
import Nav from './Nav'
import Maverik from './../images/Maverik.jpeg'
import axios from 'axios'
axios.defaults.withCredentials = true;

class job_view extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    changes = () => {
        console.log('changes', this.props.job.job_changes)
        // axios.post('http://localhost:8686/api/printing_job', this.props.job.changes)
        //   .then(response => console.log(response)).then(this.props.history.push('job'))
        //   .catch(err => alert('Must be logged in!'));
    }
    update_status = (job) => {
        console.log(this.props.job)
        axios.put(`http://localhost:8686/api/update_status/`+this.props.job.job)
            .then(
                // We can assume status is true since jobs can't be unapproved and API was hit successfully.
                data => {
                    this.props.update({
                        status: true
                    });
                    console.log("data", this.props.job);
                })
            .catch(err => console.log("error log", err));
            // err => alert('Must be logged in!')
    }
    render() {
        let approval_text
        if (this.props.status) {
            approval_text = <p>Thank you for approving</p>;
        } else {
            approval_text = <button className="input_button" onClick={this.update_status}>Approve Proof</button>;
        }
        return (
            <div>
                <div className="dashboard_contain">
                    <Nav />
                </div>
                <div className="proof_contain">

                    <div className="input_contain">
                        <h3 className="proof-text">Job: {this.props.job_name}</h3>
                        <h3 className="proof-text">Quantity: {this.props.qty}</h3>
                        <h3 className="proof-text">Size: {this.props.size}</h3>
                        <h3 className="proof-text">Substrate: {this.props.substrate}</h3>
                        <h3 className="proof-text">Finishing: {this.props.finishing}</h3>
                    </div>
                    <div ><img className="img_contain" src={this.props.image_url} alt="proof approval" /></div>
                </div>
                <div className="input_contain_bottom">
                    {approval_text}
                </div>
                <div className="input_contain_bottom">
                    <button onClick={this.changes} className="input_button">Submit Changes</button>

                    <input onChange={event => this.props.update({ job_changes: event.target.value })} placeholder="Changes" className="input_change" />

                </div>
            </div>

        )
    }

}
function mapStateToProps(state) {
    const { job_name, substrate, qty, size, finishing, user_id, status, changes, job, image_url } = state.job;
    return { job_name, substrate, qty, size, finishing, user_id, status, changes, job, image_url, job: state.job }
}

const CHANGE_NEW_JOB = "CHANGE_NEW_JOB";

function mapDispatchToProps(dispatch) {
    return {
        update: (changes) => dispatch(changeNewJobAction(changes))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(job_view);