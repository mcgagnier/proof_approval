import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../Main.css'

class New_Customer extends Component {
    constructor() {
        super() 
        this.state = {
            admin: false,
            name: null,
            email: null,
            phone: null,
            company: null
        }
        this.handleNameInput = this.handleNameInput.bind(this)
        this.handlePhoneInput = this.handlePhoneInput.bind(this)
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handleCompanyInput = this.handleCompanyInput.bind(this)
    }

    handleNameInput = (event) => {
        let name = event.target.value
        this.setState({ name })
        console.log(this.state.name);
      }
      handlePhoneInput = (event) => {
        let phone = event.target.value
        this.setState({ phone })
        console.log(this.state.phone);
      }
      handleEmailInput = (event) => {
        let email = event.target.value
        this.setState({ email })
        console.log(this.state.email);
      }
      handleCompanyInput = (event) => {
        let company = event.target.value
        this.setState({ company })
        console.log(this.state.company);
      }
    render() {
        return (
            <div>
                {/* <div onClick={this.state.} */}
                <input onChange={this.handleNameInput} placeholder="Name" />
                <input onChange={this.handlePhoneInput} placeholder="Phone" />
                <input onChange={this.handleEmailInput} placeholder="Email" />
                <input onChange={this.handleCompanyInput} placeholder="Company" />
                <h1>New_Customer</h1>
            </div>
        )
    }

}
function mapStateToProps(state) {
    const { name, phone, email, company } = state;
    return { name, phone, email, company }
}

export default New_Customer