import React, { useState } from 'react';
import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };

        e.preventDefault();

        fetch('https://blooming-anchorage-11174.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true)
                }
            })
    }

    return (
        // Make Admin Form
        <Box sx={{ textAlign: 'center' }}>

            {/* Make Admin headings */}
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#2c2c2c', pt: 1, pb: 2, fontFamily: "'Playfair Display',serif", fontSize: { xs: 37, md: 42 }, letterSpacing: '1px' }}>
                Make An Admin
            </Typography>

            {/* Form */}
            <form onSubmit={handleAdminSubmit} style={{ textAlign: 'center' }}>
                <TextField
                    sx={{ width: { xs: '90%', sm: '60%', md: '45%', lg: '35%', xl: '25%' }, my: 4, fontSize: 20 }}
                    required
                    onBlur={handleOnBlur}
                    label="Email"
                    type="email"
                    id="login-email"
                    variant="standard" />
                <br />
                <Button sx={{ px: { xs: 3.5, sm: 4, md: 4.5, lg: 5 }, py: { xs: 1, sm: 1.2 }, fontSize: { xs: 16, sm: 17 } }} type="submit" variant="contained" color="secondary">Make Admin</Button>

            </form>

            {/* Alert Message */}
            {success && <Alert severity="success">Make Admin Sucessfully!</Alert>
            }
        </Box>
    );
};

export default MakeAdmin;