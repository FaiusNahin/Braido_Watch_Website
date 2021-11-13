import { Grid, Typography, Button, CardMedia } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';
import about1 from '../../../images/about-1.jpg';
import about2 from '../../../images/about-2.jpg';
import about3 from '../../../images/about-3.jpg';
import { Box } from '@mui/system';

const About = () => {
    return (
        // About Us
        <Box id="about-container" sx={{ py: { xs: 8, sm: 10, md: 12, lg: 16 }, px: { xs: 1, sm: 3, md: 3, lg: 6, xl: 16 }, mx: { xs: 1, sm: 3, md: 3, lg: 6, xl: 16 }, my: { xs: 8, sm: 10, md: 12, lg: 16 } }}>
            <Grid container spacing={4}>

                {/* About Left part*/}
                <Grid item xs={12} sm={12} md={6} sx={{ pl: { xs: 6, sm: 7, md: 4.5, lg: 6 } }}>
                    <Typography variant="body1" sx={{ color: '#2c2c2c', fontSize: { xs: 15, sm: 16 }, fontFamily: "'Sofia Pro',sans-serif", letterSpacing: '.25em', fontWeight: 500 }}>
                        ABOUT US
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#2c2c2c', py: 1.5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 49, sm: 48, md: 50 }, letterSpacing: '1px' }}>
                        A Unique watch that fits
                        Your Style
                    </Typography>
                    <p style={{ fontSize: '18px', width: '90%', color: '#606060', lineHeight: '32.4px', margin: '10px 0px' }}>The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
                    {/* Explore Now Button */}
                    <NavLink to="/explore" style={{ textDecoration: 'none' }}>
                        <Button id="explore-now-btn" variant="outlined" sx={{ borderRadius: '0%', fontFamily: "'Sofia Pro',sans-serif", px: 4, py: 1, border: 2, fontSize: 15, my: 2 }}>EXPLORE</Button>
                    </NavLink>
                </Grid>

                {/* About Right part*/}
                <Grid item xs={12} sm={12} md={6} sx={{ pl: { xs: 4, sm: 4, md: 4, lg: 12 }, pt: { xs: 6, md: 0 } }}>
                    <img style={{ width: '100%', borderRadius: '50% 50% 0 0' }} src={about1} alt="" />
                </Grid>
            </Grid>

            {/* About Bottom Banner */}
            <Box sx={{ pb: { xs: 0, md: 16, lg: 16 }, mb: { xs: 0, md: 10 } }}>
                <Grid container spacing={{ xs: 0, sm: 0, md: 3, lg: 3.5 }} sx={{ mt: 0.1, mb: 16, pt: { xs: 0, md: 3 } }}>
                    <Grid item xs={12} md={4} sx={{ pt: { xs: 5, sm: 8, md: 0 } }}>
                        <CardMedia
                            sx={{ width: 1, height: { xs: '88%', sm: '93%', md: '95%' }, borderRadius: '0 0 0 39%' }}
                            component="img"
                            image={about2}
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <CardMedia
                            sx={{ width: 1, height: { xs: '100%', md: '80%' } }}
                            component="img"
                            image={about3}
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};

export default About;