import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../Main.css'
import '../input.css'
import { changeNewJobAction } from '../redux/reducers/job'

class New_Job extends Component {
    constructor() {
        super() 
    }

      newJob = (event) => {
          console.log(this.state);
      }
    render() {
        return (
            <div className="input_contain">    
                <input onChange={event => this.props.update({job_name: event.target.value})} placeholder="Job Name" className="input"/>
                <input onChange={event => this.props.update({substrate: event.target.value})} placeholder="Substrate" className="input"/>
                <input onChange={event => this.props.update({qty: event.target.value})} placeholder="Quantity" className="input"/>
                <input onChange={event => this.props.update({size: event.target.value})} placeholder="Size" className="input"/>
                <input onChange={event => this.props.update({finishing: event.target.value})} placeholder="Finishing" className="input"/>

               
                <button onClick={this.newJob} className="input_button">Create New Job</button>
            </div>
        )
    }

}
function mapStateToProps(state) {
    const { job_name, substrate, qty, size, finishing } = state.job;
    return { job_name, substrate, qty, size, finishing }
}

const CHANGE_NEW_JOB = "CHANGE_NEW_JOB";

function mapDispatchToProps(dispatch) {
    return {
        update: (changes) => dispatch(changeNewJobAction(changes))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(New_Job);