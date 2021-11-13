import { Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import banner1 from '../../../images/banner-1.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Grid container>

            {/* Banner Left */}
            <Grid item xs={12} sm={8} sx={{ order: { xs: 2, sm: 1 } }}>
                <img style={{ width: '100%' }} src={banner1} alt=""></img>
            </Grid>

            {/* Banner Right */}
            <Grid item xs={12} sm={4} sx={{ order: { xs: 1, sm: 2 } }}>
                <Grid container>

                    {/* Banner Right Top part*/}
                    <Grid item xs={12} sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        py: { xs: 2, sm: 1.5, md: 2, lg: 3, xl: 5 }, bgcolor: '#f8f7f6'
                    }} >
                        <img className="banner-right-img" src="https://reprizo.axiomthemes.com/wp-content/uploads/revslider/slider-2/slider2_slide2_02-copyright.png" alt=""></img>
                    </Grid>

                    {/* Banner Right Bottom part*/}
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#9a9fa2', py: { xs: 6, sm: 3, md: 5.4, lg: 8.9, xl: 13 } }}>
                        <Typography sx={{ fontSize: { xs: 27, sm: 22, md: 27, lg: 36, xl: 40 }, fontFamily: 'Libre Baskerville', py: 0.5 }} variant="h2" component="div" className="banner-heading">
                            New Watches For
                        </Typography>
                        <Typography sx={{ fontSize: { xs: 27, sm: 22, md: 27, lg: 36, xl: 40 }, fontFamily: 'Libre Baskerville', py: 0.5 }} variant="h2" component="div" className="banner-heading">
                            Milestone Moments
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ pt: 1.6, letterSpacing: 1 }}>
                            <NavLink to="/explore" style={{ textDecoration: 'none', color: "white" }}>Shop Now</NavLink>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Banner;