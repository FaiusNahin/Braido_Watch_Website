import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CardMedia, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageProducts = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handelDeleteProduct = _id => {
        const query = window.confirm('Do You Want To Delete This Product?');
        if (query) {
            fetch(`http://localhost:5000/products/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!!!');
                        const remainingOrders = products.filter(product => product._id !== _id);
                        setProducts(remainingOrders);
                    }
                });
        }
    }

    return (
        <>
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#2c2c2c', pt: 1, pb: 5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 41, md: 47 }, letterSpacing: '1px' }}>
                All Products
            </Typography>


            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: 'rgb(47 47 47)' }}>
                        <TableRow>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Product Image</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Product ID</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Product Name</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Brand</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Price</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <TableRow hover
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ width: { lg: '250px' } }} align="left" component="th" scope="row">
                                    <CardMedia
                                        sx={{ width: { xs: '100%', sm: '100%', md: '70%', lg: '40%' } }}
                                        component="img"
                                        image={product.img}
                                        alt=""
                                    />
                                </TableCell>
                                <TableCell sx={{ fontSize: 16 }} align="left">{product._id}</TableCell>
                                <TableCell sx={{ fontSize: 16 }} align="left">{product.name}</TableCell>
                                <TableCell sx={{ fontSize: 16 }} align="left">{product.brand}</TableCell>
                                <TableCell sx={{ fontSize: 16 }} align="left">${product.price}</TableCell>
                                <TableCell sx={{ fontSize: 16 }} align="left"><IconButton onClick={() => handelDeleteProduct(product._id)} sx={{ color: 'error.main' }} aria-label="delete" size="large">
                                    <DeleteIcon sx={{ color: 'error.main', fontSize: 26 }} />
                                </IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}


export default ManageProducts;