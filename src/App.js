import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './Component/SideBar';
import Dashboard from './Component/Dashboard';
import RegisterUserForm from './Component/Registeruserform';
import LoginForm from './Component/LoginForm';
import BookingForm from './Component/BookingForm';
import ServiceForm from './Component/ServiceForm';
import UserList from './Component/UserList';
import EditUserForm from './Component/EditUserForm';
import BookingTable from './Component/BookingTable';
import './App.css'; // Import your main CSS file

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const hideSideBar = location.pathname === '/' || location.pathname === '/register';

  return (
    <div className={`app-container ${hideSideBar ? 'login-register-container' : ''}`}>
      {!hideSideBar && <SideBar />}
      <div className={!hideSideBar ? 'main-content' : ''}>
        <Routes>
          <Route path="/register" element={<RegisterUserForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/bookings" element={<BookingForm />} />
          <Route path="/bookings-List" element={<BookingTable />} />
          <Route path="/services" element={<ServiceForm />} />
          <Route path="/list-user" element={<UserList />} />
          <Route path="/edit-user/:userid" element={<EditUserForm />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
