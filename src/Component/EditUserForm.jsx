import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditUserForm() {
  const { userid } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://top-chassis-429718-j8.ts.r.appspot.com/api/user/${userid}`)
      .then(response => {
        const user = response.data;
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setPhone(user.phone);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, [userid]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://top-chassis-429718-j8.ts.r.appspot.com/api/user/${userid}`, {
        name,
        email,
        password,
        phone: Number(phone),
      });
      console.log('User updated:', response.data);
      alert("User updated successfully");
      navigate('/list-user');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  function cancel(){
    navigate('/list-user')
  }
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Edit User</h3>
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
            <button type="submit" className="btn btn-primary">Update User</button>
            <button type="submit" className="btn btn-danger" onClick={cancel}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUserForm;
