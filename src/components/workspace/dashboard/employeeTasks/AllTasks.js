import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTasks } from '../../../../actions/task/taskAction';
import { FetchTask } from '../../../../reducers/task/taskDataReducer';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';


const taskHeader = [
     
      {
        dataField: 'title',
        text: 'Title',
        headerAttrs: {
          hidden:true
        }
      },
      {
        dataField: 'dueDate',
        text: 'Due Date',
        headerAttrs: {
          hidden:true
        }
      },
      {
        dataField: 'completed',
        text: 'Status',
        headerAttrs: {
          hidden:true
        },
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
  
    }
}

componentDidMount() {
  const {FetchTask} = this.props;
  FetchTask();
}

shouldComponentRender() {
  const {pending} = this.props;
  if(pending === false){ 
  return false;
  }
  return true;
}

// double click to view taskDetails
taskDetails =  {
  onDoubleClick: (e, row, rowIndex) => { 
      this.props.history.push(`/dashboard/task/view-task/${row.id}`)
  }
};

  render() {
    const { tasks} = this.props;
    const selectRow = {
      mode: 'checkbox',
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
          rowEvents = { this.taskDetails }
          noDataIndication={'No available task'}
        />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  tasks: state.task.allTasks,
  pending:getTasks(state)
})


export default connect(mapStateToProps,{FetchTask:FetchTask})(AllTasks);
