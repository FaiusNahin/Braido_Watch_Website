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

const AddProduct = ({ open, setOpen, handleClose }) => {
    const [productInfo, setProductInfo] = React.useState([]);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        setProductInfo(newInfo);
    }

    const handleReviewForm = e => {
        e.preventDefault();

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOpen(true);
                    handleClose()
                }
            });
    }

    return (
        <Box>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography variant="body1" sx={{ color: '#a99577', textAlign: 'center', fontSize: { xs: 20, sm: 24 }, fontFamily: "'Sofia Pro',sans-serif", letterSpacing: '.20em', fontWeight: 500, mt: 2 }}>
                        <span style={{ color: 'rgb(138 138 138)' }}>ADD A NEW</span> PRODUCT
                    </Typography>
                </BootstrapDialogTitle>
                <DialogContent sx={{}}>
                    <Box sx={{}}>
                        <form onSubmit={handleReviewForm} style={{ textAlign: 'center' }}>
                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Watch brand"
                                name="brand"
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Watch name"
                                name="name"
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Price"
                                name="price"
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Previous price"
                                name="previousPrice"
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />

                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Watch photo url"
                                name="img"
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />

                            <TextField
                                sx={{ width: { xs: '100%', sm: '90%', md: '92%' }, my: 1.2 }}
                                label="Description"
                                name="description"
                                required
                                onBlur={handleOnBlur}
                                rows={4}
                                multiline
                            />

                            <Button type="submit" id="explore-now-btn" variant="outlined" sx={{ borderRadius: '0%', fontFamily: "'Sofia Pro',sans-serif", px: 5.5, py: 1.5, border: 2, fontSize: 15, my: 1.2, width: { xs: '100%', sm: '50%' } }}>Add Product</Button>
                        </form>
                    </Box>
                </DialogContent>
            </BootstrapDialog>
        </Box>
    );
}

export default AddProduct;