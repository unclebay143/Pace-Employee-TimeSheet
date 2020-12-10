import React, { Component } from 'react';
import Table from '../../../pages/Table';


const taskHeader = [
      {
        dataField: 'index',
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
      
    ];
class AssignedTasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      AssignedTasks : [
        {
          index: '1',
          task: 'testing',
          dueDate: '12/06/21',
          status: 'accepted',
          requests: 'requested'
        },
        {
          index: '2',
          task: 'testing2',
          dueDate: '14/06/21',
          status: 'accepted',
          requests: 'requested'
        },
        {
          index: '3',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accepted',
          requests: 'requested'
        },
      ]
    }
}

  render() {
    
    const { AssignedTasks} = this.state;
    return (
      <div >
        <Table
          keyField='id'
          data={ AssignedTasks }
          columns={ taskHeader } 
          bordered= { false }
        />
      </div>
    )
  }
}

export default AssignedTasks;