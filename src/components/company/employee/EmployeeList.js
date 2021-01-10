// React
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';

// Components
import Table from '../../workspace/layouts/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
  
// Actions
import { getCompanyEmployees } from '../../../actions/employee/employeeAction';


export default  function EmployeeList(){
        const { employees } = useSelector(state => state.employees)
        const [employeesList, setEmployeesList] = useState([{}])
        // console.log(employees)
        const dispatch = useDispatch();
        useEffect(() => {
          setEmployeesList(employees)
          // function getEm() {
          //   // axios.get('http://fakerestapi.azurewebsites.net/api/v1/Users')
          //   axios.get('https://jsonplaceholder.typicode.com/users')
          //   .then((response)=>{
          //     // const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
          //     setEmployees(response.data)
          //   })
          // }

          // dispatch(getCompanyEmployees())
          // getEm()
        }, [])

        console.log(employeesList)
        

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
              // dataField: 'phone',
              // text: 'Phone',
            },
            // {
            //   dataField: 'department',
            //   text: 'Department',
            // },
            // {
            //   dataField: 'role',
            //   text: 'Role',
            // },
            // {
            //   dataField: 'employeed_date',
            //   text: 'Employed Date',
            // },
              
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
          
            function handleDelete(rowId){
                console.log(rowId);
            };
        return (
            <>
            <div  className="py-5">

                <Table
                    keyField='id'
                    title="Employee List"
                    data={employees}
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
