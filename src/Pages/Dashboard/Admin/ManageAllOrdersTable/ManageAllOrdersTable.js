import React from 'react';
import { IconButton, TableRow, TableCell, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageAllOrdersTable = (props) => {
    const { _id, orderId, name, email, status } = props.order;
    const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://blooming-anchorage-11174.herokuapp.com/products/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [orderId]);

    return (
        // Manage All Orders Table Data
        <>
            <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ fontSize: 16 }} align="left">{name}</TableCell>
                <TableCell sx={{ fontSize: 16 }} align="left">{email}</TableCell>
                <TableCell sx={{ fontSize: 16, textTransform: 'capitalize' }} align="left">{product.name}</TableCell>
                <TableCell sx={{ fontSize: 16 }} align="left">{orderId}</TableCell>

                {/* Status Button */}
                <TableCell align="left">
                    {
                        status === 'Shipped' ?
                            <td><Button onClick={() => props.handelUpdateStatus(_id)} variant="contained" color="success" sx={{ textTransform: 'capitalize', fontSize: 17 }} >{status}</Button></td>
                            :
                            <td><Button onClick={() => props.handelUpdateStatus(_id)} variant="contained" sx={{ textTransform: 'capitalize', fontSize: 17 }}>{status}</Button></td>
                    }
                </TableCell>

                {/* Delete Button */}
                <TableCell align="left"><IconButton onClick={() => props.handelDeleteOrder(_id)} sx={{ color: 'error.main' }} aria-label="delete" size="large">
                    <DeleteIcon sx={{ color: 'error.main', fontSize: 26 }} />
                </IconButton></TableCell>
            </TableRow>
        </>
    );
};

export default ManageAllOrdersTable;