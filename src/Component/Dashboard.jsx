import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/register">Register User</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/book-service">Book a Service</Link></li>
        <li><Link to="/view-bookings">View Bookings</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
