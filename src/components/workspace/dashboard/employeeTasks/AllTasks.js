import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { getTasks } from '../../../../actions/task/taskAction';
import { useDispatch, useSelector } from 'react-redux';
// Loader
import Loader from '../../../loader/Loader';
import { formatDate } from '../../../../_helper/dateFormatter';


// Set the departments component state
const handleFormatDate = (selectedDepartmentTaskSheet) =>{
  const formatedTaskSheet = selectedDepartmentTaskSheet.map((taskRecord)=> {
    taskRecord.endDate = formatDate(taskRecord.endDate) 
    return taskRecord
  })
  return formatedTaskSheet
}

const AllTasks = () => {

  const { tasks, isFetching } = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    dispatch(getTasks())
    console.log(tasks.taskStatus)
  }, [tasks.taskStatus, dispatch])

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
        history.push(`/dashboard/task/view-task/`+ row.taskID)
    }
  };

  
  // If the task list is been fetched from the server or not mounted on the ui, show the loader 
  if(isFetching){
    return(
        <>
            <Loader />
        </>
    )
  }

  const taskss = [
    {
      taskName: 'sss'
    }
  ]
  return (
    <div >
      
      <Table
        keyField='id'
        title="Task Inbox"
        data={ handleFormatDate(tasks) }
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
    dataField: 'taskName',
    text: 'Title',
    headerAttrs: {
      hidden:true
    }
  },
  {
    dataField: 'endDate',
    text: 'Due Date',
    headerAttrs: {
      hidden:true
    }
  },
  {
    dataField: 'documentsAttached',
    text: 'Attachment',
    formatter: (cell, row) => {
      if(!cell){
      return(
        <i class="fa fa-paperclip" />
      )}
    },
    headerAttrs: {
      hidden:true
    }
  },
  {
    dataField: 'taskStatus',
    text: 'Status',
    headerAttrs: {
      hidden:true
    },
    formatter: (cell, row) => {
      if(cell){
      // return(
        switch (cell) {
          case 1:
              return (
               <>
                <i> pending </i>
               </>
              ) 
          case 2:
              return (
              <i> accepted </i>
             )
          case 3:
              return ( 
                <i> completed </i>
                )
          case 4:
              return ( 
                <i> overdue </i>
                )
          default: 
              break;
      }
      // )
    }
    }
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