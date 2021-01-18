import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { updateTaskStatus } from '../../../actions/task/taskAction';
import { deleteAssignedTask } from '../../../actions/task/assignedTaskAction';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyEmployees } from '../../../actions/employee/employeeAction';

// import { connect } from 'react-redux';

import Button from '../../layouts/Button';

import unclebay from '../../pages/pages-images/ayodele_samuel_adebayo.jpg';
import attachment from '../../pages/pages-images/v.jpg';
import { FETCH_TASK_DETAILS_API_URL } from '../../../services/root-endpoints';
import { authHeader, currentUserFromLocalStorage } from '../../../services/auth-header';
import axios from 'axios';
import { formatDate } from '../../../_helper/dateFormatter';
import Loader from '../../loader/Loader';
import { currentUserRoleID } from "../../../services/auth-header";
import { taskStatusUpdated } from '../../../toaster';


const TaskDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [taskDetails, setTaskDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { employees } = useSelector(state => state.employees)
  const [assignedUser, setAssignedUser] = useState({});
  const [taskStatusName, setTaskStatusName] = useState('');

  useEffect(() => {
    // Fetch company employees
      dispatch(getCompanyEmployees())               
  },[dispatch]);
    
  useEffect(() => {
      // Fetch the task details from the server
      const fetchTaskDetails = async() =>{
        const response = await axios.get(FETCH_TASK_DETAILS_API_URL + params.id, { headers: authHeader })
        setTaskDetails(response.data.data[0])
        setIsLoading(false)
        if(currentUserRoleID !== 5 ){
          const findAssignedEmployee = employees.filter((employee)=>employee.staffID === response.data.data[0].assignedID)
          setAssignedUser(findAssignedEmployee[0])
          setIsLoading(false)
        }            
      }
      // Function call
      fetchTaskDetails()
  },[params.id, employees]);

  useEffect(() => {
    switch (taskDetails.taskStatus) {
      case 1:
        setTaskStatusName(' Accept')
        break;
      case 2:
        setTaskStatusName(' Submit')
        break;
      case 3:
        setTaskStatusName(' Completed')
        break;
      case 4:
        setTaskStatusName(' Overdue')
        break;
      default:
        setTaskStatusName('Error');
        break;
    }
  }, [taskDetails.taskStatus])

  const handleTaskStatus = () =>{
    dispatch(updateTaskStatus(updateTaskDetails))
    .then((response)=>{
      taskStatusUpdated()
      window.location.reload()

      console.log(response)
    })

  }
  
  const updateTaskDetails = {
    assignedID: taskDetails.assignedID,
    staffID: taskDetails.staffID,
    taskID: taskDetails.taskID,
    // check if the status is already upto 5
    taskStatus: taskDetails.taskStatus <= 2 ? taskDetails.taskStatus + 1 : taskDetails.taskStatus
  }


  // if(assignedUser === undefined){ // If the assignedUser details is not fetched keep loading
    if(isLoading){ // If the assignedUser details is not fetched keep loading
    return(
        <>
          <Loader />
        </>
      )
  }



    return (
      <>
        <section className="py-0">
          <div className="row mb-4">
            <div className="col-lg-12 mb-1 compose-task task-util">
                <div className="card">
                  <div className="py-3">
                  <header className="card-header wht-bg">
                    <h4 className="d-flex justify-content-between task-page-lead">
                      {/* { taskDetails.taskName } */}
                      {/* View Task */}
                      
                    </h4>
                  </header>
                  </div>
                  <div className="card-body py-1">
                    <div className= "pt-3">
                      <div className="mail-header row">
                        <div className="col-md-8">
                          <h4 className="float-left task-title">{taskDetails.taskName}</h4>
                        </div>
                        <div className="col-md-4">
                          <div className="compose-btn-wrapper">
                            {
                              currentUserRoleID === 5 ? (
                                <>
                                  <Button 
                                    type="submit"
                                    label={taskStatusName}
                                    icon="fa fa-check"
                                    className="btn btn-theme btn-sm"
                                    onClick={(()=>handleTaskStatus(updateTaskDetails))}
                                    />
                                  {/* <Button 
                                    type="submit"
                                    label=" Request"
                                    className="btn btn-sm mx-2 special"
                                    />                                      */}
                                  <Button 
                                    type="submit"
                                    label=" Delete"
                                    icon="fa fa-trash-alt"
                                    className="btn btn-sm special pace-bg-accent mx-2"
                                    onClick={(()=>dispatch(deleteAssignedTask(taskDetails.staffID)))}
                                    // onClick={(()=>dispatch(deleteTask(taskDetails.taskID)))}
                                  />          
                                </>
                              )
                              :
                              (
                                <>
                                  <Button 
                                    type="submit"
                                    label=" Delete"
                                    icon="fa fa-trash-alt"
                                    className="btn btn-sm special pace-bg-accent"
                                    onClick={(()=>dispatch(deleteAssignedTask(taskDetails.staffID)))}
                                    // onClick={(()=>dispatch(deleteTask(taskDetails.taskID)))}
                                  />          
                                </>
                              )
                            }
                          </div>
                        </div>
                      </div>
                      <hr />
                        <div className="mail-sender">
                          <div className="row">
                            <div className="col-md-8">
                              {
                                currentUserRoleID === 5 ? (
                                  <>
                                    <img src={unclebay} alt="sender profile" className="sender-image mr-2"/>
                                    <strong>Admin</strong>
                                    <span className=""> </span> to
                                    <strong> {currentUserFromLocalStorage.email} </strong>

                                  </>
                                )
                                :
                                (
                                  <>
                                    <img src={unclebay} alt="sender profile" className="sender-image mr-2"/>
                                    <strong>Me</strong>
                                    <span className=""> </span> to
                                    <strong> {assignedUser.email} </strong>
                                  </>
                                )
                              }
                              
                            </div>
                            {/* due date */}
                            <div className="col-md-4">
                              <p className="date float-right mr-2"> {formatDate(taskDetails.dateCreated)} </p>
                            </div>
                          </div>
                        </div>
                      <hr />
                      {/* TASK DESCRIPTION */}
                      <div className="view-mail">
                       <p> {taskDetails.taskDescription} </p>
                      </div>
                      <div className="attachment-mail d-none">
                        <p>
                          <span><i className="fa fa-paperclip" /> 2 attachments — </span>
                          <NavLink exact to="/dashboard/task/">
                            Download all attachments
                          </NavLink> 
                          <span className="mx-1"> | </span> 
                          <NavLink exact to="/dashboard/task/">
                            View all images
                          </NavLink>
                          {/* <a href="#">Download all attachments</a> |
                          <a href="#">View all images</a> */}
                        </p>
                        <ul className="attachment-wrapper d-flex">
                          <li>
                            <NavLink exact to="/dashboard/task/" className="attachment-thumb mr-5">
                              <img src={attachment} alt="attachment"/>
                            </NavLink>
                            <div className="links">
                              <NavLink exact to="/dashboard/task/">
                                View
                              </NavLink>
                              <span> - </span> 
                              <NavLink exact to="/dashboard/task/">
                                Download
                              </NavLink>
                            </div>
                          </li>
                          <li>
                            <NavLink exact to="/dashboard/task/" className="attachment-thumb">
                              <img src={attachment} alt="attachment"/>
                            </NavLink>
                            <div className="links">
                              <NavLink exact to="/dashboard/task/">
                                View
                              </NavLink>
                              <span> - </span> 
                              <NavLink exact to="/dashboard/task/">
                                Download
                              </NavLink>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="form-group d-flex justify-content-start"> */}
                        {/* <div className="compose-btn float-left my-4">
                          {
                            taskDetails.taskStatus === 2 ? (
                              <>

                                <Button 
                                  type="button"
                                  icon="fa fa-check"
                                  label="Completed"
                                  className="btn btn-theme btn-sm"
                                  onClick={(()=>dispatch(updateTaskStatus(updateTaskDetails)))}
                                />                                   

                              </>
                            )
                            :
                            ""
                          } */}
                          {/* <Button 
                            type="submit"
                            label=" Request"
                            className="btn btn-sm special mx-2"
                          />    
                          <Button 
                            type="submit"
                            label=" Delete"
                            icon="fa fa-trash-alt"
                            className="btn btn-sm special pace-bg-accent"
                            onClick={(()=>(deleteAssignedTask(taskDetails.staffID)))}
                            onClick={(()=>(deleteTask(taskDetails.staffID)))}
                          /> */}
                        {/* </div> */}
                      {/* </div>   */}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>           
      </>
    )
  }

export default TaskDetails;