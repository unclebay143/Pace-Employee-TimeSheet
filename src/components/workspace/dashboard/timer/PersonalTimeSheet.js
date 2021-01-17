import React, { useEffect, useState } from 'react';
import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalTimeSheet } from '../../../../actions/timer/timerAction';


const Header = [
  {
    dataField: 'id',
    text: 'S/N'
  },
  {
    dataField: 'firstname',
    text: 'Firstname',
  },
  {
    dataField: 'lastname',
    text: 'Lastname',
  },
  {
    dataField: 'department',
    text: 'Department',
  },
  {
    dataField: 'role',
    text: 'Role',
  },
  {
    dataField: 'workedHour',
    text: 'Worked Hour',
  },
  {
    dataField: 'completedTask',
    text: 'Completed Task',
  },
    
//   {
  
//     formatter: (cellContent, row) => {
//       return (
//         <>
//         <button
//           className="btn btn-danger btn-xs mr-3"
//           onClick={(e) => handleDelete(row)} 
//         >
//           Delete
//         </button>
//         <button
//           className="btn btn-danger btn-xs"
//           onClick={(e) => handleDelete(row)} 
//         >
//           Delete
//         </button>
//         </>
//       );
//     },
//   },

];


// function handleDelete(rowId){
//   console.log(rowId);
// };


const PersonalTimeSheet = () => {
    const usersDetails = useSelector(state => state.timerReport)
    const [timeSheet, seTimeSheet] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPersonalTimeSheet())
    }, [])
    
    return (
        <div className="container-fluid py-5">
          <Table
            keyField='id'
            title="Timer Report"
            data={timeSheet}
            columns={Header}
            bordered= { false }
            pagination = { paginationFactory() }
          />
        </div>
    )
}

export default PersonalTimeSheet;