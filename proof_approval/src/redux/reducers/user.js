// import axios from 'axios'
// import redux from 'redux'

export const CHANGE_NEW_USER  = "CHANGE_NEW_USER";
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"

// For example, {name: "George"}
export function changeNewUserAction(changes) {
  return { 
    changes,
    type: CHANGE_NEW_USER
  };
}

export function loginUserAction(changes) {
  return { 
    changes,
    type: LOGIN_USER
  };
}

export function logOut() {
  console.log('did this run')
  return {
    type: LOGOUT_USER
  }
}

const initialState = {
    id: null,
    name: null,
    password: null,
    admin: false,
    email: null,
    phone: null,
    company: null
}

export const changeUserReducer = (state = initialState, action) => {
  if (action.type === CHANGE_NEW_USER || action.type === LOGIN_USER) {
    return Object.assign({}, state, action.changes)
  } else if(action.type === LOGOUT_USER) {
    return Object.assign({}, state, initialState)
  }else {
    return state;
  }
}

export default changeUserReducer;



// export default (state = initialState, action) => {
//     switch (action.type) {
//       case GET_USER_INFO + '_FULFILLED':
//         return { ...state, ...action.payload.data }
//       default:
//         return state
//     }
//   }