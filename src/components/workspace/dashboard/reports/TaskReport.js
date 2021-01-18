// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Axios
import axios from 'axios';

// APIs and Payloads
import { FETCH_COMPANY_TASK_SHEET_URL } from '../../../../services/root-endpoints';
import { authHeader, currentUserCompanyID } from '../../../../services/auth-header';

// Actions
import { getDepartment } from "../../../../actions/company/department/departmentAction";

// Layouts
import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';

// Helper
import { formatDate } from '../../../../_helper/dateFormatter';
import { somethingWentWrongLogger } from '../../../../toaster';


// Set the departments component state
const handleFormatDate = (selectedDepartmentTaskSheet) =>{
  const formatedTaskSheet = selectedDepartmentTaskSheet.map((taskRecord)=> {
    taskRecord.endDate = formatDate(taskRecord.endDate) 
    return taskRecord
  })
  return formatedTaskSheet
}

export default function TaskReport() {
  const { departments } = useSelector(state => state.departments); // departments from redux
  const dispatch = useDispatch();
  const [departmentsState, setDepartmentsState] = useState([]); // department state in component level, helps triggers renders
  const [ selectedDepartmentID, setSelectedDepartmentID ] = useState(""); // selected department ID
  const [ selectedDepartmentTaskSheet, setSelectedDepartmentTaskSheet ] = useState([]);
  const departmentsDropDown = departmentsState.map(({departmentName, departmentID}, index)=><option className="text-red" value={departmentID} key={index}>{departmentName}</option>)

  // Function handling the change in department dropdown
  const handleChange = (event) =>{
    // Get the selected department and  store the values which is the departmentID to the state
    setSelectedDepartmentID(event.target.value)
  }

  // Dispatch function to fetch the department in the company
  useEffect(() => {
      dispatch(getDepartment())
  }, [dispatch])


  useEffect(() => {
    setDepartmentsState(departments)
  }, [departments, selectedDepartmentTaskSheet]);

  // Fetch the selected department task sheet
  useEffect(() => {
    // Only fetch the department task if the user select a department
    if(selectedDepartmentID.length !== 0){
      axios.get(FETCH_COMPANY_TASK_SHEET_URL + currentUserCompanyID + "/" + selectedDepartmentID, {headers: authHeader} )
      .then((response)=>{
        setSelectedDepartmentTaskSheet(handleFormatDate(response.data.data)) // Send to function to formate the date to human readable
      })
      .catch((error)=>{
        somethingWentWrongLogger()
      })
    }
  }, [selectedDepartmentID]);

  // Boostrap header
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
      dataField: 'taskName',
      text: 'Task Assigned',
    },
    {
      dataField: 'endDate',
      text: 'Due Date',
    },
    {
      dataField: 'taskStatus',
      text: 'Task Status',
    },
    {
    
      formatter: (cellContent, row) => {
        console.log(row)
        return (
          <>
              <tr>
                <Link to={`/dashboard/task/view-task/`}>
                  View
                </Link>
              </tr>
          </>
        );
      },
    },
  
  ];
  
    


  return (
      <>
        <div className="container-fluid py-3">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="px-3 main-breadcrumb">
              <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                  <Link to='/dashboard'>
                      Dashboard 
                  </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                  { selectedDepartmentTaskSheet.departmentName } Task Sheet 
              </li>
              </ol>
          </nav>
      
          {/* /Breadcrumb */}
          <div className="">
            <div col="col-9">
                <section className="col-4 mb-4 text-dark text-uppercase">
                  <select name="department" onChange={handleChange} className="form-control">
                    <option>Select Department</option>
                    {departmentsDropDown}
                  </select>
                </section>
              <div className="container-flid">
                <Table
                    keyField='id'
                    title="Task Sheet"
                    data={selectedDepartmentTaskSheet}
                    columns={Header}
                    bordered= { false }
                    pagination = { paginationFactory() }
                    enableSearch = { true }
                  /> 
                  </div>
              </div>
          </div>
      </div>
          
    </>
  )
}
