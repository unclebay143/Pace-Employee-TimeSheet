import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { getTasks } from '../../../../actions/task/taskAction';
import { useSelector } from 'react-redux';

const AllTasks = () => {

  const { tasks, tasks: { data } } = useSelector(state => state.tasks)
  // const dispatch = useDispatch(function)
// console.log(tasks);
  useEffect(() => {
    getTasks()
  }, [])

  const selectRow = {
    mode: 'checkbox' 
  };
  return (
    <div >
      
      <Table
        keyField='id'
        title="Inbox (11)"
        data={ tasks }
        columns={taskHeader}
        bordered= { false }
        selectRow = {selectRow}
        enableSearch = { true }
        pagination = { paginationFactory() }
        controlHeader = { navigate }
        rowEvents = { taskDetails }
      />
    </div>
  )
}


const taskHeader = [
  // {
  //   dataField: 'id',
  //   text: 'S/N'
  // },
  
  // {
  //   dataField: 'id',
  //   // text: 'Task',
  // },
  {
    dataField: 'title',
    // text: 'Attachment',
  },
  {
    dataField: 'description',
    // text: 'Due Date',
  },
  {
    dataField: 'dueDate',
    // text: 'Due Date',
  },
];

// rowEvents to display full details of each row
//  to be converted to a fcn that will render the task details

const taskDetails =  {
onClick: (e, row, rowIndex) => {  
console.log(`clicked on row with index: ${rowIndex}`);
console.log(`details: ${JSON.stringify(row)}`);
alert(`Title: ${JSON.stringify(row.title)}`);
console.log(`S/N: ${JSON.stringify(row.id)}`);
console.log(` and with details: ${JSON.stringify(taskHeader[rowIndex])}`);
}
};


const navigate = <>
<div className="btn-group">
<a data-toggle="dropdown" href="/" className="btn mini all">
All
  <i className="fa fa-angle-down ml-1" />
</a>
<ul className="dropdown-menu">
  <li className="">
    <NavLink exact to="/dashboard/task/accepted-tasks" className="sidebar-link text-muted" activeClassName="active">
      <i className="mr-3 text-gray"/><span>Accepted</span>
    </NavLink>
  </li>
  <li className="">
    <NavLink exact to="/dashboard/task/assigned-tasks" className="sidebar-link text-muted" activeClassName="active">
      <i className="mr-3 text-gray"/><span>Assigned</span>
    </NavLink>
  </li>
  <li className="">
    <NavLink exact to="/dashboard/task/pending-tasks" className="sidebar-link text-muted" activeClassName="active">
      <i className="mr-3 text-gray"/><span>Pending</span>
    </NavLink>
  </li>
</ul>
</div>
{/* <div className="btn-group">
<NavLink exact to="/dashboard/task/all-tasks" className="sidebar-link text-muted">
  <i className="fa fa-sync text-gray"/>
  <span>sync</span>
</NavLink>
</div> */}
<div className="btn-group">
<a data-toggle="dropdown" href="#" className="btn mini blue">
More
  <i className="fa fa-angle-down ml-1" />
</a>
<ul className="dropdown-menu">
  <li><a href="#"><i className="fa fa-pencil" /> Mark as Read</a></li>
  <li><a href="#"><i className="fa fa-ban" /> Spam</a></li>
  <li className="divider" />
  <li><a href="#"><i className="fa fa-trash-o" /> Delete</a></li>
</ul>                           
</div>
</>



export default AllTasks;