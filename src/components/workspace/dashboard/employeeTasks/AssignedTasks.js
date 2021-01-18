import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { getAssignedTasks } from '../../../../actions/task/assignedTaskAction';
import { useDispatch, useSelector } from 'react-redux';
// Loader
import Loader from '../../../loader/Loader';
import { formatDate } from '../../../../_helper/dateFormatter';


const handleFormatDate = (selectedDepartmentTaskSheet) =>{
  const formatedTaskSheet = selectedDepartmentTaskSheet.map((taskRecord)=> {
    taskRecord.endDate = formatDate(taskRecord.endDate) 
    // taskRecord.dateCreated = formatDate(taskRecord.dateCreated) 
    return taskRecord
  })
  return formatedTaskSheet
}

const AssignedTasks = () => {
  const {assignedTasks, isFetching } = useSelector(state => state.assignedTasks)
  const [assignedTaskState, setAssignedTaskState] = useState([])
  const dispatch = useDispatch();
  const history = useHistory();
// console.log(assignedTasks)

  useEffect(() => {
    dispatch(getAssignedTasks())
    // console.log(assignedTasks.taskStatus)
  }, [assignedTasks.taskStatus, dispatch])

  useEffect(() => {
    setAssignedTaskState(handleFormatDate(assignedTasks))
  }, [assignedTasks])

  

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
  return (
    <div >

      <Table
        keyField='id'
        title = "Assigned Tasks"
        data={assignedTaskState}
        columns={taskHeader}
        bordered= { false }
        // selectRow = {selectRow}
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
              return 'pending'
          case 2:
              return 'accepted'
          case 3:
              return 'completed'
          case 4:
              return 'overdue'
          default: 
              break;
      }
      // )
    }
    }
  },
];

export default AssignedTasks;