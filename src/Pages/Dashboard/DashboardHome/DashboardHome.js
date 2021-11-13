import React from 'react';
import { Typography, Box } from '@mui/material';

const DashboardHome = () => {
    return (
        // User Dashboard Home
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', color: 'secondary.main', pt: 1, pb: 5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 41, md: 47 }, letterSpacing: '1px' }}>
                User Dashboard is On the Way!! Coming Soon...
            </Typography>
        </Box>
    );
};

export default DashboardHome;