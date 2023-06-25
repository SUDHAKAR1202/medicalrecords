import React from 'react';
import './Admin.css';
import {Link } from 'react-router-dom'



function Nav() {
    const navStyle={colour:'white'}
  return (
    <nav>
        <ul classname="nav-links">
            <Link style={navStyle} to='/doctinfo'> <li>doctinfo</li></Link>
            <Link style={navStyle} to='/doctsearch'> <li>doctsearch</li></Link>
            <Link style={navStyle} to='/doctadd'> <li>doctadd</li></Link>
            <Link style={navStyle} to='/doctdelete'> <li>doctdelete</li></Link>
            <Link style={navStyle} to='/doctupdate'> <li>doctupdate</li></Link>
            
        </ul>
        
    </nav>
  );
}

export default Nav;