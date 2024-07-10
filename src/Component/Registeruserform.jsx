import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function RegisterUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/user/save', {
        name,
        email,
        password,
        phone: Number(phone),
      });
      console.log('User created:', response.data);
      alert("User created successfully");
      navigate('/bookings');
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Register User</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Create User</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterUserForm;
