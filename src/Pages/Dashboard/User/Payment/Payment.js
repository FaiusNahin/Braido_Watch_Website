import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Payment = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', color: 'secondary.main', pt: 1, pb: 5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 41, md: 47 }, letterSpacing: '1px' }}>
                Payment System is Coming Soon
            </Typography>
        </Box>
    );
};

export default Payment;