import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../../hooks/useAuth';
import { Typography } from '@mui/material';
import MyOrdersTable from '../MyOrdersTable/MyOrdersTable';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = React.useState([]);

    // Get Current User Orders
    React.useEffect(() => {
        fetch(`https://blooming-anchorage-11174.herokuapp.com/order/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    // Cancel My Order
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
        // My Orders
        <>
            {/* My Orders Headings */}
            <Typography variant="h4" sx={{ textAlign: 'center', color: '#2c2c2c', pt: 1, pb: 5, fontFamily: "'Playfair Display',serif", fontSize: { xs: 41, md: 47 }, letterSpacing: '1px' }}>
                My Orders
            </Typography>

            {/* My Orders Table */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: 'rgb(47 47 47)' }}>
                        <TableRow>
                            <TableCell sx={{ fontSize: 17, color: 'white' }} align="left">Email</TableCell>
                            <TableCell sx={{ fontSize: 17, color: 'white' }} align="left">Order Id</TableCell>
                            <TableCell sx={{ fontSize: 17, color: 'white' }} align="left">Product Name</TableCell>
                            <TableCell sx={{ fontSize: 17, color: 'white' }} align="left">Price</TableCell>
                            <TableCell sx={{ fontSize: 17, color: 'white' }} align="left">Status</TableCell>
                            <TableCell sx={{ fontSize: 17, color: 'white' }} align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Table Body */}
                    <TableBody>
                        {orders.map(order => <MyOrdersTable
                            key={order._id}
                            order={order}
                            handelDeleteOrder={handelDeleteOrder}
                        ></MyOrdersTable>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}


export default MyOrders;