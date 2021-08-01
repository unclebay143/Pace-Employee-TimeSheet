import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_TASKS_BY_STATUS_API_URL } from '../../../../services/root-endpoints';
import { authHeader, currentUserCompanyID, currentUserRoleID } from '../../../../services/auth-header';
import axios from 'axios';
import { somethingWentWrongLogger } from '../../../../toaster';
import { formatDate } from '../../../../_helper/dateFormatter';
import Loader from '../../../loader/Loader';
import { getTasks } from '../../../../actions/task/taskAction';

const handleFormatDate = (selectedDepartmentTaskSheet) =>{
  const formatedTaskSheet = selectedDepartmentTaskSheet.map((taskRecord)=> {
    taskRecord.endDate = formatDate(taskRecord.endDate) 
    // taskRecord.dateCreated = formatDate(taskRecord.dateCreated) 
    return taskRecord
  })
  return formatedTaskSheet
}

const PendingTasks = () => {
  const { tasks } = useSelector(state => state.tasks)
  const [pendingTasks, setPendingTasks] = useState([])
  const [taskState, setTaskState] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory();

console.log(pendingTasks);
  
  useEffect(() => {
    // get all tasks
    dispatch(getTasks())
  }, [dispatch])

  
  useEffect(() => {
    if(currentUserRoleID === 5){ // check if the user is an employee, then run this
      setTaskState(tasks) // set the TaskState to tasks for the component to know about the update
      const getPendingTasks = taskState.filter((task)=>task.taskStatus === 1) // filter out the tasks with status 2
      setPendingTasks(handleFormatDate(getPendingTasks))
      setIsLoading(false)
    }else{ // else run this block
      // Get all accepted tasks from the server
      axios.get(FETCH_TASKS_BY_STATUS_API_URL + "1/" + currentUserCompanyID, { headers: authHeader } )
      .then((response)=>{
        // Set the response to the component state
        setPendingTasks(handleFormatDate(response.data.data))
        setIsLoading(false)
      })
      .catch((error)=>{
        // somethingWentWrongLogger()
        setIsLoading(false)
      })
    }
  }, [tasks, taskState])

  // console.log(getTaskByStatus, 'GETaccept')
  //   console.log( usersTasksByStatus, 'accept')

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
  if(isLoading){
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
        title="Pending Tasks"
        data={ handleFormatDate(taskState) }
        columns={taskHeader}
        bordered= { false }
        selectRow = { selectRow }
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
];

export default PendingTasks;