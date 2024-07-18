import React, { useEffect, useState } from 'react';
import BookingService from '../Services/BookingService';
// import BookingService from './Services/';
import './Bookingtable.css';

const BookingTable = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        BookingService.getAllBookings().then(response => {
            setBookings(response.data);
        }).catch(error => {
            console.error('There was an error fetching the bookings!', error);
        });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Bookings</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>User</th>
                        <th>Service</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.bookingid}>
                            <td>{booking.bookingid}</td>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>{booking.status}</td>
                            <td>{booking.user.name}</td>
                            <td>{booking.service.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;
