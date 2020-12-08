import React, { Component } from 'react';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../pages/pages-styles/util.css'
import '../dashboard-styles/style.default.css';
import '../dashboard-styles/utilities.css';
import '../dashboard-styles/custom.css';
import '../dashboard-styles/orionicons.css';


class AssignedTasks extends Component {
  render() {
    return (
      <div>
         <section className="py-5">
            <div className="row mb-4">
              <div className="col-lg-12 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h6 className="text-uppercase mb-0 pace-accent-color">Tasks</h6>
                  </div>
                  <div className="card-body">
                    <table id="view-tasks" className="table card-text">
                      <thead className = "pace-thead">
                        <tr>
                        <th>S/N</th>
                        <th>Task</th>
                        <th>Due Date</th>
                        <th> Status</th>
                        <th> Requests</th>
                        </tr>
                    </thead>
                    {/* <tbody id="assignedTasks" /> */}
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Test</td>
                        <td>08/12/20</td>
                        <td>pending</td>
                        <td>requests</td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    )
  }
}

export default AssignedTasks;