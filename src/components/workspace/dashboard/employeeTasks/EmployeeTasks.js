import React, { Component } from 'react';
// import Table from '../../../layouts/Table';
import AcceptedTasks from './AcceptedTasks';
import AssignedTasks from './AssignedTasks';
import Table from '../../../pages/Table'

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../pages/pages-styles/util.css'
import '../dashboard-styles/style.default.css';
import '../dashboard-styles/utilities.css';
import '../dashboard-styles/custom.css';
import '../dashboard-styles/orionicons.css';

class EmployeeTasks extends Component {
  render() {
    return (
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="row mb-4">
              <div className="col-lg-12 mb-1">
                <div className="card">
                  <div className="card-header">
                    <h6 className="text-uppercase mb-0 pace-accent-color">Assigned Tasks</h6>
                  </div>
                  <div className="card-body">
                   <AcceptedTasks className="table card-text" />
                   {/* <Table className="table card-text pace-bg-primary" /> */}
                    {/* <table id="view-tasks" class="table card-text"> */}
                    {/* </table> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="row mb-2">
              <div className="col-lg-12 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h6 className="text-uppercase mb-0 pace-accent-color">Accepted Tasks</h6>
                  </div>
                  <div className="card-body">
                   <AssignedTasks />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
  }
}

export default EmployeeTasks;