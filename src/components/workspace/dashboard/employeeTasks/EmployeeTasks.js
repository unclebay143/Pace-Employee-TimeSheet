import React, { Component } from 'react';
import Table from '../../../layouts/Table';
import AcceptedTasks from './AcceptedTasks'

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
      <div className ="d-flex align-items-stretch">
        <div className="page-holder w-100 d-flex flex-wrap">
        <div className="container-fluid px-xl-5">
          <section className="py-5">
            <div className="row mb-4">
              <div className="col-lg-12 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h6 className="text-uppercase mb-0 pace-accent-color">Tasks</h6>
                  </div>
                  <div class="card-body">
                   <AcceptedTasks />
                    {/* <table id="view-tasks" class="table card-text"> */}
                    {/* </table> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    )
  }
}

export default EmployeeTasks;