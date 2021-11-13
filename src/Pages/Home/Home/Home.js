import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Partners from '../Partners/Partners';
import Products from '../Products/Products';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <ReviewDetails></ReviewDetails>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;