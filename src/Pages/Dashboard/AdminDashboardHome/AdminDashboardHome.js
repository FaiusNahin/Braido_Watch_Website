import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';

const AdminDashboardHome = () => {
    const [users, setUsers] = useState([]);
    const [reviews, setReviews] = useState([]);

    // GET All Users
    useEffect(() => {
        fetch('https://blooming-anchorage-11174.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    // GET Users Review
    useEffect(() => {
        fetch('https://blooming-anchorage-11174.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        // Admin Dashboard Home
        <>
            <Grid container spacing={5}>
                {/* Admin Dashboard Home Users Table*/}
                <Grid item xs={12} lg={5.5}>

                    {/* Admin Dashboard Home Users Table Heading */}
                    <Typography variant="h4" sx={{ textAlign: 'center', color: 'primary.main', pt: 1, pb: 5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 40, md: 45 }, letterSpacing: '1px' }}>
                        Our Users
                    </Typography>

                    {/* Users Table */}
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: 'primary.main' }}>
                                <TableRow>
                                    <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>UserName</TableCell>
                                    <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>User Email</TableCell>
                                    <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Role</TableCell>
                                </TableRow>
                            </TableHead>

                            {/* Users Data */}
                            <TableBody>
                                {users.map(user => (
                                    <TableRow
                                        key={user._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell sx={{ fontSize: 16 }} align="left" component="th" scope="row">{user.displayName}</TableCell>
                                        <TableCell sx={{ fontSize: 16 }} align="left">{user.email}</TableCell>
                                        {
                                            user.role === 'admin' ? <TableCell sx={{ fontSize: 17, textTransform: 'capitalize', color: 'warning.main' }} align="left">{user.role}</TableCell> : <TableCell sx={{ fontSize: 17, color: 'info.main' }} align="left">User</TableCell>
                                        }
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                {/* Admin Dashboard Home Review Table */}
                <Grid item xs={12} lg={6.5}>
                    <Box>

                        {/* Admin Dashboard Home Review Table Heading */}
                        <Typography variant="h4" sx={{ textAlign: 'center', color: 'secondary.main', pt: 1, pb: 5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 40, md: 45 }, letterSpacing: '1px' }}>
                            Users Review
                        </Typography>

                        {/* Review Table */}
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ backgroundColor: 'secondary.main' }}>
                                    <TableRow>
                                        <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Name</TableCell>
                                        <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Title</TableCell>
                                        <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Description</TableCell>
                                        <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Rating</TableCell>
                                    </TableRow>
                                </TableHead>

                                {/* Review Data */}
                                <TableBody>
                                    {reviews.map(review => (
                                        <TableRow
                                            key={review._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell sx={{ fontSize: { md: 15, xl: 16 } }} align="left" component="th" scope="row">
                                                <Grid container spacing={{ xs: 1.5, xl: 5 }}>
                                                    <Grid item xs={12} xl={3} sx={{ textAlign: 'center' }}>
                                                        <Avatar
                                                            alt=""
                                                            src={review.photoUrl}
                                                            sx={{ width: { xs: 56, md: 56 }, height: { xs: 56, md: 56 } }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} xl={7} sx={{ textAlign: { xl: 'center' } }}>
                                                        {review.name}
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell sx={{ fontSize: 16 }} align="left">{review.reviewTitle}</TableCell>
                                            <TableCell sx={{ fontSize: 16, width: { lg: '270px', xl: '300px' } }} align="left">{review.reviewDetails}</TableCell>
                                            <TableCell sx={{ fontSize: 17, color: 'warning.main', fontWeight: 'bold' }} align="left">{review.rating}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default AdminDashboardHome;