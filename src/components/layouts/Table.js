import React, { Component } from 'react';


// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/pages-styles/util.css';

const TableHeader = (props) => {
 return(
   <thead className = "pace-bg-primary">
     <tr>
       <th>S/N</th>
       <th>Task</th>
       <th>Due Date</th>
       <th>Status</th>
       <th>Requests</th>
     </tr>
   </thead>
 )
}

const TableBody = (props) => {
  const rows = props.taskData.map((row, index) => {
    return (
      <tr Key = {index}>
        <td> {row.index} </td>
        <td> {row.task} </td>
        <td> {row.dueDate} </td>
        <td> {row.status} </td>
        <td> {row.requests} </td>
      </tr>
    )
  })
  return <tbody> {rows} </tbody>
}

class Table extends Component {
  render() {
    const { taskData } = this.props;
    return (
      <div className="card-body">
        <table className="table card-text">
          <TableHeader />
          <TableBody taskData = {taskData} />
        </table>
      </div>
    )
  }
}

export default Table;