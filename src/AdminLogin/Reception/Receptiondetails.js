import React from 'react';
import './Admin.css';
import Nav from "./Nav"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Receptinfo from "./Receptioninfo"
import Receptadd from "./Receptionadd"
import Receptsearch from "./Receptionsearch"
import Receptupdate from "./Receptionupdate"
import Receptdelete from "./Receptiondelete"
import User from "./Users/User"
import EditUser from "./Users/EditUser"
function Receptiondetails() {
  return (
    <Router>
    <h1>Welcome to Reception Details</h1>
  <div className="Receptiondetails">
  <Nav/>
      <Switch>
      <Route path="/receptinfo" exact component={Receptinfo}/>
      <Route path="/receptadd" exact component={Receptadd}/>
      <Route path="/receptupdate" exact component={Receptupdate}/>
      <Route path="/receptdelete" exact component={Receptdelete}/>
      <Route path="/receptsearch" exact component={Receptsearch}/>
      <Route exact path="/users/:id" component={User} /> 
      <Route exact path="/Users/EditUser/:id" component={EditUser} />
    
      </Switch>
      
  </div>
  </Router>
  );
}

export default Receptiondetails;