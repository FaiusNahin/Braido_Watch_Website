import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HomeProducts from '../Home/HomeProducts/HomeProducts';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-anchorage-11174.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <>
            <Header></Header>

            {/* Explore */}
            <Container>
                {/* Explore Heading */}
                <Box sx={{ textAlign: 'center', py: 5 }}>
                    <Typography variant="h4" sx={{ color: '#a99577', py: 1.5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 40, sm: 46 }, letterSpacing: '1px', fontWeight: 500 }}>
                        Best Seller
                    </Typography>

                    {/* hr */}
                    <hr style={{ width: '10%', height: '2px', backgroundColor: 'rgb(160 160 160 / 55%)', border: '0', borderRadius: '10px', marginTop: '0px' }} className="explore-hr" />
                </Box>

                {/* All Products */}
                <Grid container spacing={4} sx={{ pb: 6 }}>
                    {
                        products.map(product => <HomeProducts
                            key={product._id}
                            product={product}
                        ></HomeProducts>)
                    }
                </Grid>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default Explore;