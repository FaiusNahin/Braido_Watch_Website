import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg';
import { Box, Button, CardMedia } from '@mui/material';

const NotFound = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {/* NotFound Images */}
            <CardMedia
                sx={{ width: { xs: '100%', sm: '100%', md: '70%', lg: '55%' }, mt: 6 }}
                component="img"
                image={img}
                alt=""
            />
            <br />
            {/* Back To Home Button*/}
            <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ fontSize: 20, my: 3, px: { xs: 3, md: 6 }, py: { xs: 0.5, md: 1 } }} >Back To Home</Button></Link>
        </Box>
    );
};

export default NotFound;