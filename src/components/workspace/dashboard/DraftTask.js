// React
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Formik, Form} from 'formik';

// Layouts
import { TextInput, TextArea } from '../../layouts/FormInput';
import Button from '../../layouts/Button';

// Toast
import { taskNotSent, taskSent } from '../../../toaster';

// Actions
import { assignTask } from '../../../actions/task/taskAction';
import { getCompanyEmployees } from "../../../actions/employee/employeeAction";

const DraftTask = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector(state => state.employees)
  const employeesDropDown = employees.map(({staffID, email}, index)=><option className="text-red" value={staffID} key={index}>{email}</option>)

  useEffect(() => {
    dispatch(getCompanyEmployees()) 
  },[dispatch])

    return (
      <div>
        <section className="">
          <div className="row mb-4">
            <div className="col task-util compose-task">
              <div className="card">
              <header className="card-header wht-bg">
                <h4 className="gen-case">
                    Assign Task
                </h4>
              </header>
                <div className="card-body">
                  <div className="card-text">
                    <Formik
                      initialValues={{
                        assignedID: '',
                        taskName: '',
                        taskDescription: '',
                        documentsAttached: '',
                        endDate: ''
                      }}
                        // validationSchema = {}
                        onSubmit={( values, action) =>{
                          dispatch(assignTask(values))
                          .then((response)=>{
                            taskSent()
                            action.resetForm()
                          })
                          .catch((error)=>{
                            taskNotSent()
                            action.setSubmitting(false)
                          })
                        }
                      }
                    >
                      {({touched, errors, values, handleSubmit, handleChange, isSubmitting, resetForm}) => (
                        <Form className="mt-0"  onSubmit={handleSubmit}>
                          {/* <pre>{ JSON.stringify(values, null, 2) }</pre> */}
                          <div className="compose-btn-wrapper">
                            <Button 
                              type="submit"
                              className="btn btn-theme btn-sm"
                              disabled={isSubmitting}
                              label=" Assign"
                              icon={`${isSubmitting ? "fa fa-spinner fa-spin" : "fa fa-check" }`}
                            />                                   
                            <Button 
                              type="submit"
                              label=" Draft"
                              icon="fa fa-edit"
                              className="btn btn-sm ml-2 mr-2 special pace-bg-primary"
                            />     
                            <Button 
                              type="submit"
                              label=" Discard"
                              icon="fa fa-times"
                              className="btn btn-sm pace-bg-accent"
                              onClick={(()=>resetForm())} 
                            />       
                          </div>
                          <div className="form-group">
                            <TextInput 
                                label = "To:"
                                name = "assignedID"
                                id = "assignedId" // id must not share same name with list
                                list = "assignedID"
                                type = "text"
                                // placeholder="Start Typing"
                                value={values.assignedID}
                                className = "form-control lead"                                
                                onChange={handleChange}
                                autocomplete="off"
                            />
                            <datalist id="assignedID" >
                              {/* only way to make the dropdown larger, the with is not accepted in the dropdown tag */}
                              <option>
                                Employees Suggestion:
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp;

                              </option>
                                { employeesDropDown }
                            </datalist>
                          </div>                            
                          <div className="form-group">
                            <TextInput 
                                label = "Subject:"
                                name = "taskName"
                                id = "taskName"
                                type = "text"
                                value={values.taskName}
                                className = "form-control lead"                                
                                onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                              <TextArea 
                                label = "Task description"
                                name = "taskDescription"
                                id = "task-description"
                                value = {values.taskDescription}
                                className= "form-control lead"                               
                                rows = "4"
                                // cols = "57"
                                resize = "none"
                                onChange={handleChange} 
                              />
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-6">
                              <TextInput 
                                  label = "Attachment"
                                  name = "documentsAttached"
                                  id = "documentsAttached"
                                  type = "file"
                                  value={values.documentsAttached}
                                  className = "lead"
                                  onChange={handleChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <TextInput 
                                  label = "Due Date"
                                  name = "endDate"
                                  id = "due-date"
                                  type="date"
                                  value={values.endDate}
                                  className = "form-control lead"     
                                  onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="d-none compose-btn mt-4">
                            <Button 
                              type="submit"
                              className="btn btn-theme btn-sm"
                              disabled={isSubmitting}
                              label={isSubmitting ? 
                                (
                                  <span><i className="fa fa-spinner fa-spin"></i> Sending</span>
                                ) : (
                                  <span><i className="fa fa-check"></i> Assign</span>
                              )}
                            />         
                            <Button 
                              type="submit"
                              label=" Draft"
                              icon="fa fa-edit"
                              className="btn btn-sm ml-2 mr-2 special"
                            />                           
                            <Button 
                              type="submit"
                              label=" Discard"
                              icon="fa fa-times"
                              className="btn btn-sm pace-bg-accent"
                              onClick={(()=>resetForm())} 
                            />   
                          </div>
                        </Form>
                      )}

                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>    
      </div>
    )
  }

export default DraftTask;
