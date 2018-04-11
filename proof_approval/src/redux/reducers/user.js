import axios from 'axios'
import redux from 'redux'

const initialState = {
    id: null,
    name: null,
    admin: false,
    email: null,
    phone: null,
    company: null
}

const GET_USER_INFO = 'GET_USER_INFO'


export default (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_INFO + '_FULFILLED':
        return { ...state, ...action.payload.data }
      default:
        return state
    }
  }