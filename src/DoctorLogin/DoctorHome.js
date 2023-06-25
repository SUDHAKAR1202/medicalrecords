import React from 'react';
import Nav from "./Nav"
import './Admin.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import patientdetail from "./patientdetail"
import preciptions from "./preciptions"
import Appointments from "./Appointments"

function DoctorHome() {
  return (
    <Router>
    <div className="DoctorHome">
    <Nav/>
        <Switch>
        <Route path="/doctor/patientdetail" exact component={patientdetail}/>
        <Route path="/doctor/preciptions"  component={preciptions}/>
        <Route path="/doctor/Appointments" component={Appointments}/>
        </Switch>
        
    </div>
    </Router>
  );
}

export default DoctorHome;