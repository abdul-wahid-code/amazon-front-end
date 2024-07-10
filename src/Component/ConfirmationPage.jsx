import React from 'react';
import { Typography, Container, Paper } from '@mui/material';


const ConfirmationPage = () => {

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                    Booking Confirmation
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Thank you! Your booking has been successfully confirmed.
                </Typography>
                <Typography variant="body2">
                    Digital Workshop, Michenzani Mall, Zanzibar<br />
                    Phone: +255 656 636 026
                </Typography>
            </Paper>
        </Container>
    );
};

export default ConfirmationPage;
