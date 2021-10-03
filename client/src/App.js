import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import Display from "./components/Display";
import ScheduleForm from './components/Schedule';
import EditSchedule from './components/EditSchedule';

function App() {
  return (
    <div>
      <div className="text-center p-1 bg-dark text-light mb-3">
        <h1>Schedule Manager</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-start">
            <Link className="btn btn-secondary" to="/">Schedule</Link>
          </div>
          <div className="col d-flex justify-content-end">
            <Link className="btn btn-secondary d-flex justify-content-end" to="/new">Add Activity</Link>      
          </div>
        </div>
        <Router>
          <Display path="/" />
          <ScheduleForm path="/new" />
          <EditSchedule path="/edit/:_id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
