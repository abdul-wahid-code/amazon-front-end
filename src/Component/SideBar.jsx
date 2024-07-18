// SideBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; // Create and import a CSS file for styling

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
        {/* <li><Link to="/register">Register User</Link></li> */}
        <li><Link to="/bookings">Booking</Link></li>
        <li><Link to="/bookings-List">Booking-List</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/list-user">User List</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;
