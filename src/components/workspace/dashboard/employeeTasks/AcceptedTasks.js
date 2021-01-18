import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { useDispatch } from 'react-redux';
import { FETCH_TASKS_BY_STATUS_API_URL } from '../../../../services/root-endpoints';
import { authHeader, currentUserCompanyID } from '../../../../services/auth-header';
import axios from 'axios';
import { somethingWentWrongLogger } from '../../../../toaster';
import { formatDate } from '../../../../_helper/dateFormatter';
import Loader from '../../../loader/Loader';

// Set the departments component state
const handleFormatDate = (selectedDepartmentTaskSheet) =>{
  const formatedTaskSheet = selectedDepartmentTaskSheet.map((taskRecord)=> {
    taskRecord.endDate = formatDate(taskRecord.endDate) 
    taskRecord.dateCreated = formatDate(taskRecord.dateCreated) 
    return taskRecord
  })
  return formatedTaskSheet
}

const AcceptedTasks = () => {

  const [acceptedTasks, setAcceptedTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory();
  
  useEffect(() => {
    // Get all accepted tasks from the server
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
  // const taskDetails =  {
  //   onClick: (e, row, rowIndex) => 
  //   { 
  //       console.log(row)
  //       history.push(`/dashboard/task/view-task/`+ row.taskID)
  //   }
  // };

  if (isLoading){
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
        data={acceptedTasks }
        columns={taskHeader}
        bordered= { false }
        selectRow = { selectRow }
        enableSearch = { true }
        pagination = { paginationFactory() }
        // controlHeader = { navigate }
        // rowEvents = { taskDetails }
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
    dataField: 'dateCreated',
    text: 'Assigned Date',
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

export default AcceptedTasks;