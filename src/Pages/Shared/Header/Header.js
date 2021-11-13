import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../images/logo.png';
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <>
            {/* Navigation For Mobile Device */}
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                className={mobileMenuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                {/* Nav */}
                <Box>
                    <NavLink to="/home" className="header-links mobile-links">
                        Home
                    </NavLink><br />
                    <NavLink to="/explore" className="header-links mobile-links">
                        Explore
                    </NavLink><br />
                    {
                        user?.email ? <NavLink to="/dashboard" className="header-links mobile-links">
                            Dashboard
                        </NavLink> : ''
                    }
                    <br />
                    {
                        user?.email ? <p style={{ fontSize: '17px', color: 'rgb(80, 80, 80)', margin: '10px 12px 6px 20px' }}>{user?.displayName}</p> : ''
                    }
                    <NavLink to="/login" className="header-links mobile-links">
                        Login
                    </NavLink>
                </Box>
            </Menu>
        </>
    );
    return (
        // Header
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ px: { xs: 0, sm: 1, md: 2, lg: 6, xl: 16 } }}>
                <AppBar sx={{ boxShadow: 0, py: 2 }} position="sticky" style={{ backgroundColor: 'white' }}>
                    <Toolbar sx={{ display: 'flex', alignItems: 'stretch' }}>
                        {/* logo */}
                        <Typography sx={{ textAlign: { xs: 'left', md: 'center' } }}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            <img style={{ width: '60%' }} src={logo} alt="" />
                        </Typography>

                        {/* Left Nav */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            <NavLink to="/home" style={{ textDecoration: 'none', padding: '0px 5px' }}>
                                <Button className="header-links" sx={{ color: 'text.primary', pb: 0 }} style={{ backgroundColor: 'inherit', fontSize: 18 }} color="inherit">Home</Button>
                            </NavLink>
                            <NavLink to="/explore" style={{ textDecoration: 'none', padding: '0px 5px' }}>
                                <Button className="header-links" sx={{ color: 'text.primary', pb: 0 }} style={{ backgroundColor: 'inherit', fontSize: 18 }} color="inherit">Explore</Button>
                            </NavLink>
                            {
                                user?.email ? <NavLink to="/dashboard" style={{ textDecoration: 'none', padding: '0px 5px' }}>
                                    <Button className="header-links" sx={{ color: 'text.primary', pb: 0 }} style={{ backgroundColor: 'inherit', fontSize: 18 }} color="inherit">Dashboard</Button>
                                </NavLink> : ''
                            }
                        </Box>

                        {/* Right Nav */}
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            {
                                user?.email ? <p className="" style={{ fontSize: '17px', color: 'rgb(80, 80, 80)', margin: '0px', padding: '0px 10px' }}>{user?.displayName}</p> : ''
                            }
                            {
                                user?.email ? <NavLink to="/" style={{ textDecoration: 'none', padding: '0px 5px' }}>
                                    <Button onClick={logOut} className="header-links" sx={{ color: 'text.primary' }} style={{ backgroundColor: 'inherit', fontSize: 17 }} color="inherit">Logout</Button>
                                </NavLink>
                                    : <NavLink to="/login" style={{ textDecoration: 'none', padding: '0px 5px' }}>
                                        <Button className="header-links" sx={{ color: 'text.primary' }} style={{ backgroundColor: 'inherit', fontSize: 17 }} color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMobileMenuOpen}
                            >
                                <MenuIcon sx={{ color: 'text.secondary' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {renderMobileMenu}
        </Box >
    );
};

export default Header;