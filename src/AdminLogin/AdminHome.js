import React from 'react';
import './Admin.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Doctor from "./Doctor/Doctordetails"
import Patient from "./Patient/Patientdetails"
import Reception from "./Reception/Receptiondetails"
import Nav from "./Nav"

function AdminHome() {
  return (
    <Router>
    <div className="AdminHome">
    <Nav/>
        <Switch>
        
        <Route path="/admin/doctor" exact component={Doctor}/>
        <Route path="/admin/patient"  component={Patient}/>
        <Route path="/admin/reception" component={Reception}/>
        </Switch>
        
    </div>
    </Router>
  );
}






export default AdminHome;