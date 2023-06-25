import React from 'react';
import Nav from "./Nav"
import './Admin.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import patientdetail from "./patientdetail"
import preciptions from "./Prescription"
import Appointments from "./Appointments"
import BillingDetails from "./BillingDetails"

function DoctorHome() {
  return (
    <Router>
    <div className="PatientHome">
    <Nav/>
        <Switch>
        <Route path="/patient/patientdetail" exact component={patientdetail}/>
        <Route path="/patient/preciptions"  component={preciptions}/>
        <Route path="/patient/Appointments" component={Appointments}/>
        <Route path="/patient/BillingDetails" component={BillingDetails}/>
        </Switch>
        
    </div>
    </Router>
  );
}

export default DoctorHome;