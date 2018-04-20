// import axios from 'axios'
// import redux from 'redux'

export const CHANGE_NEW_USER  = "CHANGE_NEW_USER";

// For example, {name: "George"}
export function changeNewUserAction(changes) {
  return { 
    changes,
    type: CHANGE_NEW_USER
  };
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
  if (action.type === CHANGE_NEW_USER) {
    return Object.assign({}, state, action.changes)
  } else {
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