import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_TASKS_BY_STATUS_API_URL } from '../../../../services/root-endpoints';
import { authHeader, currentUserCompanyID, currentUserRoleID, currentUserStaffID } from '../../../../services/auth-header';
import axios from 'axios';
import { somethingWentWrongLogger } from '../../../../toaster';
import { formatDate } from '../../../../_helper/dateFormatter';
import Loader from '../../../loader/Loader';
import { getTasks } from '../../../../actions/task/taskAction';

const AcceptedTasks = () => {
  const { tasks } = useSelector(state => state.tasks)
  const [taskState, setTaskState] = useState([])
  const dispatch = useDispatch()
  const [acceptedTasks, setAcceptedTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory();
  
  useEffect(() => {
    // get all tasks
    dispatch(getTasks())
  }, [dispatch])


  useEffect(() => {

      if(currentUserRoleID === 5){ // check if the user is an employee, then run this
        setTaskState(tasks) // set the TaskState to tasks for the component to know about the update
        const getAcceptedTasks = taskState.filter((task)=>task.taskStatus === 2) // filter out the tasks with status 2
        setAcceptedTasks(handleFormatDate(getAcceptedTasks))
        setIsLoading(false)
      }else{ // else run this block
        axios.get(FETCH_TASKS_BY_STATUS_API_URL + "2/" + currentUserCompanyID, { headers: authHeader } )
        .then((response)=>{
          // Set the response to the component state
          setAcceptedTasks(handleFormatDate(response.data.data))
          setIsLoading(false)
        })
        .catch((error)=>{
          // somethingWentWrongLogger()
          setIsLoading(false)
        })
      }
  }, [tasks, taskState])

  console.log(getTaskByStatus, 'GETaccept')
    console.log(usersTasksByStatus, 'accept')

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

  return (
    <div >
      
      <Table
        keyField='id'
        title="Accepted Task"
        data={ usersTasksByStatus }
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

export default AcceptedTasks;