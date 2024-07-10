import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registeruserform from './Component/Registeruserform';
import UserTable from './Component/UserTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceForm from './Component/ServiceForm';
import BookingForm from './Component/BookingForm';
import LoginForm from './Component/LoginForm';
import Dashboard from './Component/Dashboard';
import ConfirmationPage from './Component/ConfirmationPage'; 
function App() {
  return (
    <div className="App">
    
      <Router> 
        <Routes>
          <Route path='/register' element={<Registeruserform/>}/>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/list-user' element={<UserTable />}/>
          <Route path='/bookings' element={<BookingForm/>}/>
          <Route path='/services' element={  <ServiceForm/>}/>
          <Route exact path="/" component={Dashboard} />
          <Route path='/Confirmation' element={  <ConfirmationPage/>}/>
        </Routes>
      </Router>

   

    </div>
  );
}

export default App;
