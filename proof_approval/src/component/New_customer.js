import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import '../Main.css'
import '../input.css'
import Nav from './Nav';
import { changeNewUserAction } from '../redux/reducers/user'

class New_Customer extends Component {
    constructor() {
        super() 
    }

    newUser = () => {
        // console.log('i ran', this.props.user)
        axios.post('http://localhost:8686/api/printing_users', this.props.user)
          .then(response => console.log(response)).then(this.props.history.push('dashboard'))
      }


    render() {
        // console.log('this.props.user', this.props.user)
        return (
            <div className="dashboard_contain">
            <Nav />
                {/* <div onClick={this.state.} */}
                <input onChange={event => this.props.update({name: event.target.value})} placeholder="Name" className="input"/>
                <input onChange={event => this.props.update({password: event.target.value})} placeholder="Password" className="input"/>
                <input onChange={event => this.props.update({phone: event.target.value})} placeholder="Phone" className="input"/>
                <input onChange={event => this.props.update({email: event.target.value})} placeholder="Email" className="input"/>
                <input onChange={event => this.props.update({company: event.target.value})} placeholder="Company" className="input"/>
                <div className="radio">
                    <input
                        onChange={event=> this.props.update({admin: event.target.value === 'true'})}
                        type="radio"
                        name="admin"
                        value={false}
                        checked={!this.props.admin}
                    /> Customer
                    <input
                        onChange={event=> this.props.update({admin: event.target.value === 'true'})}
                        type="radio"
                        name="admin"
                        value={true}
                        checked={this.props.admin}
                    /> Admin
                </div>

                <button 
                    onClick={this.newUser}
                    className="input_button">Create New Customer
                 </button>
                
            </div>
        )
    }

}

// flow of connect (how props is constructed)
// First you have input props initially (basic React props)
// Then, run mapStateToProps (state, inputProps) => new stuff to add to props.
// Finally, runDispatchToProps (dispatch, inputProps) => new stuff to add to props.

function mapStateToProps(state) {
    const { name, password, phone, email, company, admin } = state.user;
    const { substrate } = state.job;
    return { name, password, phone, email, company, admin, substrate, user: state.user }
}


const CHANGE_NEW_CUSTOMER = "CHANGE_NEW_CUSTOMER";

function mapDispatchToProps(dispatch) {
    return {
        update: (changes) => dispatch(changeNewUserAction(changes))
    };
}

// function mapStateToProps(state) {
//     const { substrate } = state.job;
//     return { substrate }
// }

export default connect(mapStateToProps, mapDispatchToProps)(New_Customer);