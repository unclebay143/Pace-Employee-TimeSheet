import React, { Component } from 'react';
import MaterialTable from "material-table";

 const Table = () => {
  const data = [
    {
      index: '1',
      task: 'testing',
      dueDate: '12/06/21',
      status: 'accepted',
      requests: 'requested',
      stage: 'done',
    },
    {
      index: '2',
      task: 'testing2',
      dueDate: '14/06/21',
      status: 'accepted',
      requests: 'requested',
      stage: 'done',
    },
    {
      index: '3',
      task: 'testing3',
      dueDate: '16/06/21',
      status: 'accepted',
      requests: 'requested',
      stage: 'done',
    },
  ];

  const columns = [
    {
      title: 'S/N',
      field: 'index',
    },
    {
      title: 'Task',
      field: 'task',
    },
    {
      title: 'Due Date',
      field: 'dueDate',
    },
    {
      title: 'Status',
      field: 'status',
    },
    {
      title: 'Requests',
      field: 'requests',
    },
    {
      title: 'stage',
      field: 'stage',
    },
  ]

  return(
    <MaterialTable 
      title = "Assogned Tasks"
      data = {data}
      columns = {columns}
      options = {{search: true, paging: false, filtering: true, exportButton: true }}
    />
  )
};

export default Table;




// export default class Table extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
