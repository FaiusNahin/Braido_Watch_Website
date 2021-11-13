import { Card, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Link from '@mui/material/Link';
import logo from '../../../images/logo.png';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ py: 8 }} style={{ backgroundColor: '#2f2f2f' }}>
            <Container>
                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card sx={{ maxWidth: 345, boxShadow: 0 }} style={{ backgroundColor: 'transparent' }}>
                            <CardMedia
                                sx={{ width: '50%' }}
                                component="img"
                                image={logo}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="white" sx={{ py: 0.5, letterSpacing: 0.5 }}>
                                    179 Johnston St,Fitzroy VIC 3065
                                </Typography>
                                <Typography variant="body2" color="white" sx={{ py: 0.5, letterSpacing: 0.5 }}>
                                    braido@wrishwatch.com
                                </Typography>
                                <Typography variant="body2" color="white" sx={{ py: 0.5, letterSpacing: 0.5 }}>
                                    (03) 7003 6943
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={2} md={2} sm={4} xs={12}>
                        <Typography variant="button" color="white" sx={{ letterSpacing: 1, fontSize: 16 }}>
                            Links
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ mt: 2, py: 0.5, letterSpacing: 1 }}>
                            <NavLink to="/home" style={{ textDecoration: 'none', color: "white" }}>Home</NavLink>
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ py: 0.5, letterSpacing: 1 }}>
                            <NavLink to="/explore" style={{ textDecoration: 'none', color: "white" }}>Explore</NavLink>
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ py: 0.5, letterSpacing: 1 }}>
                            <NavLink to="/dashboard" style={{ textDecoration: 'none', color: "white" }}>Dashboard</NavLink>
                        </Typography>
                    </Grid>

                    <Grid item lg={3} md={3} sm={4} xs={12} sx={{ mt: { xs: 2, sm: 0 } }}>
                        <Typography variant="button" color="white" sx={{ letterSpacing: 1, fontSize: 16 }}>
                            Follow Us
                        </Typography>
                        <br />
                        <Box sx={{ mt: 2 }}>
                            <Link className="follow-us-icon" sx={{ mr: 1.5 }} style={{ color: 'white' }} href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></ Link>
                            <Link className="follow-us-icon" sx={{ mr: 1.5 }} style={{ color: 'white' }} href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></ Link>
                            <Link className="follow-us-icon" sx={{ mr: 1.5 }} style={{ color: 'white' }} href="https://www.behance.net/"><i className="fab fa-behance"></i></ Link>
                            <Link className="follow-us-icon" sx={{ mr: 1.5 }} style={{ color: 'white' }} href="https://www.instagram.com/"><i className="fab fa-instagram"></i></ Link>
                        </Box>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} sx={{ mt: { xs: 3, sm: 0 } }}>
                        <Typography variant="button" color="white" sx={{ letterSpacing: 1, fontSize: 16 }}>
                            Newsletters
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ mt: 2, letterSpacing: 1 }}>
                            Be the first who learns about our
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ letterSpacing: 1 }}>
                            great promotions!
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <input type="text" className="newsletter-field"
                                placeholder="Enter your email" />
                            <button className="newsletter-button">SUBSCRIBE</button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;