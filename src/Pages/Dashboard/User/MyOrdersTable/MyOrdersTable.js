import { CardMedia, IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const MyOrdersTable = (props) => {
    const { _id, orderId, email, status } = props.order;
    const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:5000/products/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [orderId]);

    return (
        <>
            <TableRow hover
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
                <TableCell sx={{ fontSize: 16 }} align="left">{orderId}</TableCell>
                <TableCell sx={{ fontSize: 16, textTransform: 'capitalize' }} align="left">{product.name}</TableCell>
                <TableCell sx={{ fontSize: 16 }} align="left">${product.price}</TableCell>
                <TableCell sx={{ fontSize: 16 }} align="left">{status}</TableCell>
                <TableCell sx={{ fontSize: 16 }} align="left"><IconButton onClick={() => props.handelDeleteOrder(_id)} sx={{ color: 'error.main' }} aria-label="delete" size="large">
                    <DeleteIcon sx={{ color: 'error.main', fontSize: 26 }} />
                </IconButton></TableCell>
            </TableRow>
        </>
    );
};

export default MyOrdersTable;