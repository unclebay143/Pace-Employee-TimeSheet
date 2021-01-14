// React
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';

// Components
import Table from '../../workspace/layouts/Table';
import { Link } from 'react-router-dom';

// Loader
import Loader from '../../loader/Loader';
import { getCompanyEmployees } from '../../../actions/employee/employeeAction';



export default  function EmployeeList(){
  // set usestate for isFetching too
  const { employees, isFetching } = useSelector(state => state.employees)
  const [ employeesList, setEmployeesList ] = useState([])
  const [ isFetchingState, setIsFetchingState ] = useState(isFetching)
  const dispatch = useDispatch()
  
  useEffect(() => {
    // Fetch Company Employess
    if(employees.length === 0){
      dispatch(getCompanyEmployees())
    }
    setEmployeesList(employees)
    setIsFetchingState(false)
  }, [dispatch, employees])


  // Set the bootrap details
  const Header = [
    {
      dataField: 'staffID',
        text: 'S/N'
      },
      {
        dataField: 'firstName',
        text: 'First',
      },
      {
        dataField: 'lastName',
        text: 'Lastname',
      },
      {
        dataField: 'email',
        text: 'Email',
      },
      {
        
        formatter: (cellContent, row) => {
          return (
            <>
              <Link 
                to={`/dashboard/employee/profile/${row.staffID}`}
                >
                View
                
              </Link>
            </>
          );
        },
      },
    
    ];

    // styles each row


  const rowStyles = {
    cursor: 'pointer'
  }


  // If the employee list is been fetched from the server or not mounted on the ui, show the loader 
  
  const employeesLists = [
    {
      firstName: 'Adebayo',
      staffID: '123',
      lastName: 'samuel',
      email: 'samuel'
    }
  ]

  if(isFetchingState){
    return(
        <>
            <Loader />
        </>
    )
  }
  return(
    <>
      <div  className="py-5">

        <Table
          keyField='id'
          title="Employee List"
          data={employeesList}
          columns={Header}
          bordered= { false }
          pagination = { paginationFactory() }
          enableSearch = { true }
          rowStyle = {rowStyles}
        />
      </div>
    </>
  )
}
