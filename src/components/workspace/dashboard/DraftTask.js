import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Formik, Form, Field,  ErrorMessage} from 'formik';

import { assignTask } from '../../../actions/task/taskAction';

import { TextInput, TextArea, DataList, Datalist } from '../../layouts/FormInput';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { assignTask } from '../../../actions/task/taskAction';



import Button from '../../layouts/Button';


const DraftTask = () => {
  const dispatch = useDispatch();

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
                            action.setSubmitting(true)
                            action.setSubmitting(false)
                            action.resetForm()
                        })
                        .catch((error)=>{
                            action.setSubmitting(false)
                        })
                          console.log(values)
                          
                        }
                      }
                    >
                      {({touched, errors, values, handleSubmit, handleChange, isSubmitting, resetForm}) => (
                        <Form className="mt-0"  onSubmit={handleSubmit}>
                          <div className="compose-btn-wrapper">
                            <Button 
                              type="submit"
                              label=" Send"
                              icon="fa fa-check"
                              className="btn btn-theme btn-sm"
                            />                                   
                            <Button 
                              type="submit"
                              label=" Draft"
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
                          <div className="form-group">
                            <TextInput 
                                label = "To:"
                                name = "assignedID"
                                id = "assignedID"
                                type = "text"
                                value={values.assignedID}
                                className = "form-control lead"                                
                                onChange={handleChange}
                            />
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
                          <div className="compose-btn mt-4">
                            <Button 
                              type="submit"
                              label=" Send"
                              icon="fa fa-check"
                              className="btn btn-theme btn-sm"
                            />         
                            <Button 
                              type="submit"
                              label=" Draft"
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


// const mapStateToProps = state => ({
//   AllTasks: state.task
// })

// DraftTask.propTypes = {
//   assignTask: PropTypes.func.isRequired
// }

// export default connect(null,{ assignTask })(DraftTask);
export default DraftTask;
