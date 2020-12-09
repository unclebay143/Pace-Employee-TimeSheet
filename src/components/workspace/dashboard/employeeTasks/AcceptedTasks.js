import React, { Component } from 'react';
import{ Table, TableData, TableBody, TableHeader} from '../../../layouts/Table';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../pages/pages-styles/util.css'
import '../dashboard-styles/style.default.css';
import '../dashboard-styles/utilities.css';
import '../dashboard-styles/custom.css';
import '../dashboard-styles/orionicons.css';

class AcceptedTasks extends Component {
  constructor(props){
    super(props)
    this.state = {
      acceptedTasks : [
        {
          index: '1',
          task: 'testing',
          dueDate: '12/06/21',
          status: 'accepted',
          requests: 'requested'
        },
        {
          index: '2',
          task: 'testing2',
          dueDate: '14/06/21',
          status: 'accepted',
          requests: 'requested'
        },
        {
          index: '3',
          task: 'testing3',
          dueDate: '16/06/21',
          status: 'accepted',
          requests: 'requested'
        },
      ]
    }
}

  render() {
    const { acceptedTasks } = this.state;
    return (
      <div >
      {/* <div className="d-flex flex-wrap">
      <div className="container-fluid px-xl-5">
        <section className="py-5">
          <div className="row mb-4">
            <div className="col-lg-12 mb-4"> */}
              {/* <div className="card"> */}
                {/* <div className="card-header">
                  <h6 className="text-uppercase mb-0 pace-accent-color">Accepted Tasks</h6>
                </div> */}
                {/* <div className="card-body"> */}
                  {/* <Table className="table card-text" taskData = {acceptedTasks} />     */}
                  <Table className="table card-text"  tableData = {acceptedTasks} />    
                  
                {/* </div> */}
                        
              {/* </div>
            </div>
          </div>
        </section>
      </div> */}
      </div>
    )
  }
}

export default AcceptedTasks;