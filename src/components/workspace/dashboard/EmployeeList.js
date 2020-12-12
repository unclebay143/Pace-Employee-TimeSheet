import React, { Component } from 'react';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {useSelector} from 'react-redux';
import Table from '../layouts/Table';
  

export default function EmployeeList(){
        // const { firstname, lastname, department, phone, role, employeed_date } = employees
        const employees = useSelector(state => state.employee)
        // console.log(employees)
        const Header = [
            {
              dataField: '',
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
              dataField: 'phone',
              text: 'Phone',
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
              dataField: 'employeed_date',
              text: 'Employed Date',
            },
              
            {
            
              formatter: (cellContent, row) => {
                return (
                  <>
                  <i
                    className="fa fa-eye"
                    onClick={(e) => handleDelete(row)} 
                  >
                    
                  </i>
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
                <Table
                    keyField='id'
                    title="Employee List"
                    data={employees}
                    columns={Header}
                    bordered= { false }
                    pagination = { paginationFactory() }
                />
            </>
        )
    }
