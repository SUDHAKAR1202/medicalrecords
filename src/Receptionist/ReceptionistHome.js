import React from 'react';
import './Admin.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Nav from "./Nav"
import appointments from "./appointments"
import billing from "./billing"
import patientdetail from "./Components/patientdetails"
function Receptionist() {
  return (
    <Router>
    <div className="ReceptionistHome">
    <Nav/>
        <Switch>
        
        <Route path="/Receptionist/appointments" exact component={appointments}/>
        <Route path="/Receptionist/billing"  component={billing}/>
        <Route path="/Receptionist/patientdetail"  component={patientdetail}/>
        </Switch>
        
    </div>
    </Router>
  );
}


export default Receptionist;