import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import ManageAllOrdersTable from '../ManageAllOrdersTable/ManageAllOrdersTable';
import { Box } from '@mui/material';

const ManageAllOrders = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetch('https://blooming-anchorage-11174.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    //Update Status API
    const handelUpdateStatus = _id => {
        const updatedStatus = 'Shipped'
        const newStatus = { status: updatedStatus }

        const permission = window.confirm('Are You Sure to Change this Order Status ?')
        if (permission) {
            fetch(`https://blooming-anchorage-11174.herokuapp.com/orders/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newStatus)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Updated');

                        fetch(`https://blooming-anchorage-11174.herokuapp.com/orders`)
                            .then(res => res.json())
                            .then(data => setOrders(data));
                    }
                })
        }
    }

    // DELETE Order
    const handelDeleteOrder = _id => {
        const query = window.confirm('Are You Sure To Delete This Order?');
        if (query) {
            fetch(`https://blooming-anchorage-11174.herokuapp.com/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!!!');
                        const remainingOrders = orders.filter(order => order._id !== _id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        // Manage All Orders
        <Box>
            {/* Manage All Orders Headings */}
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#2c2c2c', pt: 1, pb: 5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 41, md: 47 }, letterSpacing: '1px' }}>
                All Orders
            </Typography>

            {/* Manage All Orders table */}
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: 'rgb(47 47 47)' }}>
                        <TableRow>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>UserName</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>User Email</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Product Name</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Order Id</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Status</TableCell>
                            <TableCell align="left" sx={{ fontSize: 17, color: 'white' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* Manage All Orders Table Body */}
                    <TableBody>
                        {orders.map(order => <ManageAllOrdersTable
                            key={order._id}
                            order={order}
                            handelDeleteOrder={handelDeleteOrder}
                            handelUpdateStatus={handelUpdateStatus}
                        ></ManageAllOrdersTable>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ManageAllOrders;