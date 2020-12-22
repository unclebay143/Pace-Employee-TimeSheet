import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import {NavLink} from 'react-router-dom';

import TaskSidebar from '../layouts/TaskSidebar';
import DraftTask from './DraftTask';
import AcceptedTasks from './employeeTasks/AcceptedTasks';
import EmployeeTasks from './employeeTasks/EmployeeTasks';
import Sample from './employeeTasks/Sample';
import Button from '../../layouts/Button';
import SampleCompose from './employeeTasks/SampleCompose';
import TaskInboxSample from './employeeTasks/TaskInboxSample';

class Task extends Component {
  render() {
    return (
      <div className="py-5">
        <section className="row mb-4">
          
          {/* SIDEBAR COMPONENT START */}
          <div className="col-lg-3 mb-4">
            <TaskSidebar/>
          </div>
          {/* SIDEBAR COMPONENT ENDS */}
          
          {/* MAIN START */}
          <div className="col-lg-9">
            <section className="">
              <Switch>
                {/* <Route exact path="/dashboard/task/draft-task" component={DraftTask } /> */}
                {/* <Route exact path="/dashboard/task/accepted-tasks" component={AcceptedTasks} /> */}
                <Route exact path="/dashboard/task/draft-task" component={SampleCompose} />
                <Route exact path="/dashboard/task/all-tasks" component={TaskInboxSample} />
                <Route exact path="/dashboard/task/view-task" component={Sample} />
              </Switch>
                {/* <Sample />
                <DraftTask />
                <AcceptedTasks />
                <EmployeeTasks /> */}
            </section>
          </div>
          {/* MAIN ENDS */}
        </section>
      </div>
    )
  }
}

export default Task;
