// UserTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/user')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.userid}>
                            <td>{user.userid}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
