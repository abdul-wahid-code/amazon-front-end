// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserList.css';



function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://https://top-chassis-429718-j8.ts.r.appspot.com/api/user/get')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEdit = (userid) => {
    navigate(`/edit-user/${userid}`);
  };

  const handleDelete = async (userid) => {
    try {
      await axios.delete(`https://top-chassis-429718-j8.ts.r.appspot.com/api/user/${userid}`);
      setUsers(users.filter(user => user.userid !== userid));
      alert("User deleted successfully");
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="main-content container mt-5">
      <h3>User List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userid}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => handleEdit(user.userid)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(user.userid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
