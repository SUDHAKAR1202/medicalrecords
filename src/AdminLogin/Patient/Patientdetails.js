import React from 'react';
import Nav from "./Nav"
import './Admin.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PatientInfo from "./Patinfo"
import PatientSearch from "./Patsearch"
import Patientadd from "./Pataddfun"
import patdelete from "./Patdelete"
import patupdate from "./PatientUpdate"
import User from "./Users/User"
import EditUser from "./Users/EditUser"

function Patientdetails() {
  return (
    
    <Router>
      <h1>Welcome to Patient Details</h1>
    <div className="Patientdetails">
    <Nav/>
        <Switch>
        <Route path="/Patinfo" exact component={PatientInfo}/>
        <Route path="/Patsearch" exact component={PatientSearch}/>
        <Route path="/Patadd" exact component={Patientadd}/>
        <Route path="/patupdate" exact component={patupdate}/>
        <Route path="/patdelete" exact component={patdelete}/>
        <Route exact path="/users/:id" component={User} /> 
        <Route exact path="/Users/EditUser/:id" component={EditUser} />
        
      
        </Switch>
        
    </div>
    </Router>
  );
}

export default Patientdetails;
