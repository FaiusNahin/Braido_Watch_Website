import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField, Box } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const Review = ({ open, setOpen, handleClose }) => {
    const { user } = useAuth();

    const initialInfo = { name: user.displayName, email: user.email, photoUrl: '', reviewTitle: '', reviewDetails: '', rating: 1 }
    const [reviewInfo, setReviewInfo] = React.useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    }

    const handleReviewForm = e => {
        const reviewData = {
            ...reviewInfo
        }

        fetch('https://blooming-anchorage-11174.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOpen(true);
                    handleClose()
                }
            });

        e.preventDefault();
    }

    return (
        // Review Form
        <Box>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >

                {/* Review Headings */}
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography variant="body1" sx={{ color: '#a99577', textAlign: 'center', fontSize: { xs: 20, sm: 24 }, fontFamily: "'Sofia Pro',sans-serif", letterSpacing: '.20em', fontWeight: 500, mt: 2 }}>
                        REVIEW
                    </Typography>
                </BootstrapDialogTitle>

                <DialogContent sx={{}}>

                    {/* Form */}
                    <Box sx={{}}>
                        <form onSubmit={handleReviewForm} style={{ textAlign: 'center' }}>
                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                name="name"
                                required
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ display: 'none', width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                name="email"
                                required
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Your photo url"
                                name="photoUrl"
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Review title"
                                name="reviewTitle"
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />

                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Your opinion"
                                name="reviewDetails"
                                required
                                onBlur={handleOnBlur}
                                rows={4}
                                multiline
                            />

                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Rating"
                                name="rating"
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />

                            {/* Submit Button */}
                            <Button type="submit" id="explore-now-btn" variant="outlined" sx={{ borderRadius: '0%', fontFamily: "'Sofia Pro',sans-serif", px: 5.5, py: 1.5, border: 2, fontSize: 15, my: 1.2, width: { xs: '65%', sm: '40%', md: '45%' } }}>Submit</Button>
                        </form>
                    </Box>
                </DialogContent>
            </BootstrapDialog>
        </Box>
    );
}


export default Review;