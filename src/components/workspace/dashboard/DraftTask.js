import React, { Component } from 'react';
import {Formik, Form, Field,  ErrorMessage} from 'formik';
import { TextInput, TextArea, DataList, Datalist } from '../../layouts/FormInput';


// const department = [
//   { key: 'Select an option', value: '' },
//   { key: 'web development', value: 'web development' },
//   { key: 'quality assurance', value: 'quality assurance' },
//   { key: 'Option 3', value: 'option3' }
// ]

// const sampleCompany = {
//   departments: [ 'web development', 'quality assurance', 'web design' ],
//   employeeRoles: ['backend', 'frontend', 'database manager'],
//   employeeType: ['admin', 'internal', 'staff'],
// }

// const existingDepartment = sampleCompany.departments.map((department)=><option value={department}>{department}</option>)
// const availableRole = sampleCompany.employeeRoles.map((role)=><option value={role}>{role}</option>)
// const availableType = sampleCompany.employeeType.map((type)=><option value={type}>{type}</option>)


class DraftTask extends Component {
  render() {
    return (
      <div>
        <section class="py-5">
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
                        <Form className="mt-2"  onSubmit={handleSubmit}>
                          <div className="form-group">
                            <TextInput 
                              label = "Title"
                              name = "taskTitle"
                              id = "task-title"
                              type = "text"
                              value={values.taskTitle}
                              className = "form-control lead"
                              labelClassName="lead"
                              placeholder = "Task Title"
                              onChange={handleChange}
                            />
                          </div>
                          
                          <div className="form-group row">
                            <div className="col-lg-6">
                              {/* <Field component="datalist" name="role"  onChange={handleChange} className="form-control">
                                            <option selected>Choose...</option>
                                            {availableRole}
                              </Field> */}
                              {/* <DataList
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

                              </DataList> */}
                              <TextInput 
                                label = "Departments"
                                name = "department"
                                id = "department"
                                type = "text"
                                value={values.department}
                                // options={department}
                                // key= {department.key}
                                className = "form-control lead"
                                labelClassName="lead"
                                placeholder = "Department"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-6">
                              <TextInput 
                                label = "Name"
                                name = "name"
                                id = "name"
                                type = "text"
                                value={values.name}
                                className = "form-control lead"
                                labelClassName="lead"
                                placeholder = "Name"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                            
                          <div className="form-group row">
                              <TextArea 
                                label = "Task Description"
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
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
                              <TextInput 
                                  label = "Due Date"
                                  name = "dueDate"
                                  id = "due-date"
                                  type="datetime-local"
                                  value={values.namedueDate}
                                  className = "form-control lead"
                                  labelClassName="lead"
                                  onChange={handleChange}
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