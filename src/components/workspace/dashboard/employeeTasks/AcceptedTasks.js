import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import { getAcceptedTask } from '../../../../actions/taskActions';

import Table from '../../layouts/Table';
import paginationFactory from 'react-bootstrap-table2-paginator';



const taskHeader = [
      {
        dataField: 'id',
        text: 'S/N'
      },
      {
        dataField: 'task',
        text: 'Task',
      },
      {
        dataField: 'dueDate',
        text: 'Due Date',
      },
      {
        dataField: 'status',
        text: 'status',
      },
      {
        dataField: 'requests',
        text: 'Requests',
      },
        
      // {
      
      //   formatter: (cellContent, row) => {
      //     return (
      //       <>
      //       <button
      //         className="btn btn-danger btn-xs mr-3"
      //         onClick={(e) => handleDelete(row)} 
      //       >
      //         Delete
      //       </button>
      //       <button
      //         className="btn btn-danger btn-xs"
      //         onClick={(e) => handleDelete(row)} 
      //       >
      //         Delete
      //       </button>
      //       </>
      //     );
      //   },
      // },
    
];

function handleDelete(rowId){
  console.log(rowId);
};

const navigate = <>
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
class AcceptedTasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      ComponentDidMount() {
        this.props.getAcceptedTask();
      }
    }
}

  render() {
    
    const { acceptedTasks} = this.props;
    const selectRow = {
      mode: 'checkbox' 
    };
    return (
      <div >
        <Table
          keyField='id'
          title="Accepted Task"
          data={ acceptedTasks }
          columns={taskHeader}
          bordered= { false }
          selectRow = {selectRow}
          pagination = { paginationFactory() }
          controlHeader = { navigate }
        />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  acceptedTasks: state.task.acceptedTasks
})


// const mapStateToProps = state => ({
//   tasks: state.task.AllTasks
// })


export default connect(mapStateToProps,{getAcceptedTask})(AcceptedTasks);

