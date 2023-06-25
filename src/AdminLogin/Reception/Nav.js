import React from 'react';
import './Admin.css';
import {Link } from 'react-router-dom'



function Nav() {
    const navStyle={colour:'white'}
  return (
    <nav>
        <ul classname="nav-links">
            <Link style={navStyle} to='/receptinfo'> <li>receptinfo</li></Link>
            <Link style={navStyle} to='/receptadd'> <li>receptadd</li></Link>
            <Link style={navStyle} to='/receptupdate'> <li>receptupdate</li></Link>
            <Link style={navStyle} to='/receptdelete'> <li>receptdelete</li></Link>
            {<Link style={navStyle} to='/receptsearch'> <li>receptsearch</li></Link>}
        </ul>
        
    </nav>
  );
}

export default Nav;