// React
import React from 'react';

// Layout
import Button from '../../layouts/Button';

const DepartmentRowLayout =({index, name, size})=>{
  return(
      <tr key={index}>
        <th scope="row" className='text-dark' style={{background: 'white', color:'blck'}}>{index}</th>
        <td>{name}</td>
        <td>{size}</td>
        <td className="d-flex justify-content-end">
            <Button 
              className="btn btn-info btn-sm mr-2"
              // label=" Edit "
              icon="fa fa-edit"
              type="button"
              onClick={(()=>alert(name, 'will be edited'))}
            />
            <Button 
              className="btn btn-danger btn-sm"
              // label=" Delete"
              icon="fa fa-trash"
              type="button"
              onClick={(()=>alert(name, 'will be deleted'))}
            />
        </td>
      </tr>
  )
}


export const ManageDepartment = () => {

  const dummyDepartment = [
    {
      name: 'company3',
      staffSize: 40
    },
    {
      name: 'company2',
      staffSize: 30
    },
    {
      name: 'company3',
      staffSize: 40
    },
    {
      name: 'company2',
      staffSize: 30
    },
    {
      name: 'company3',
      staffSize: 40
    },
    {
      name: 'company2',
      staffSize: 30
    },
    {
      name: 'company3',
      staffSize: 40
    },
  ]
    return (
      <>
      <div className="todo-container container">
          {/* <ToastContainer /> */}
          {/* <pre>{triggerTodoForm ? 'false, open' : 'false, don\'t open' }</pre> */}
            <div className="col-12">
                <div className="card-hover-shadow-2x mb-3 card">
                    <div className="card-header-tab card-header">
                        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                          <Button
                            label=" Add Department"
                            icon="fa fa-plus "
                            type="button"
                            className="btn bg-success btn-sm text-white"
                          />
                          </div>
                    </div>
                    <div className="scroll-area-sm -shiftToDisabled">
                        <perfect-scrollbar className="ps-show-limits">
                        <div style={{position: 'static'}} className="ps ps--active-y">
                            <div className="ps-content">
                              <ul className=" list-group list-group-flush">
                                <table className="table">
                                  <thead className="thead-dark">
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Department name</th>
                                      <th scope="col">Total Staffs</th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      dummyDepartment.map((info,index)=>{
                                        console.log(index)
                                        return(
                                          <DepartmentRowLayout 
                                            index={index + 1}
                                            name={info.name}
                                            size={info.staffSize}
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
