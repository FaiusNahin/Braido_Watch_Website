import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import './ReviewDetails.css'

const ReviewDetails = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://blooming-anchorage-11174.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        // Reviews

        // Review Container
        <Box id="review-container" sx={{ my: 5 }}>
            <Box sx={{ py: { xs: 8, sm: 10, md: 12, lg: 10 }, px: { xs: 1, sm: 2, md: 3, lg: 5, xl: 16 }, mx: { xs: 1, sm: 2, md: 3, lg: 5, xl: 16 } }}>
                {/* Review Heading */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography variant="h2" sx={{ color: '#000', fontSize: { xs: 21, sm: 23 }, fontFamily: "'Jost',Sans-serif", letterSpacing: '1px', fontWeight: 400 }}>
                        TESTIMONIALS
                    </Typography>
                </Box>

                {/* Review */}
                <Grid container spacing={5} sx={{ textAlign: 'center' }}>
                    {/* Review Details */}
                    {
                        reviews.map(review => <Grid key={review._id} item xs={12} sm={6} lg={4} sx={{ mb: { xs: 6, sm: 5, md: 0 } }}>

                            <Rating name="half-rating-read" defaultValue={parseFloat(review.rating)} precision={0.5} readOnly />

                            <Typography variant="body1" sx={{ color: '#000', fontSize: { xs: 19, sm: 22 }, fontFamily: "'Jost',Sans-serif", lineHeight: 1.2, fontWeight: 400, letterSpacing: '.1px', pb: 2, pt: 1 }}>
                                "{review.reviewTitle}"
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#868686', fontSize: { xs: 14, md: 15 }, fontFamily: "'Jost',Sans-serif", lineHeight: '24px', fontWeight: 400, letterSpacing: '.1px', width: { xs: '100%', sm: '87%', md: '95%', lg: '100%', xl: '98%' }, mx: 'auto' }}>
                                {review.reviewDetails}
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2.3 }}>
                                <Avatar
                                    alt=""
                                    src={review.photoUrl}
                                    sx={{ width: { xs: 75, md: 85 }, height: { xs: 75, md: 85 } }}
                                />
                            </Box>

                            <Typography variant="h3" sx={{ color: '#868686', fontSize: { xs: 14 }, fontFamily: "'Jost',Sans-serif", fontWeight: 400, letterSpacing: '1.8px', textTransform: 'uppercase', lineHeight: 1.2, wordSpacing: '1px' }}>
                                {review.name}
                            </Typography>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default ReviewDetails;