import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Alert, Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import logo from '../../../images/logo.png';
import { Box } from '@mui/system';
import './Login.css'
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { user, authError, loginUser, signInWithGoogle, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <>
            <Header></Header>

            {/* Login */}
            <Container>
                <Grid container spacing={2} sx={{ py: 5 }}>
                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Card sx={{ py: 5, boxShadow: '0px 7px 18px #dcdcdc63' }} >

                            {/* Login Logo */}
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: { xs: '90%', sm: '86%' }, mx: 'auto' }}
                                style={{ borderBottom: '1px solid #ccc' }}>
                                <CardMedia
                                    sx={{ width: { xs: '40%', sm: '30%' }, pb: 3 }}
                                    component="img"
                                    image={logo}
                                    alt=""
                                />
                            </Box>

                            <CardContent sx={{ px: { xs: .5, sm: 2 } }}>
                                <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 400, fontSize: 21, fontFamily: "'Sofia Pro',sans-serif", pb: 1.5 }}>
                                    Great to have you back!
                                </Typography>

                                {/* Login Form */}
                                <form onSubmit={handleLogin} id="login-form" >
                                    <TextField
                                        sx={{ width: { xs: '95%', sm: '97%' }, m: 1 }}
                                        name="email"
                                        required
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

                                    <NavLink className="forget-pass" to="/login">
                                        Forget Your Password?
                                    </NavLink>

                                    {/* Login Button */}
                                    <Button id="login-btn" sx={{ color: 'white', backgroundColor: 'black', width: { xs: '95%', sm: '97%' }, mt: 2, mb: 1, mx: 1, borderRadius: '0%', fontFamily: "'Sofia Pro',sans-serif", py: 2, fontSize: 14 }} type="submit" >Login</Button>

                                    {/* Register Now Link */}
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', width: { xs: '95%', sm: '97%' }, mx: 'auto', background: '#f2f2f2', border: '1px solid #e8eced', py: 1.5, mt: 3, mb: 2 }}>
                                        <span>Don’t have an account?</span>
                                        <NavLink className="forget-pass" to="/registration">
                                            Register Now
                                        </NavLink>
                                    </Box>

                                    {/* Google Sign in */}
                                    <Button onClick={handleGoogleSignIn} id="google-signIn-btn" sx={{ color: 'white', width: { xs: '95%', sm: '97%' }, mx: 1, mt: 1, borderRadius: '0%', py: 2, fontSize: 16, textTransform: 'capitalize' }} type="submit" >
                                        <CardMedia
                                            sx={{ width: { xs: '12%', sm: '8%' }, mr: 1 }}
                                            component="img"
                                            image="https://img.icons8.com/color/48/000000/google-logo.png"
                                            alt="" />
                                        Google Sign In
                                    </Button>

                                    {/* Alert Message*/}
                                    <Box sx={{ width: { xs: '95%', sm: '97%' }, mx: 'auto', pt: 1 }}>
                                        {isLoading && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress color="success" /></Box>}

                                        {(user?.email && authError === '') ? <Alert sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} severity="success">Login Sucessfully!</Alert> : ''
                                        }
                                        {authError ? <Alert sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} severity="error">{authError}</Alert> : ''
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
}


export default Login;