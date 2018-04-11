import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../Main.css'

class New_Job extends Component {
    constructor() {
        super() 
        this.state = {
            job_name: null,
            substrate: null,
            qty: null,
            size: null,
            finishing: null,
            changes: false          
        }
        this.handleJobNameInput = this.handleJobNameInput.bind(this)
        this.handleSubstrateInput = this.handleSubstrateInput.bind(this)
        this.handleQtyInput = this.handleQtyInput.bind(this)
        this.handleSizeInput = this.handleSizeInput.bind(this)
        this.handleFinishingInput = this.handleFinishingInput.bind(this)
    }

    handleJobNameInput = (event) => {
        let job_name = event.target.value
        this.setState({ job_name })
        console.log(this.state.job_name);
      }
      handleSubstrateInput = (event) => {
        let substrate = event.target.value
        this.setState({ substrate })
        console.log(this.state.substrate);
      }
      handleQtyInput = (event) => {
        let qty = event.target.value
        this.setState({ qty })
        console.log(this.state.qty);
      }
      handleSizeInput = (event) => {
        let size = event.target.value
        this.setState({ size })
        console.log(this.state.size);
      }
      handleFinishingInput = (event) => {
        let finishing = event.target.value
        this.setState({ finishing })
        console.log(this.state.finishing);
      }
      newJob = (event) => {
          console.log(this.state);
      }
    render() {
        return (
            <div>               
                <input onChange={this.handleJobNameInput} placeholder="Job Name" />
                <input onChange={this.handleSubstrateInput} placeholder="Substrate" />
                <input onChange={this.handleQtyInput} placeholder="Qty" />
                <input onChange={this.handleSizeInput} placeholder="Size" />
                <input onChange={this.handleFinishingInput} placeholder="Finishing" />
                <button onClick={this.newJob}>New Job</button>
            </div>
        )
    }

}
function mapStateToProps(state) {
    const { job_name, substrate, qty, size } = state;
    return { job_name, substrate, qty, size }
}

export default New_Job