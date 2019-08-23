import {OPEN_MODAL, CLOSE_MODAL} from '../actions/actionTypes';

const modal = (state = {show: false}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        show: true,
        _id:action._id,
        name:action.name
      };
    case CLOSE_MODAL:
      return {
        show: false
      };
    default:
      return state;
  }
};

export default modal;
