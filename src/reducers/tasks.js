import {ADD_TASK,REMOVE_TASK, EDIT_TASK,RECEIVE_TASK} from '../actions/actionTypes';
const tasks = (state = {}, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          [action.payload._id]:(state,action.payload)
        }
      case REMOVE_TASK:
            const rest = {...state} ;
            delete rest[action.payload._id];
            return rest;
    case EDIT_TASK:
            return {
              ...state,
              [action.payload._id]:(state,action.payload)
             };
    case RECEIVE_TASK:
            // return(action)
           return{
             ...state,
             [action.payload._id]:(state,action.payload)
           }      
        default:
        return state;
    }
  };
export default tasks;
  