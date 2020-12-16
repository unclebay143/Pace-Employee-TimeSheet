import React, { Component } from 'react';
import {Formik, Form, Field,  ErrorMessage} from 'formik';
import { TextInput, TextArea, DataList, Datalist } from '../../layouts/FormInput';

import Button from '../../layouts/Button';

class DraftTask extends Component {
  render() {
    return (
      <div>
        <section class="">
          <div class="row mb-4">
            <div class="col-lg-12 mb-4">
              <div class="card">
                <div class="card-header">
                  <h6 class="text-uppercase mb-0 pace-accent-color">Draft Task</h6>
                </div>
                <div class="card-body">
                  <div class="card-text">
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        message: ''
                      }}
                        // validationSchema = {}
                        onSubmit={ values=> console.log(values)}
                    >
                      {({touched, errors, values, handleSubmit, handleChange, isSubmitting}) => (
                        <Form className="mt-0"  onSubmit={handleSubmit}>
                          <div className="form-group">
                            <TextInput 
                              name = "subject"
                              id = "subject"
                              type = "text"
                              value={values.subject}
                              className = "form-control lead"
                              labelClassName="lead"
                              placeholder = "Subject:"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                          <TextInput 
                                name = "department"
                                id = "department"
                                type = "text"
                                value={values.department}
                                className = "form-control lead"
                                labelClassName="lead"
                                placeholder = "To:"
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
                               labelClassName="lead"
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
                                name = "taskDescription"
                                id = "task-description"
                                value = {values.taskDescription}
                                className= "form-control lead"
                                labelClassName="lead"
                                rows = "4"
                                // cols = "57"
                                resize = "none"
                                placeholder = "please drop your message here"
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
                                  className = "form-control lead"
                                  labelClassName="lead"
                                  onChange={handleChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <TextInput 
                                  label = "Due Date"
                                  name = "dueDate"
                                  id = "due-date"
                                  type="datetime-local"
                                  value={values.dueDate}
                                  className = "form-control lead"
                                  labelClassName="lead"
                                  onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-1 px-3">
                              <Button 
                                type="submit"
                                label="Send"
                                className="btn pace-btn-primary" 
                              />
                            </div>
                            <div className="col-sm-1">
                              <Button 
                                type="submit"
                                label="Draft"
                                className="btn pace-btn-grey" 
                              />
                            </div>
                            <div className="col-sm-1">
                            <Button 
                                type="submit"
                                label="Discard"
                                className="btn pace-btn-accent" 
                            />
                            </div>
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

export default DraftTask;