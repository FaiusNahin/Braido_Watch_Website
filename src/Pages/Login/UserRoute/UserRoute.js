import { CircularProgress, Box } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();

    if (isLoading) {
        return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress color="success" /></Box>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && !admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default UserRoute;