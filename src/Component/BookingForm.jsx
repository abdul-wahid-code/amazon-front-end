import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, MenuItem, Box, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConfirmationPage from './ConfirmationPage'; // Import the ConfirmationPage component

const BookingForm = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [status, setStatus] = useState('comfirmed');
    const [user, setUser] = useState({ id: 1 }); // Assuming the user is already logged in with id 1
    const navigate = useNavigate(); // Initialize the useNavigate hook

    useEffect(() => {
        // Fetch the list of services from the backend
        axios.get('http://localhost:8080/services')
            .then(response => setServices(response.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const booking = {
            date,
            time,
            status,
            user: { userid: user.id },
            service: { serviceid: selectedService }
        };

        axios.post('http://localhost:8080/bookings', booking)
            .then(response => {
                console.log('Booking created:', response.data);
                alert('Booking successfully!');
                navigate('/confirmation'); // Navigate to a confirmation page after successful booking
            })
            .catch(error => console.error('Error creating booking:', error));
    };

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                    Book a Service
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        select
                        fullWidth
                        label="Service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        margin="normal"
                        required
                    >
                        <MenuItem value="">
                            <em>Select a service</em>
                        </MenuItem>
                        {services.map(service => (
                            <MenuItem key={service.serviceid} value={service.serviceid}>
                                {service.type} - {service.description}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        fullWidth
                        label="Date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Book Service
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default BookingForm;
