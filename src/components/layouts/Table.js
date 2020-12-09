import React, { Component } from 'react';


// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/pages-styles/util.css';


export const TableHeader = (props) => {
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
export const TableData = ({children, label}) => {
  return(
    <div>
      <td> {label } </td>
      {children}
    </div>
  )
}

export const TableBody = (props) => {
  const {label, tableData} = this.props;
  const rows = tableData.map((row, index) => {
    return (
      <tr Key = {index}>
        {/* <td> {row.index} </td> */}
        <TableData label = {label}/>
        
      </tr>
    )
  })
  return <tbody> {rows} </tbody>
}

export class Table extends Component {
  render() {
    const { tableData } = this.props;
    return (
      <div >
      {/* <div className="card-body"> */}
        {/* <table className="table card-text"> */}
          <table >
          <TableHeader />
          <TableBody tableData = {tableData} />
        </table>
      </div>
    )
  }
}

// export default Table;


// const TableBody = ({children, , label}) => {
//   const rows = tableData.map((row, index) => {
//     return (
//       <tr Key = {index}>
//         {/* <td> {row.index} </td> */}
//         <TableData label = {label}/>
//         {/* <td> {row.task} </td>
//         <td> {row.dueDate} </td>
//         <td> {row.status} </td>
//         <td> {row.requests} </td> */}
//         {children}
//       </tr>
//     )
//   })
//   return <tbody> {rows} </tbody>
// }