import React from 'react';
import './Admin.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Doctorinfo from "./Doctorinfo"
import Doctadd from "./Docaddfun"
import Doctdelete from "./Docdelete"
import Doctupdate from "./Doctorupdate"
import doctsearch from "./Docsearch"
import User from "./Users/User"
import Nav from "./Nav"
import EditUser from "./Users/EditUser"
function Doctordetails() {
  return (
    
    <Router>
      <h1>Welcome to Doctor Details</h1>
  <div className="Doctordetails">
<Nav/>
      <Switch>
      
      <Route path="/doctinfo" exact component={Doctorinfo}/>
      <Route path="/doctadd" exact component={Doctadd}/>
      <Route path="/doctdelete" exact component={Doctdelete}/>
      <Route path="/doctupdate" exact component={Doctupdate}/>
      <Route path="/doctsearch" exact component={doctsearch}/>
      <Route exact path="/users/:id" component={User} /> 
      <Route exact path="/Users/EditUser/:id" component={EditUser} />
      
    
      </Switch>
      
  </div>
  </Router>
        
  );
}

export default Doctordetails;
