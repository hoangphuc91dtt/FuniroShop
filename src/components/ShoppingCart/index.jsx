import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
  Button
} from '@mui/material';
import { findDeleteCartById, findAllCart } from '../../api/cartApi';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';
import { useDispatch, useSelector } from 'react-redux';

const ShoppingCart = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { cart: cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(findAllCart());
  }, []);

  const handleRemoveItem = (id) => {
    dispatch(findDeleteCartById(id));
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Shopping Cart</DialogTitle>
      <DialogContent>
        <Stack spacing={4}>
          {cartItems.map((item, index) => (
            <Stack
              key={item.id}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={4}>
              <img src={item.thumbnail} alt={item.title} style={{ width: 100, height: 100 }} />
              <Stack spacing={2}>
                <Typography variant="h3" fontSize={'20px'}>
                  {item.title}
                </Typography>
                <Typography variant="body1">Rp {item.oddPrice}</Typography>
              </Stack>
              <Button variant="outlined" size="small" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </Button>
            </Stack>
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button component={Link} to={SCREEN_URL.CART} onClick={onClose}>
          Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShoppingCart;
