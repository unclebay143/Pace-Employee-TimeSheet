import React, { useEffect, useState } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import { TextInput } from '../../../layouts/FormInput';
import Button from '../../../layouts/Button';
import { Link } from 'react-router-dom';
// import { addNewCalendarEvent, getCalendarEvent } from '../../../actions/company/calendar/calendarAction';
import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../../loader/Loader';
// import { formatDate } from '../../_helper/dateFormatter';
// import { date } from 'yup';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { FETCH_COMPANY_TASK_SHEET_URL } from '../../../../services/root-endpoints';
import { authHeader, currentUserCompanyID } from '../../../../services/auth-header';
import { getDepartment } from "../../../../actions/company/department/departmentAction";
// import React from 'react';
import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { formatDate } from '../../../../_helper/dateFormatter';
// import { useSelector } from 'react-redux';
// import { TextInput } from '../../../../../../layouts/FormInput';


export default function TaskReport() {
    // const { events, isFetching } = useSelector(state => state.calendar);
    const [tasksSheet, setTasksSheet] = useState([]);
    // const [ isFetchingState, setIsFetchingState ] = useState(isFetching);
    const dispatch = useDispatch();
    // const history = useHistory()

    useEffect(() => {
        dispatch(getDepartment())
    }, [])

    useEffect(() => {
        // const data = {
            const departmentID = 671
        // }
        console.log(currentUserCompanyID);
        axios.get(FETCH_COMPANY_TASK_SHEET_URL + currentUserCompanyID + "/" + departmentID, {headers: authHeader} )
        .then((response)=>{
            console.log(response.data)
            setTasksSheet(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, []);
    console.log(tasksSheet)
    
    // useEffect(() => {
    //     if(events){
    //         setEventsState(events)
    //         setIsFetchingState(false)
    //     }
    // }, [events]);

    // if(isFetchingState){
    //     return(
    //         <Loader />
    //     )
    // }

   const eventsState =  [
       {
            title: 'samue',
            end: '01/01/2020',
            end: '01/01/2020'
        }
    ]
    const calc = 2;

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
        dataField: 'workedHour',
        text: 'Receivable',
      },
        
      {
      
        formatter: (cellContent, row) => {
          return (
            <>
                <tr></tr>
            </>
          );
        },
      },
    
    ];
    
    


    return (
        <>

            <style>
                {
                    `
                    .rbc-calendar {
                        min-height: 500px ;
                        }
                    `
                }
            </style>
            <div className="py-3">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Task Sheet
                        </li>
                        </ol>
                    </nav>
                
                {/* /Breadcrumb */}
            <div className="">
                <section className="">
                    <div className="mb-3">
                        <div className="input-group mb-2 mr-sm-2">
                            <Link to="/dashboard/task/draft-task">
                                <Button 
                                    type="button"
                                    label="New Task"
                                    className="btn btn-sm btn-info ml-2"
                                    />
                            </Link>
                        </div>
                    </div>
                    <div col="col-9">
                    <div className="container-fluid py-5">
                        <Table
                            keyField='id'
                            title="Task Report"
                            data={tasksSheet}
                            columns={Header}
                            bordered= { false }
                            pagination = { paginationFactory() }
                            enableSearch = { true }
                            // customInput = { true }
                            // customInputName = "expectedWorkHour"
                            // customInputPlaceHolder = "Expected WorkHour"
                            // customButtonType="button"
                            // customButtonLabel="Calculate"
                            // customButtonFunction={handleCalculate()}
                        />
                        </div>
                        {/* <section>
                            <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center h5">
                                <span>Task Sheet</span>
                                <span>Task Sheet</span>
                                <span>Task Sheet</span>
                                <span>Task Sheet</span> */}
                                {/* <span className="mr-5 pr-5">Event Name</span> */}
                            {/* </li>

                                {
                                    tasksSheet.map(({firstName, lastName, taskName, endDate, taskStatus}, index)=>{
                                        return(
                                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                                <span>
                                                {taskName}
                                                </span>
                                                <span>
                                                {firstName}
                                                </span>
                                                <span>
                                                {lastName}
                                                </span>
                                                <span>
                                                {endDate}
                                                </span>
                                                <span>
                                                {taskStatus}
                                                </span>
                                                <section>
                                                    <span className="text-center mr-5 pr-5">
                            
                                                    </span>
                                                    <span className="   ">
                                                        <button className="btn text-white badge badge-primary badge-pill mr-2">Edit</button>
                                                        <button className="btn text-white badge badge-red badge-pill">Delete</button>
                                                    </span>
                                                </section>
                                            </li>
                                        )

                                    })
                                }
                            </ul>
                        </section> */}
                    </div>
                </section>
            </div>
        </div>
            
        </>
    )
}
