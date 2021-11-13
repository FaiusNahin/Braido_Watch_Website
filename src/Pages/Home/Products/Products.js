import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const homeProducts = products.slice(3, 9);
    ;

    return (
        <Container>
            <Box sx={{ textAlign: 'center', py: 5 }}>
                <Typography variant="body1" sx={{ color: '#a99577', fontSize: { xs: 15, sm: 16 }, fontFamily: "'Sofia Pro',sans-serif", letterSpacing: '.25em', fontWeight: 500 }}>
                    OUR PRODUCTS
                </Typography>
                <Typography variant="h4" sx={{ color: '#2c2c2c;', py: 1.5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 40, sm: 46 }, letterSpacing: '1px', fontWeight: 500 }}>
                    Our Bestsellers
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {
                    homeProducts.map(product => <HomeProducts
                        key={product._id}
                        product={product}
                    ></HomeProducts>)
                }
            </Grid>
        </Container>
    );
};

export default Products;