import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./Home"
import AdminHome from "./AdminLogin/AdminHome"
import DoctorHome from "./DoctorLogin/DoctorHome"
import Patienthome from "./PatientLogin/PatientHome"
import receptionist from "./Receptionist/ReceptionistHome"

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/admin/adminhome"  component={AdminHome}/>
        <Route path="/admin/doctorhome"  component={DoctorHome}/>
        <Route path="/admin/patienthome"  component={Patienthome}/>
        <Route path="/admin/receptionisthome"  component={receptionist}/>
        </Switch>
        
    </div>
    </Router>
  );
}






export default App;
