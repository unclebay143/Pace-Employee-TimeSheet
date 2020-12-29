import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTasks } from '../../../../actions/taskActions';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';



const taskHeader = [
      // {
      //   dataField: 'id',
      //   text: 'S/N'
      // },
      
      {
        dataField: 'subject',
        text: 'Task',
      },
      {
        dataField: 'file',
        text: 'Attachment',
      },
      {
        dataField: 'dueDate',
        text: 'Due Date',
      },
];


const navigate = <>
  <div className="btn-group">
    <a data-toggle="dropdown" href="/" className="btn mini all">
    All
      <i className="fa fa-angle-down ml-1" />
    </a>
    <ul className="dropdown-menu">
      <li className="">
        <NavLink exact to="/dashboard/task/accepted-tasks" className="sidebar-link text-muted" activeClassName="active">
          <i className="mr-3 text-gray"/><span>Accepted</span>
        </NavLink>
      </li>
      <li className="">
        <NavLink exact to="/dashboard/task/assigned-tasks" className="sidebar-link text-muted" activeClassName="active">
          <i className="mr-3 text-gray"/><span>Assigned</span>
        </NavLink>
      </li>
      <li className="">
        <NavLink exact to="/dashboard/task/pending-tasks" className="sidebar-link text-muted" activeClassName="active">
          <i className="mr-3 text-gray"/><span>Pending</span>
        </NavLink>
      </li>
    </ul>
  </div>
  <div className="btn-group">
    <NavLink exact to="/dashboard/task/all-tasks" className="sidebar-link text-muted">
      <i className="fa fa-sync text-gray"/>
      {/* <span>sync</span> */}
    </NavLink>
  </div>
  <div className="btn-group">
    <a data-toggle="dropdown" href="#" className="btn mini blue">
    More
      <i className="fa fa-angle-down ml-1" />
    </a>
    <ul className="dropdown-menu">
      <li><a href="#"><i className="fa fa-pencil" /> Mark as Read</a></li>
      <li><a href="#"><i className="fa fa-ban" /> Spam</a></li>
      <li className="divider" />
      <li><a href="#"><i className="fa fa-trash-o" /> Delete</a></li>
    </ul>                           
  </div>
</>


class AllTasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      ComponentDidMount() {
        this.props.getTasks();
      }
    }
}

  render() {
    
    const { tasks} = this.props;
    const selectRow = {
      mode: 'checkbox' 
    };
    return (
      <div >
        
        <Table
          keyField='id'
          title="Inbox (11)"
          data={ tasks }
          columns={taskHeader}
          bordered= { false }
          selectRow = {selectRow}
          enableSearch = { true }
          pagination = { paginationFactory() }
          controlHeader = { navigate }
        />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  tasks: state.task.allTasks
})


export default connect(mapStateToProps,{getTasks})(AllTasks);
