// React
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';

// Components
import Table from '../../workspace/layouts/Table';
import { Link } from 'react-router-dom';

// Loader
import Loader from '../../loader/Loader';



export default  function EmployeeList(){
  // set usestate for isFetching too
  const { employees, isFetching } = useSelector(state => state.employees)
  const [ employeesList, setEmployeesList ] = useState([{}])
  const [ Header, setHeader ] = useState([{}])


  useEffect(() => {
    setEmployeesList(employees)
  }, [employees, isFetching])

  // Set the bootrap details
  useEffect(() => {
    const Header = [
      {
        dataField: 'staffID',
          text: 'S/N'
        },
        {
          dataField: 'firstName',
          text: 'Firstname',
        },
        {
          dataField: 'lastName',
          text: 'Lastname',
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
      setHeader(Header)

      // styles each row
  }, [])


  const rowStyles = {
    cursor: 'pointer'
  }


  // If the employee list is been fetched from the server or not mounted on the ui, show the loader 
  if(isFetching){
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
