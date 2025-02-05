import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';





function Navbar() {
  return (
    <nav>
      <h1 className='vj'>Vijay</h1>
      <ul>
        <li className='li'><Link to="/Home">Home</Link></li>
        <li className='li'><Link to="/Skills">Skills</Link></li>
        <li className='li'><Link to="/Qualificaiton">Education</Link></li>
        <li className='li'><Link to="/Project">Services</Link></li>
        <li className='li'><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

