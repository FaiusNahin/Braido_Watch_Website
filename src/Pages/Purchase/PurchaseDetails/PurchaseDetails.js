import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './PurchaseDetails.css'

const PurchaseDetails = ({ children }) => {
    const { brand, name, price, img, description } = children;

    return (
        <>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', lg: 'row' }, boxShadow: 0, borderRadius: '0%' }} style={{ border: '1px solid #e9e9e9' }}>
                <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', sm: '32%' } }}
                    image={img}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography id="products-details-name" variant="h5" sx={{ color: '#2c2c2ce3', fontFamily: "'Playfair Display',serif;", fontSize: 27, mb: 1 }} style={{ textTransform: 'capitalize' }}>
                            {name}
                        </Typography>

                        <Typography variant="caption" sx={{ color: '#2c2c2ce3', fontSize: { xs: 12, sm: 13 }, fontFamily: 'Jost,sans-serif', py: 0.5, letterSpacing: '1.5px' }} >
                            {brand}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#606060', fontSize: 18, fontWeight: '500', letterSpacing: '1.5px', py: 1 }}>
                            ${price}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#868686', fontSize: 14, fontFamily: 'Jost,sans-serif' }} >
                            {description}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </>
    );
};

export default PurchaseDetails;