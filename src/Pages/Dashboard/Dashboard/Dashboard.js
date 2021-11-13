import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import Payment from '../User/Payment/Payment';
import MyOrders from '../User/MyOrders/MyOrders';
import Review from '../User/Review/Review';
import AddProduct from '../Admin/AddProduct/AddProduct';
import ManageProducts from '../../Dashboard/Admin/ManageProducts/ManageProducts';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import UserRoute from '../../Login/UserRoute/UserRoute';
import AdminDashboardHome from '../AdminDashboardHome/AdminDashboardHome';
import DashboardHome from '../DashboardHome/DashboardHome';


const drawerWidth = 230;

function Dashboard(props) {
    const { logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ backgroundColor: 'rgb(47 47 47)', height: '100%' }}>
            <Box sx={{ mt: { xs: 1.5, sm: 2, md: 4 } }}>
                <List>
                    <NavLink to={`${url}`} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                        <DashboardIcon sx={{ mr: 2 }} />Dashboard
                    </NavLink>
                    {
                        admin ? <>
                            {/* For Admin Links */}

                            <NavLink to={`${url}/makeAdmin`} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                                <PersonAddIcon sx={{ mr: 2 }} />Make Admin
                            </NavLink>

                            <NavLink to={`${url}/addProduct`} onClick={handleClickOpen} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                                <AddBoxIcon sx={{ mr: 2 }} />Add Product
                            </NavLink>

                            <NavLink to={`${url}/manageProduct`} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                                <FormatListBulletedIcon sx={{ mr: 2 }} />Manage Products
                            </NavLink>

                            <NavLink to={`${url}/manageAllOrders`} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                                <LocalMallIcon sx={{ mr: 2 }} />Manage All Orders
                            </NavLink>
                        </> : <>
                            {/* For User Links */}

                            <NavLink to={`${url}/payment`} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                                <PaymentIcon sx={{ mr: 2 }} />Payment
                            </NavLink>

                            <NavLink to={`${url}/myOrders`} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                                <ShoppingCartIcon sx={{ mr: 2 }} /> My Orders
                            </NavLink>

                            <NavLink to={`${url}/review`} onClick={handleClickOpen} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                                <ReviewsIcon sx={{ mr: 2 }} />Review
                            </NavLink>
                        </>
                    }

                </List>
            </Box>

            {/* Home & Logout Links */}
            <Box sx={{ pb: 1 }} style={{ position: 'absolute', bottom: 0, left: 0 }}>
                <List>
                    <NavLink to="/home" style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                        <HomeIcon sx={{ mr: 2 }} />Home
                    </NavLink>

                    <NavLink to="/" onClick={logOut} style={{ display: 'flex', alignItems: 'stretch', color: 'white', textDecoration: 'none', fontSize: '17px', margin: '16px 0px 16px 20px' }}>
                        <LogoutIcon sx={{ mr: 2 }} />LogOut
                    </NavLink>
                </List>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: '' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h6" noWrap component="div">
                        <Typography variant="body1" sx={{ color: '#cea464', textAlign: 'center', fontSize: { xs: 20, sm: 24 }, fontFamily: "'Sofia Pro',sans-serif", letterSpacing: '.12em', fontWeight: 500, mr: 1.5 }}>
                            BRAIDO' S
                        </Typography> Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        {
                            !admin ? <DashboardHome></DashboardHome> : <AdminDashboardHome></AdminDashboardHome>
                        }
                    </Route>

                    {/* User Nested route */}
                    <UserRoute path={`${path}/payment`}>
                        <Payment></Payment>
                    </UserRoute>
                    <UserRoute path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </UserRoute>
                    <UserRoute path={`${path}/review`}>
                        <Review
                            open={open}
                            setOpen={setOpen}
                            handleClose={handleClose}
                        ></Review>
                    </UserRoute>

                    {/* Admin Nested route */}
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct
                            open={open}
                            setOpen={setOpen}
                            handleClose={handleClose}
                        ></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
