import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { getTaskByStatus } from '../../../../actions/task/usersTasksByStatus';
import { useDispatch, useSelector } from 'react-redux';

const AcceptedTasks = () => {

  const { usersTasksByStatus } = useSelector(state => state.usersTasksByStatus)
  const history = useHistory();
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTaskByStatus(2));
  }, [])

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