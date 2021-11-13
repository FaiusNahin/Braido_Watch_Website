import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeProducts.css'

const HomeProducts = (props) => {
    const { _id, brand, name, price, previousPrice, img, description } = props.product;

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ boxShadow: 0, pb: 2, borderRadius: '0%', textAlign: 'center' }} id="product-container">
                    {/* Products Image */}
                    <Box className="product-thumb">
                        <CardMedia
                            component="img"
                            alt=""
                            id="product-img"
                            sx={{ width: 1 }}
                            image={img}
                        />
                        {/*  Save caption */}
                        < Typography variant="caption" className="save-caption" sx={{ fontSize: 14 }} >
                            SALE
                        </Typography>
                    </Box>

                    {/* Products Details */}
                    <CardContent id="product-card" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="caption" component="div" sx={{ color: '#a0a0a0', fontSize: { xs: 10, sm: 11 }, fontFamily: 'Jost,sans-serif' }} style={{ textTransform: 'uppercase', letterSpacing: '1.5px', }}>
                            {brand}
                        </Typography>
                        <Typography className="product-name" variant="body1" color="#000000db" component="div" sx={{ fontSize: { xs: 13, sm: 15 }, fontFamily: 'Jost,sans-serif', py: 0.7, cursor: 'pointer' }} style={{ textTransform: 'uppercase' }}>
                            {name}
                        </Typography>
                        <Typography variant="body1" sx={{ fontFamily: 'Jost,sans-serif', py: 0.3 }}>
                            <span style={{ textDecoration: 'line-through', fontSize: '14px', color: '#a0a0a0' }}>{previousPrice}</span>
                            <span style={{ fontSize: '16px', paddingLeft: '2px', color: '#a99577' }}> ${price}</span>
                        </Typography>
                        <Typography variant="caption" component="div" sx={{ color: '#a0a0a0', fontSize: 14, fontFamily: 'Jost,sans-serif' }} >
                            {description.slice(0, 30)}...
                        </Typography>
                    </CardContent>

                    {/* Buy Now Button */}
                    <Box id="button-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <NavLink to={`/placeOrder/${_id}`} style={{ textDecoration: 'none' }}>
                            <Button id="buy-now-btn" variant="outlined" sx={{ borderRadius: '0%', fontFamily: "'Sofia Pro',sans-serif", px: 4, py: 1, border: 2, fontSize: 15, my: 5 }}>BUY NOW</Button>
                        </NavLink>
                    </Box>
                </Card>
            </Grid>
        </>
    );
};

export default HomeProducts;