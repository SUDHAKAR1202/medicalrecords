import React from 'react';
import './Admin.css';
import {Link } from 'react-router-dom'



function Nav() {
    const navStyle={colour:'white'}
  return (
    <nav>
        <ul classname="nav-links">
            
            <Link style={navStyle} to='/admin/doctor'> <li>doctor</li></Link>
            <Link style={navStyle} to='/admin/patient'> <li>patient</li></Link>
            <Link style={navStyle} to='/admin/reception'> <li>Reception</li></Link>
        </ul>
        
    </nav>
  );
}

export default Nav;