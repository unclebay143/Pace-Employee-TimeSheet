import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GET_TASKS } from '../../../../actions/types';

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
class AcceptedTasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      ComponentDidMount() {
        this.props.task();
      }
    }
}

  render() {
    
    const { acceptedTasks} = this.props;
    return (
      <div >
        <Table
          keyField='id'
          title="Accepted Task"
          data={ acceptedTasks }
          columns={taskHeader}
          bordered= { false }
          pagination = { paginationFactory() }
        />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  acceptedTasks: state.task
})

const mapDispatchToProps = dispatch => ({
  task: () => dispatch({ type:GET_TASKS })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AcceptedTasks);
