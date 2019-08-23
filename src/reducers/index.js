import {combineReducers} from 'redux';
//actions task
import tasks from './tasks';
import modal from './modal';
const AllReducers = combineReducers({
    tasks:tasks,
    modal:modal

});

export default AllReducers;