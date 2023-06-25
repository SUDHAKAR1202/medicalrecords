import React from 'react';
import './Admin.css';
import {Link } from 'react-router-dom'



function Nav() {
    const navStyle={colour:'white'}
  return (
    <nav>
        <ul classname="nav-links">
            
            <Link style={navStyle} to='/patient/patientdetail'> <li>patientdetail</li></Link>
            <Link style={navStyle} to='/patient/preciptions'> <li>preciptions</li></Link>
            <Link style={navStyle} to='/patient/Appointments'> <li>Appointments</li></Link>
            <Link style={navStyle} to='/patient/BillingDetails'> <li>BillingDetails</li></Link>
        </ul>
        
    </nav>
  );
}

export default Nav;