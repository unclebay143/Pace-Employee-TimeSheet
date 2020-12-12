import React, { Component } from 'react';
import Table from '../../../pages/Table';


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
      
    ];
class AssignedTasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      AssignedTasks : [
        {
          id: '1',
          task: 'testing',
          dueDate: '12/06/21',
          status: 'accepted',
          requests: 'requested'
        },
        {
          id: '2',
          task: 'testing2',
          dueDate: '14/06/21',
          status: 'accepted',
          requests: 'requested'
        },
        {
          id: '3',
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
          searchName = 'for a task here'
          bordered= { false }
        />
      </div>
    )
  }
}

export default AssignedTasks;