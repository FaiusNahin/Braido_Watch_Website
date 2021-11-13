import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';
import about1 from '../../../images/about-1.jpg';
import { Box } from '@mui/system';

const About = () => {
    return (
        <Box id="about-container" sx={{ py: { xs: 8, sm: 10, md: 12, lg: 16 }, px: { xs: 1, sm: 3, md: 3, lg: 6, xl: 16 }, mx: { xs: 1, sm: 3, md: 3, lg: 6, xl: 16 }, my: { xs: 8, sm: 10, md: 12, lg: 16 } }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography variant="body1" sx={{ color: '#2c2c2c', fontSize: { xs: 15, sm: 16 }, fontFamily: "'Sofia Pro',sans-serif", letterSpacing: '.25em', fontWeight: 500 }}>
                        ABOUT US
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#2c2c2c', py: 1.5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 49, sm: 48, md: 50 }, letterSpacing: '1px' }}>
                        A Unique watch that fits
                        Your Style
                    </Typography>
                    <p style={{ fontSize: '18px', width: '90%', color: '#606060', lineHeight: '32.4px', margin: '10px 0px' }}>The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
                    <NavLink to="/explore" style={{ textDecoration: 'none' }}>
                        <Button id="explore-now-btn" variant="outlined" sx={{ borderRadius: '0%', fontFamily: "'Sofia Pro',sans-serif", px: 4, py: 1, border: 2, fontSize: 15, my: 2 }}>EXPLORE</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ px: { xs: 0, md: 3, lg: 6 } }}>
                    <img style={{ width: '100%', borderRadius: '50% 50% 0 0' }} src={about1} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;