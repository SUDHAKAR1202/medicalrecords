import React from 'react';
import './Admin.css';
import {Link } from 'react-router-dom'



function Nav() {
    const navStyle={colour:'white'}
  return (
    <nav>
        <ul classname="nav-links">
            <Link style={navStyle} to='/patinfo'> <li>patient info</li></Link>
            <Link style={navStyle} to='/patsearch'> <li>patient search</li></Link>
            <Link style={navStyle} to='/patadd'> <li>patient add</li></Link>
            <Link style={navStyle} to='/patdelete'> <li>patient delete</li></Link>
            <Link style={navStyle} to='/patupdate'> <li>patient update</li></Link>
            
            
        </ul>
        
    </nav>
  );
}

export default Nav;