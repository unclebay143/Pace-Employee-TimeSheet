// React
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editDepartment, deleteDepartment, openForm, getDepartment } from '../../../actions/company/department/departmentAction';

// Components
import { NewDepartmentForm } from './NewDepartmentForm';

// Layout
import Button from '../../layouts/Button';


const ManageDepartment = () => {
  const dispatch = useDispatch();
  const [shouldFormOpen, setShouldFormOpen] = useState();
  const { isFormOpen, departments } = useSelector(state => state.departments)
  
  useEffect(() => {
     // Fetch company department
     dispatch(getDepartment())
    document.title = 'Manage Department'
    setShouldFormOpen(isFormOpen)
  }, [isFormOpen])
    if(!departments){
      return(
          <div className="d-flex justify-content-center align-items-center mt-2" style={{height:'100vh', background: '#cccccc'}}>
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw" style={{fontSize: "23px"}}></i>
              <span>Loading... Please wait</span>
          </div>
      )
  }

    return (
      <>
      <div className="todo-container container">
            <div className="new-department-form">
              <style>
                {
                  `

                    .new-department-form{
                      position: fixed;
                      z-index: 1;
                      width: 100%;
                      height: 100%;
                      overflow: hidden;
                      top: 0;
                      left: 0;
                      justify-content: center;
                      align-items: center;
                      background-color: rgba(0, 0, 0, 0.5);
                      display: ${shouldFormOpen ? 'flex' : 'none'};
                    }

                  `
                }
              </style>
              <NewDepartmentForm />
            </div>
            <div className="col-12">
                <div className="card-hover-shadow-2x mb-3 card">
                    <div className="card-header-tab card-header">
                        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                          <Button
                            label=" Add Department"
                            icon="fa fa-plus "
                            type="button"
                            className="btn pace-btn-primary btn-sm text-white"
                            onClick={(()=>dispatch(openForm()))}
                          />
                        </div>
                    </div>
                    <div className="scroll-area-sm -shiftToDisabled">
                        <perfect-scrollbar className="ps-show-limits">
                        <div style={{position: 'static'}} className="ps ps--active-y">
                            <div className="ps-content">
                              <ul className=" list-group list-group-flush">
                                <table className="table">
                                  <thead className="thead-primary">
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Department name</th>
                                      <th scope="col">Total Staffs</th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      // Sort the department from bottom to head (reversing)- response from the server is using push
                                      [...departments].reverse().map((info,index)=>{
                                        return(
                                          <DepartmentRowLayout 
                                            serialNumber={index + 1}
                                            name={info.departmentName}
                                            // size={info.staffSize}
                                            key={index}
                                          />
                                        )
                                      
                                      })
                                    }
                                  </tbody>
                                </table>
                              </ul>
                            </div>
                        </div>
                        </perfect-scrollbar>
                    </div>
                    <div className="d-block text-right card-footer">
                        {/* <button className="mr-2 btn btn-link btn-sm">Cancel</button> */}
                        {/* <TodoForm /> */}
                      {/* <button className="btn btn-primary" onClick={(()=>dispatch(openTodoForm()))}>Add Todo</button> */}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}




const DepartmentRowLayout =({serialNumber, name, size})=>{
  const dispatch = useDispatch();
  return(
      <tr key={serialNumber}>
        <th scope="row" className='text-dark' style={{background: 'white', color:'blck'}}>{serialNumber}</th>
        <td>{name}</td>
        <td>{size}</td>
        <td className="d-flex justify-content-end">
            <Button 
              className="btn btn-info btn-sm mr-2"
              // label=" Edit "
              icon="fa fa-edit"
              type="button"
              onClick={(()=> dispatch(editDepartment()))}
            />
            <Button 
              className="btn btn-danger btn-sm"
              // label=" Delete"
              icon="fa fa-trash"
              type="button"
              onClick={(()=> dispatch(deleteDepartment(serialNumber)))}
            />
        </td>
      </tr>
  )
}


export default ManageDepartment;