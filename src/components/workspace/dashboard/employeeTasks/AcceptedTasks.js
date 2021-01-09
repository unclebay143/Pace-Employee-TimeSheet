import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import { getAcceptedTasks } from '../../../../actions/task/acceptedTaskAction';
import { useDispatch, useSelector } from 'react-redux';

const AcceptedTasks = () => {

  // const { tasks, tasks: { data } } = useSelector(state => state.tasks)
  const { acceptedTasks, acceptedTasks: { data } } = useSelector(state => state.acceptedTasks)
  const history = useHistory();
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAcceptedTasks())
  }, [])

  // adds checkbox to each row
  const selectRow = {
    mode: 'checkbox' 
  };
  // styles each row
  const rowStyle = {
    cursor: 'pointer'
  }
  // routes to full task details page on double click
  const taskDetails =  {
    onDoubleClick: (e, row, rowIndex) => 
    { 
        history.push(`/dashboard/task/view-task/${row.id}`)
    }
  };
  return (
    <div >
      
      <Table
        keyField='id'
        title="Inbox (11)"
        data={acceptedTasks }
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

export default AcceptedTasks;