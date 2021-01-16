import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink, useHistory } from 'react-router-dom';
import { updateTaskStatus, deleteTask } from '../../../actions/task/taskAction';
import { deleteAssignedTask } from '../../../actions/task/assignedTaskAction';
import { useDispatch, useSelector } from 'react-redux';

// import { connect } from 'react-redux';

import Button from '../../layouts/Button';

import unclebay from '../../pages/pages-images/ayodele_samuel_adebayo.jpg';
import attachment from '../../pages/pages-images/v.jpg';


const TaskDetails = () => {
  const {assignedTasks, isFetching } = useSelector(state => state.assignedTasks);
  const { tasks } = useSelector(state => state.tasks);
  const params = useParams();
  const dispatch = useDispatch();
  const [taskDetails, setTaskDetails] = useState([{}]);

  console.log(assignedTasks);
  console.log(tasks, 'ttt');

useEffect(() => {
  const getTaskDetails = assignedTasks.filter((task)=>task.taskID === parseInt(params.id));
    setTaskDetails(getTaskDetails[0])
    console.log(getTaskDetails[0], 'gtd')
  }, []);

useEffect(() => {
  const getTaskDetails = tasks.filter((task)=>task.taskID === parseInt(params.id));
    setTaskDetails(getTaskDetails[0])
    console.log(getTaskDetails[0], 'taskgtds')
  }, []);
  
  const updateTaskDetails = {
    assignedID: taskDetails.assignedID,
    staffID: taskDetails.staffID,
    taskID: taskDetails.taskID,
    taskStatus: taskDetails.taskStatus + 1,
  }


  
  console.log(updateTaskDetails, 'uuuhere');
  console.log(taskDetails, 'here');
  console.log(taskDetails.taskName, 'hereE');
    return (
      <>
        <section className="py-0">
          <div className="row mb-4">
            <div className="col-lg-12 mb-1 compose-task task-util">
                <div className="card">
                  <div className="py-3">
                  <header className="card-header wht-bg">
                    <h4 className="d-flex justify-content-between task-page-lead">
                      { taskDetails.taskName }
                    </h4>
                  </header>
                  </div>
                  <div className="card-body py-1">
                    <div className= "pt-3">
                      <div className="mail-header row">
                        <div className="col-md-8">
                          <h4 className="float-left task-title">Build a new landing page</h4>
                        </div>
                        <div className="col-md-4">
                          <div className="compose-btn-wrapper">
                            <Button 
                              type="submit"
                              label="  Accept"
                              icon="fa fa-check"
                              className="btn btn-theme btn-sm"
                              onClick={(()=>dispatch(updateTaskStatus(updateTaskDetails)))}
                            />
                            <Button 
                              type="submit"
                              label=" Request"
                              className="btn btn-sm mx-2 special"
                            />                                     
                            <Button 
                              type="submit"
                              label=" Delete"
                              icon="fa fa-trash-alt"
                              className="btn btn-sm special pace-bg-accent"
                              onClick={(()=>dispatch(deleteAssignedTask(taskDetails.staffID)))}
                              // onClick={(()=>dispatch(deleteTask(taskDetails.taskID)))}
                            />          
                          </div>
                        </div>
                      </div>
                      <hr />
                        <div className="mail-sender">
                          <div className="row">
                            <div className="col-md-8">
                              <img src={unclebay} alt="sender" className="sender-image mr-2"/>
                              <strong>Zac Doe</strong>
                              <span className="">[zac@youremail.com]</span> to
                              <strong> me</strong>
                            </div>
                            {/* due date */}
                            <div className="col-md-4">
                              <p className="date float-right mr-2"> { taskDetails.dateCreated } </p>
                            </div>
                          </div>
                        </div>
                      <hr />
                      {/* TASK DESCRIPTION */}
                      <div className="view-mail">
                       <p> {taskDetails.taskDescription} </p>
                      </div>
                      <div className="attachment-mail ">
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
                              <img src={attachment} />
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
                              <img src={attachment} />
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
                        <div className="compose-btn float-left my-4">
                          <Button 
                            type="submit"
                            label=" Accept"
                            icon="fa fa-check"
                            className="btn btn-theme btn-sm"
                            onClick={(()=>dispatch(updateTaskStatus(updateTaskDetails)))}
                          />                                   
                          <Button 
                            type="submit"
                            label=" Request"
                            className="btn btn-sm special mx-2"
                          />    
                          <Button 
                            type="submit"
                            label=" Delete"
                            icon="fa fa-trash-alt"
                            className="btn btn-sm special pace-bg-accent"
                            // onClick={(()=>(deleteAssignedTask(taskDetails.staffID)))}
                            onClick={(()=>(deleteTask(taskDetails.staffID)))}
                          />
                        </div>
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