// import {v4 as generateId} from 'node-uuid';

import { ADD_TASK, REMOVE_TASK, EDIT_TASK, OPEN_MODAL, CLOSE_MODAL, RECEIVE_TASK } from './actionTypes';
import { queryDatabase, callAPI_AddTask ,callAPI_DeleteTask,callAPI_EditTask} from '../api/index';
import { URL, TASK,TASK_REMOVE,TASK_UPDATE } from '../utils/index';

export const receive_task = () => {
    return (dispatch) => {
        queryDatabase(URL, TASK)
            .then(res => {
                res.data.forEach(e => {
                    dispatch(receiveSUCCESS(e));
                });
            })
            .catch(err => {
                throw (err)
            });
    }
}
const receiveSUCCESS = (d) => {
    return {
        type: RECEIVE_TASK,
        payload: {
            _id: d._id,
            name: d.name
        }
    }
}
const addSUCCESS = (d) => {
    console.log(d)
    return {
        type: ADD_TASK,
        payload: {
            _id: d._id,
            name: d.name
        }
    }
}
const removeSUCCESS = (d) => {
    console.log(d)
    return {
        type: REMOVE_TASK,
        payload: {
            _id: d._id,
            name: d.name
        }
    }
}
const editSUCCESS = (d) => {
    console.log(d)
    return {
        type: EDIT_TASK,
        payload: {
            _id: d._id,
            name: d.name
        }
    }
}

export const add_task = (name) => {
    console.log(`You add ${name}`);
    return (dispatch) => {
        callAPI_AddTask(URL, TASK, name)
            .then((res) => {
                dispatch(addSUCCESS(res.data));
               
            })
            .catch(err => {
                throw (err)
            });
    }
}

export const remove_task = (_id) => {
    console.log(`You remove ${_id}`);
    return (dispatch) => {
        callAPI_DeleteTask(URL, TASK_REMOVE, _id)
            .then((res) => {
               dispatch(removeSUCCESS(res.data));
            })
            .catch(err => {
                throw (err)
            });
    }
}
export const edit_task = (_id, name) => {
    console.log(`You edit ${_id}`);
    return (dispatch) => {
        callAPI_EditTask(URL, TASK_UPDATE, _id,name)
            .then((res) => {
               dispatch(editSUCCESS({_id:_id,name:name}));
            })
            .catch(err => {
                throw (err)
            });
    }
}

export const openModal = (_id, name) => {
    console.log(`You click ${OPEN_MODAL}`);
    return {
        type: OPEN_MODAL,
        _id: _id,
        name: name
    }
};
export const closeModal = (_id, name) => {
    console.log(`You click ${CLOSE_MODAL}`);
    return {
        type: CLOSE_MODAL,
        _id: _id,
        name: name
    }
};
