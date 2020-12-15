import React, { Component } from 'react';
import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';



const taskHeader = [
      {
        dataField: 'id',
        text: 'S/N'
      },
      {
        dataField: 'task',
        text: 'Task',
      },
      {
        dataField: 'dueDate',
        text: 'Due Date',
      },
      {
        dataField: 'status',
        text: 'status',
      },
      {
        dataField: 'requests',
        text: 'Requests',
      },
        
      {
      
        formatter: (cellContent, row) => {
          return (
            <>
            <button
              className="btn btn-danger btn-xs mr-3"
              onClick={(e) => handleDelete(row)} 
            >
              Delete
            </button>
            <button
              className="btn btn-danger btn-xs"
              onClick={(e) => handleDelete(row)} 
            >
              Delete
            </button>
            </>
          );
        },
      },
    
];

function handleDelete(rowId){
  console.log(rowId);
};
class AcceptedTasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      acceptedTasks : [
        {
          id: '1',
          task: 'testing',
          dueDate: '12/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '2',
          task: 'testing2',
          dueDate: '14/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '3',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '4',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '5',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '6',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '7',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '8',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '9',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '10',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
        {
          id: '11',
          task: 'testing111',
          dueDate: '16/06/21',
          status: 'accept',
          requests: 'requested'
        },
      ]
    }
}

  render() {
    
    const { acceptedTasks} = this.state;
    return (
      <div >
        <Table
          keyField='id'
          data={ acceptedTasks }
          columns={ taskHeader } 
          searchName = 'for a task here'
          bordered= { false }
          pagination = { paginationFactory()}
          />
      </div>
    )
  }
}

export default AcceptedTasks;