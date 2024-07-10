import React, { useState } from 'react';
import axios from 'axios';
import './ServiceForm.css'; // Import the CSS file

const ServiceForm = () => {
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const newService = { type, description };

        try {
            const response = await axios.post('http://localhost:8080/services', newService);
            console.log('Service created:', response.data);
            alert('Service added successfully!');
            setType('');
            setDescription('');
        } catch (error) {
            console.error('There was an error creating the service!', error);
        }
    };

    return (
        <div className="service-form-container">
            <form onSubmit={handleSubmit} className="service-form">
                <h2>Book a Service</h2>
                <div className="form-group">
                    <label htmlFor="type">Service Type</label>
                    <input 
                        type="text" 
                        id="type"
                        placeholder="Enter service type" 
                        value={type} 
                        onChange={(e) => setType(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description"
                        placeholder="Enter service description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};



export default ServiceForm;
