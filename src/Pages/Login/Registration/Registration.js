import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Alert, Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './Registration.css'
import useAuth from './../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Registration = () => {
    const [registrationData, setRegistrationData] = useState();
    const { user, authError, setAuthError, signInWithGoogle, registerUser, isLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData }
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
    }

    const handleRegistration = e => {
        e.preventDefault();

        if (registrationData.password.length < 6) {
            setAuthError('Password Must be 6 Character')
            return
        }
        else {
            registerUser(registrationData.email, registrationData.password, registrationData.name, history)
        }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <>
            <Header></Header>

            {/* Registration */}
            <Container>
                <Grid container spacing={2} sx={{ py: 5 }}>
                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Card sx={{ py: 5, boxShadow: '0px 7px 18px #dcdcdc63' }} >
                            <CardContent sx={{ px: { xs: .5, sm: 2 } }}>

                                {/* Registration Heading */}
                                <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 400, fontSize: 20, fontFamily: "'Sofia Pro',sans-serif", letterSpacing: '.2em' }}>
                                    REGISTER
                                </Typography>

                                {/* hr */}
                                <hr style={{ width: '40%', height: '1px', backgroundColor: 'rgb(169 149 119 / 47%)', border: '0', borderRadius: '10px', marginTop: '0px', marginBottom: '25px' }} className="explore-hr" />

                                {/* Registation Form */}
                                <form onSubmit={handleRegistration} id="login-form" >
                                    <TextField
                                        sx={{ width: { xs: '95%', sm: '97%' }, m: 1 }}
                                        required
                                        name="name"
                                        onBlur={handleOnBlur}
                                        label="Name"
                                        id="login-email"
                                        variant="outlined" />
                                    <br />

                                    <TextField
                                        sx={{ width: { xs: '95%', sm: '97%' }, m: 1 }}
                                        required
                                        name="email"
                                        onBlur={handleOnBlur}
                                        label="Email address"
                                        id="login-email"
                                        variant="outlined" />
                                    <TextField
                                        sx={{ width: { xs: '95%', sm: '97%' }, m: 1, mb: 2 }}
                                        required
                                        label="Password"
                                        name="password"
                                        type="password"
                                        onBlur={handleOnBlur}
                                        autoComplete="current-password"
                                    />
                                    <br />

                                    {/* Register Button */}
                                    <Button id="login-btn" sx={{ color: 'white', backgroundColor: 'black', width: { xs: '95%', sm: '97%' }, mx: 1, borderRadius: '0%', fontFamily: "'Sofia Pro',sans-serif", py: 2, fontSize: 14 }} type="submit" >Register</Button>

                                    {/* Back To Login Link */}
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', width: { xs: '95%', sm: '97%' }, mx: 'auto', background: '#f2f2f2', border: '1px solid #e8eced', py: 1.5, mt: 3, mb: 2 }}>
                                        <NavLink className="back-to-login" to="/login" >
                                            Back To Login
                                        </NavLink>
                                    </Box>

                                    {/* Google Sign In Button */}
                                    <Button onClick={handleGoogleSignIn} id="google-signIn-btn" sx={{ color: 'white', width: { xs: '95%', sm: '97%' }, mx: 1, mt: 1, borderRadius: '0%', py: 2, fontSize: 16, textTransform: 'capitalize' }} type="submit" >
                                        <CardMedia
                                            sx={{ width: { xs: '12%', sm: '8%' }, mr: 1 }}
                                            component="img"
                                            image="https://img.icons8.com/color/48/000000/google-logo.png"
                                            alt="" />
                                        Google Sign In
                                    </Button>

                                    {/* Alert Message */}
                                    <Box sx={{ width: { xs: '95%', sm: '97%' }, mx: 'auto', pt: 1 }}>
                                        {isLoading && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress color="success" /></Box>}

                                        {(user?.email && authError === '') ? <Alert sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} severity="success">User Created Sucessfully!</Alert> : ''
                                        }
                                        {authError && <Alert sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} severity="error">{authError}</Alert>
                                        }
                                    </Box>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default Registration;