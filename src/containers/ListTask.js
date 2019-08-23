import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import *as Actions from '../actions/index'
import { bindActionCreators} from 'redux';
const ListTask = ({ tasks ,actions}) => {
    var showData =(data)=> 
    Object.keys(data).map((_id, index) => {
        return <Task
        key={index}
        {...data[_id]}/>
    });
    // {console.log(data)}
    return (
      

        <ul className="list-group mt-5">
            <li
                onClick={() => { actions.receive_task() }}
                className="list-group-item danger bg-danger text-light" >
                <h5 style={{ textAlign: 'center' }}>
                    List Task
    </h5>
            </li>
            {showData(tasks)}
           
        </ul>
    )

}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
}); 

export default connect(mapStateToProps,mapDispatchToProps)(ListTask);;