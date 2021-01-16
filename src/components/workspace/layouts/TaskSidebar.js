import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';

import Button from '../../layouts/Button';
const TaskSidebar =() => {

  const [currentUserRoleID, setCurrentUserRoleID] = useState('')
  
  useEffect(() => {
      const getCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(getCurrentUser){
        setCurrentUserRoleID(getCurrentUser.roleID)
      }
  }, [])
  return (

    <>
       {/* <div className="col-lg-3 mb-4"> */}

        <section className="task-sidebar card py-3">
            {
              currentUserRoleID === 5 ? "" : 
              (
                <NavLink exact to="/dashboard/task/draft-task" className="mx-auto">
                  <Button
                    type="submit"
                    label=" Draft Task "
                    icon="fa fa-pen" 
                    className="btn pace-btn-primary mx-3 btn-sm p-1"  
                  />
                </NavLink> 
              )
            }
          <hr/>
          <ul className="sidebar-menu list-unstyled">
            <li className="">
              <NavLink exact to="/dashboard/task/all-tasks" className="sidebar-link text-muted" activeClassName="active">
                <i className="fa fa-download mr-3 text-gray"/><span> Task Inbox</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink exact to="/dashboard/task/assigned-tasks" className="sidebar-link text-muted" activeClassName="active">
                <i className="fa fa-location-arrow mr-3 text-gray"/><span>Assigned</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink exact to="/dashboard/task/accepted-tasks" className="sidebar-link text-muted" activeClassName="active">
                <i className="fa fa-tasks mr-3 text-gray"/><span>Accepted</span>
              </NavLink>
            </li>

            {

              currentUserRoleID === 5 ? (

                // EMPLOYEE SIDEBAR
                <>
                  <li className="sidebar-list-item">
                    <NavLink exact to="/dashboard/task/" className="sidebar-link text-muted" activeClassName="active">
                      <i className="fa fa-reply-all mr-3 text-gray"/><span>Pending</span>
                    </NavLink>
                  </li>
                  <li className="sidebar-list-item">
                    <NavLink exact to="/dashboard/task/" className="sidebar-link text-muted" activeClassName="active">
                      <i className="fa fa-inbox mr-3 text-gray"/><span>Drafted</span>
                    </NavLink>
                  </li>
                </>
            ) : (
                // ADMINS SIDEBAR
                <>
                    
                    <li className="sidebar-list-item">
                      <NavLink exact to="/dashboard/task" className="sidebar-link text-muted" activeClassName="active">
                        <i className="fa fa-reply-all mr-3 text-gray"/><span>Pending</span>
                      </NavLink>
                    </li>
                    <li className="sidebar-list-item">
                      <NavLink exact to="/dashboard/task/" className="sidebar-link text-muted" activeClassName="active">
                        <i className="fa fa-inbox mr-3 text-gray"/><span>Drafted</span>
                      </NavLink>
                    </li>
                </>
              )
        
              
        
            }
          </ul>
        </section>
        {/* </div> */}

      </>
     
  )
}

export default TaskSidebar;