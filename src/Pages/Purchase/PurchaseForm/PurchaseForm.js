import React, { useState } from 'react';
import { Typography, Alert } from '@mui/material';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import './PurchaseForm.css'
import useAuth from '../../../hooks/useAuth';

const PurchaseForm = () => {
    const { productId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();

    const handlePlaceOrder = data => {
        fetch(`https://blooming-anchorage-11174.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    reset();
                }
            });
    };

    return (
        // Purchase Form
        <>
            {/* Purchase Form heading */}
            <Typography variant='h4' sx={{ color: '#2c2c2c', fontFamily: "'Playfair Display',serif;", fontSize: 32, mb: .6 }}>
                Contact Information
            </Typography>
            <hr style={{ width: '80%', height: '2px', backgroundColor: '#a99577', border: '0', borderRadius: '10px', marginTop: '0px', marginBottom: '20px', float: 'left' }} className="purchase-hr" />

            {/* Checkout Form*/}
            <form className="checkout-form" onSubmit={handleSubmit(handlePlaceOrder)}>
                <input defaultValue={productId} style={{ display: 'none' }} {...register("orderId")} />
                <input defaultValue="Pending" style={{ display: 'none' }} {...register("status")} />

                <input className="input-fields" defaultValue={user.displayName} {...register("name", { required: true })} />

                <input className="input-fields" defaultValue={user.email} {...register("email", { required: true })} />

                <input className="input-fields" placeholder="State" {...register("state", { required: true })} />

                <input className="input-fields" placeholder="Area" {...register("area", { required: true })} />

                <input className="input-fields" placeholder="Zip/Postal Code" {...register("zip_code", { required: true })} />

                {/* Checkout Button */}
                <input className="checkout-btn" type="submit" value="PROCEED TO CHECKOUT" />
            </form>
            {/* Alert Message */}
            {
                success && <Typography sx={{ pt: 2 }} variant="caption" display="block" ><Alert severity="success" sx={{ display: 'flex', justifyContent: 'center' }}>Order Placed Successfully!</Alert></Typography>
            }
        </>
    );
};

export default PurchaseForm;