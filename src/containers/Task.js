import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as Actions from '../actions/index'
const Task = ({ _id, name, actions }) => {
    const btn_remove = (_id) => {
        actions.remove_task(_id);
        // actions.receive_task();
        // console.log(_id)
    }
    const btn_edit = (_id) => {
        console.log(_id+" : "+name)
        actions.openModal(_id,name)
        // actions.edit_task(id,name)
        // actions.receive_task();
    }
    return (
        <li className="list-group-item">{name}
            <div className="float-right">
                <i style={{ fontSize: '24px' }} className="fa fa-pencil mr-3 text-primary" 
                onClick={() => { btn_edit(_id) }}></i>
                <i className="fa fa-trash text-primary" 
                    style={{ fontSize: '25px' }}
                    onClick={() => { btn_remove(_id) }}></i>
            </div>
        </li>
    )
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});
export default connect(
    undefined,
    mapDispatchToProps
)(Task);