import React, { Component } from 'react';
import {Formik, Form, Field,  ErrorMessage} from 'formik';
import { TextInput, TextArea, DataList, Datalist } from '../../layouts/FormInput';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { assignTask } from '../../../actions/task/taskAction';



import Button from '../../layouts/Button';


class DraftTask extends Component {
  render() {
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
                  <div className="compose-btn-wrapper">
                    <Button 
                      type="submit"
                      label=" Send"
                      icon="fa fa-check"
                      className="btn btn-theme btn-sm"
                    />                                   
                    <Button 
                      type="submit"
                      label=" Discard"
                      icon="fa fa-times"
                      className="btn btn-sm special ml-2 mr-2 pace-bg-accent"
                    />
                    <Button 
                      type="submit"
                      label=" Draft"
                      className="btn btn-sm special"
                    />            
                  </div>
                  <div className="card-text">
                    <Formik
                      initialValues={{
                        department: '',
                        subject: '',
                        taskDescription: '',
                        file: '',
                        dueDate: ''
                      }}
                        // validationSchema = {}
                        onSubmit={ values =>{
                          // console.log(values)
                          // this.props.assignTask(values)
                          console.log(values)
                          
                        }
                      }
                    >
                      {({touched, errors, values, handleSubmit, handleChange, isSubmitting}) => (
                        <Form className="mt-0"  onSubmit={handleSubmit}>
                          <div className="form-group">
                            <TextInput 
                                label = "To:"
                                name = "department"
                                id = "department"
                                type = "text"
                                value={values.department}
                                className = "form-control lead"                                
                                onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <TextInput 
                                label = "Subject:"
                                name = "subject"
                                id = "subject"
                                type = "text"
                                value={values.subject}
                                className = "form-control lead"                                
                                onChange={handleChange}
                            />
                          </div>
                          
                          {/* <div className="form-group row">
                            <div className="col-lg-6">
                              <Field component="datalist" name="role"  onChange={handleChange} className="form-control">
                                            <option selected>Choose...</option>
                                            {availableRole}
                              </Field>
                              <DataList
                               label = "Department"
                               name = "department"
                               id = "department"
                               type = "text"
                               value={values.department}
                               className = "form-control lead"
                               
                               placeholder = "Department"
                               onChange={handleChange}
                              > 
                              <option selected>Choose...</option>
                                            {availableRole}

                              </DataList>
                            </div>
                          </div> */}
                            
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
                                  name = "file"
                                  id = "file"
                                  type = "file"
                                  value={values.file}
                                  className = "lead"
                                  onChange={handleChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <TextInput 
                                  label = "Due Date"
                                  name = "dueDate"
                                  id = "due-date"
                                  type="date"
                                  value={values.dueDate}
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
                              label=" Discard"
                              icon="fa fa-times"
                              className="btn btn-sm special ml-2 mr-2 pace-bg-accent"
                            />
                            <Button 
                              type="submit"
                              label=" Draft"
                              className="btn btn-sm special"
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
}

// const mapStateToProps = state => ({
//   AllTasks: state.task
// })

// DraftTask.propTypes = {
//   assignTask: PropTypes.func.isRequired
// }

// export default connect(null,{ assignTask })(DraftTask);
export default DraftTask;
