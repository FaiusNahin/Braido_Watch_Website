import { Container, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PurchaseDetails from '../PurchaseDetails/PurchaseDetails';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import { useParams } from 'react-router';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://blooming-anchorage-11174.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);

    return (
        <>
            <Header></Header>

            {/* Purchase */}
            <Container sx={{ my: 5, pb: 8 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={8}>

                        {/* Product Details Heading */}
                        <Typography variant='h4' sx={{ color: '#2c2c2c', fontFamily: "'Playfair Display',serif;", fontSize: 32, mb: 2 }}>
                            Products
                        </Typography>

                        {/* Product Details */}
                        <>
                            {
                                <PurchaseDetails>{product}</PurchaseDetails>
                            }
                        </>

                        {/* Continue Shopping Button */}
                        <NavLink to="/explore" style={{ textDecoration: 'none' }}>
                            <Button id="explore-now-btn" variant="outlined" sx={{ borderRadius: '0%', fontFamily: "'Sofia Pro',sans-serif", px: 5.5, py: 1.5, border: 2, fontSize: 15, my: 4 }}>CONTINUE SHOPPING</Button>
                        </NavLink>
                    </Grid>

                    {/* Purchase Form */}
                    <Grid item xs={12} sm={12} md={4}>
                        {
                            <PurchaseForm></PurchaseForm>
                        }
                    </Grid>
                </Grid>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default Purchase;