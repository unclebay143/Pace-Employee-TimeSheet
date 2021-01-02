// React
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';

// Components
import Table from '../layouts/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
  

export default  function EmployeeList(){
        // const { firstname, lastname, department, phone, role, employeed_date } = employees
        // const employees = useSelector(state => state.employee)
        // console.log(employees)
        const [employees, setEmployees] = useState([{
          id: 1,
          name: 'sam',
          username: 'bay',
          phone: '090898777',
          company: 'coming'
        }])
        useEffect(() => {
          async function getEm() {
            const { data } = await axios.get('http://fakerestapi.azurewebsites.net/api/v1/Users')
            // const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            setEmployees(data)
            console.log(data)
          }
          getEm()
        }, [])
        
        const Header = [
            {
              dataField: 'id',
              text: 'S/N'
            },
            {
              dataField: 'userName',
              text: 'Firstname',
            },
            {
              dataField: 'username',
              text: 'Lastname',
            },
            {
              dataField: 'phone',
              text: 'Phone',
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
                console.log(row.id);
                return (
                  <>
                  <Link to={`/dashboard/profile/${row.id}`}
                    className="fa fa-eye"
                    // onClick={(e) => handleDelete(row)} 
                    // onClick={(e) <Link to={`/dashboard/profile/${e}`} />}
                  >
                    
                  </Link>
                  </>
                );
              },
            },
          
          ];
          
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
                  />
                </div>
            </>
        )
    }
