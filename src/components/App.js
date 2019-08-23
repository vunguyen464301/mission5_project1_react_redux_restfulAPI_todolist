import React from 'react';
import './App.css';
import ModalEditTask from '../containers/ModalEditTask'
import AddTask from './AddTask';
import ListTask from '../containers/ListTask';
function App() {
  return (
   <div className="container">
     <h3>ToDo List</h3>
     <AddTask/>
     <ListTask/>
     <ModalEditTask/>
   </div>
  );
}

export default App;
