import React from 'react';
import './Admin.css';
import {Link } from 'react-router-dom'



function Nav() {
    const navStyle={colour:'white'}
  return (
    <nav>
        <ul classname="nav-links">
        <Link style={navStyle} to='/Receptionist/patientdetail'> <li>patientdetail</li></Link>
            <Link style={navStyle} to='/Receptionist/appointments'> <li>appointments</li></Link>
            <Link style={navStyle} to='/Receptionist/billing'> <li>billing</li></Link>
        
        </ul>
        
    </nav>
  );
}

export default Nav;