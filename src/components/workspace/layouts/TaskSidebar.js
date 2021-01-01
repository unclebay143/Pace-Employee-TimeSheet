import React from 'react';
import {NavLink} from 'react-router-dom';

import Button from '../../layouts/Button';
const TaskSidebar =() => {
  return (

    <>
       {/* <div className="col-lg-3 mb-4"> */}
 <section className="card py-3">
   <NavLink exact to="/dashboard/task/draft-task" className="mx-auto">
    <Button
      type="submit"
      label=" Draft Task"
      icon="o-home-1"
      className="btn pace-btn-outline-primary mx-3"  
    />
   </NavLink> 
   <hr/>
   <ul className="sidebar-menu list-unstyled">
     <li className="sidebar-list-item">
       <NavLink exact to="/dashboard/task/draft-task" className="sidebar-link text-muted" activeClassName="active">
         <i className="o-home-1 mr-3 text-gray"/><span>Drafted</span>
       </NavLink>
     </li>
     <li className="">
       <NavLink exact to="/dashboard/task/all-tasks" className="sidebar-link text-muted" activeClassName="active">
         <i className="o-home-1 mr-3 text-gray"/><span>Inbox</span>
       </NavLink>
     </li>
     <li className="">
       <NavLink exact to="/dashboard/task/accepted-tasks" className="sidebar-link text-muted" activeClassName="active">
         <i className="o-home-1 mr-3 text-gray"/><span>Accepted</span>
       </NavLink>
     </li>
     <li className="">
       <NavLink exact to="/dashboard" className="sidebar-link text-muted" activeClassName="active">
         <i className="o-home-1 mr-3 text-gray"/><span>Assigned</span>
       </NavLink>
     </li>
     <li className="sidebar-list-item">
       <NavLink exact to="/dashboard" className="sidebar-link text-muted" activeClassName="active">
         <i className="o-home-1 mr-3 text-gray"/><span>Pending</span>
       </NavLink>
     </li>
   </ul>
 </section>
{/* </div> */}

      </>
     
  )
}

export default TaskSidebar;