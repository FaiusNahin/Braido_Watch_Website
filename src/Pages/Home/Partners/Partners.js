import { Container, Grid } from '@mui/material';
import React from 'react';
import './Partner.css';

const Partners = () => {
    return (
        <Container>
            <Grid container columnSpacing={{ xs: 0, sm: 3, md: 2 }} sx={{ py: .7 }}>
                <Grid item xs={4} sm={4} md={2.4} id="partner-img">
                    <img style={{ width: '100%' }} src="https://i.ibb.co/551vx3R/partner-1.png" alt="" />
                </Grid>
                <Grid item xs={4} sm={4} md={2.4} id="partner-img">
                    <img style={{ width: '100%' }} src="https://i.ibb.co/HpkzzzQ/partner-2.png" alt="" />
                </Grid>
                <Grid item xs={4} sm={4} md={2.4} id="partner-img">
                    <img style={{ width: '100%' }} src="https://i.ibb.co/1dKHcq6/partner-3.png" alt="" />
                </Grid>
                <Grid item xs={4} sm={4} md={2.4} id="partner-img">
                    <img style={{ width: '100%' }} src="https://i.ibb.co/KstT08Q/partner-4.png" alt="" />
                </Grid>
                <Grid item xs={4} sm={4} md={2.4} id="partner-img">
                    <img style={{ width: '100%' }} src="https://i.ibb.co/QMPrj92/partner-5.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Partners;