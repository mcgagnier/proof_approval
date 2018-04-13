import axios from 'axios'
import redux from 'redux'

export const CHANGE_NEW_JOB  = "CHANGE_NEW_JOB";

// For example, {name: "George"}
export function changeNewJobAction(changes) {
  return { 
    changes,
    type: CHANGE_NEW_JOB
  };
}

const initialState = {
    id: null,
    job_name: null,
    substrate: false,
    qty: null,
    size: null,
    finishing: null
}

export const changeJobReducer = (state = initialState, action) => {
  if (action.type === CHANGE_NEW_JOB) {
    return Object.assign({}, state, action.changes)
  } else {
    return state;
  }
}

export default changeJobReducer;



// export default (state = initialState, action) => {
//     switch (action.type) {
//       case GET_USER_INFO + '_FULFILLED':
//         return { ...state, ...action.payload.data }
//       default:
//         return state
//     }
//   }