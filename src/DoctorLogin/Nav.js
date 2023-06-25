import React from 'react';
import './Admin.css';
import {Link } from 'react-router-dom'



function Nav() {
    const navStyle={colour:'white'}
  return (
    <nav>
        <ul classname="nav-links">
            
            <Link style={navStyle} to='/doctor/patientdetail'> <li>patientdetail</li></Link>
            <Link style={navStyle} to='/doctor/preciptions'> <li>preciptions</li></Link>
            <Link style={navStyle} to='/doctor/Appointments'> <li>Appointments</li></Link>
        </ul>
        
    </nav>
  );
}

export default Nav;