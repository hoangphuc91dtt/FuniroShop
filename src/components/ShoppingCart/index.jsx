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
import { deleteItem, fetchData } from '../../data/api';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';

const ShoppingCart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData()
      .then((data) => setCartItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleRemoveItem = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    // Remove the item from the cart based on its index
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    deleteItem(id);
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
                <Typography variant="body1">${item.oddPrice}</Typography>
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
        <Button component={Link} to={SCREEN_URL.PRODUCT} onClick={onClose}>
          Compare
        </Button>
        <Button component={Link} to={SCREEN_URL.CART} onClick={onClose}>
          Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShoppingCart;
