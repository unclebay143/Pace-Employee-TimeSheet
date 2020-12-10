import React, { Component } from 'react';
import {Table} from '../../../layouts/Table';


class AssignedTasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      AssignedTasks : [
        {
          index: '1',
          task: 'testing',
          dueDate: '12/06/21',
          status: 'pending',
          requests: 'requested'
        },
        {
          index: '2',
          task: 'testing2',
          dueDate: '14/06/21',
          status: 'pending',
          requests: 'requested'
        },
        {
          index: '3',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'pending',
          requests: 'requested'
        },
      ]
    }
}


  render() {
    const { AssignedTasks } = this.state;
    
    return (
      <div>
        <section className="py-5">
          <div className="row mb-4">
            <div className="col-lg-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <h6 className="text-uppercase mb-0 pace-accent-color">Assigned Tasks</h6>
                </div>
                <Table tableData = {AssignedTasks} />             
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AssignedTasks;