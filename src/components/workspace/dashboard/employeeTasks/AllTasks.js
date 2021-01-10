import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { getTasks } from '../../../../actions/task/taskAction';
import { useDispatch, useSelector } from 'react-redux';

const AllTasks = () => {

  const { tasks, tasks: { data } } = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const history = useHistory();
  // const dispatch = useDispatch(function)
// console.log(tasks);
  useEffect(() => {
    dispatch(getTasks())
  }, [])

  // adds checkbox to each row
  const selectRow = {
    mode: 'checkbox',
    headerColumnStyle: { backgroundColor: 'transparent' }
  };
  // styles each row
  const rowStyle = {
    cursor: 'pointer'
  }
  // routes to full task details page on double click
  const taskDetails =  {
    onClick: (e, row, rowIndex) => 
    { 
        history.push(`/dashboard/task/view-task/${row.id}`)
    }
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
        // controlHeader = { navigate }
        rowEvents = { taskDetails }
        noDataIndication={'No available task'}
        filter={ filterFactory() }
        rowStyle={ rowStyle }
      />
    </div>
  )
}

const taskHeader = [
     
  {
    dataField: 'title',
    text: 'Title',
    headerAttrs: {
      hidden:true
    }
  },
  {
    dataField: 'dueDate',
    text: 'Due Date',
    headerAttrs: {
      hidden:true
    }
  },
  {
    dataField: 'completed',
    text: 'Status',
    headerAttrs: {
      hidden:true
    },
    // formatter: cell => selectOptionsArr.filter(opt => opt.value === cell)[0].label || '',
    //   filter: selectFilter({
    //     options: selectOptionsArr
    //   })
  },
];


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