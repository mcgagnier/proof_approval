import React, {Component} from 'react'
import {connect} from 'react-redux'
// import axios from 'axios'
import '../Main.css'
import '../input.css'
import '../nav.css'
import { changeNewJobAction } from '../redux/reducers/job'
import Nav from './Nav'

class job_view extends Component {
    constructor() {
        super() 
        this.state = {
        }
       
    }
   
    // onClick() {
    //     this.setState({ approved: true });
    // }
    // newJob = () => {
    //     // console.log('i ran', this.props.job)
    //     axios.post('http://localhost:8686/api/printing_job', this.props.job)
    //       .then(response => console.log(response))
    //   }
    render() {
        return (
            <div>
                <div className="dashboard_contain">
                    <Nav />
                </div>
                <div className="proof_contain">
                    
                    <div className="input_contain">  
                        <h3 className="display-text">Job: {this.props.job_name}</h3> 
                        <h3 className="display-text">Quantity: {this.props.qty}</h3>
                        <h3 className="display-text">Size: {this.props.size}</h3>
                        <h3 className="display-text">Substrate: {this.props.substrate}</h3>
                        <h3 className="display-text">Finishing: {this.props.finishing}</h3>
                        </div>
                        <div ><img className="img_contain" src="https://thumbs-prod.si-cdn.com/uTAij75m6bRq94JAv-gQtcWBfQs=/800x600/filters:no_upscale():focal(3455x1709:3456x1710)/https://public-media.smithsonianmag.com/filer/d1/bb/d1bbf47d-256a-4833-b57c-eeb71a48b0bd/mona.jpg" alt="proof approval"/></div>
                </div>
                <div className="input_contain_bottom">
                    <button className="input_button" onChange={event=> this.props.update({status: event.target.value === 'true'})}>Approve Proof</button>
                    <h2 className="display-text" style={{display: this.state.status ? 'block' : 'none' }}>PROOF APPROVED</h2>
                </div>
                <div className="input_contain_bottom">
                    <button className="input_button">Submit Changes</button>
                    <input onChange={event => this.props.update({job_changes: event.target.value})} placeholder="Changes" className="input_change"/> 

                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(job_view);