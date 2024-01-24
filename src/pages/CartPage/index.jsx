import { Delete } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { findAllCart, findDeleteCartById } from '../../api/cartApi';
import FutureComponent from '../../components/FutureComponent';
import { SCREEN_URL } from '../../constants/screenUrls';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart: cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(findAllCart());
  }, []);
  const handleRemoveItem = (id) => {
    dispatch(findDeleteCartById(id));
  };

  const total = cartItems.reduce((total, { newPrice }) => total + newPrice, 0);

  return (
    <>
      <Stack padding={'72px 100px'} bgcolor={'#FFF;'}>
        <Stack direction="row" justifyContent={'space-between'} gap={5}>
          <Stack width={'70%'}>
            <Stack
              bgcolor={'#F9F1E7'}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              padding={'15px 70px'}>
              <Typography>Product </Typography>
              <Typography>Price</Typography>
              <Typography>Quantity</Typography>
              <Typography>Subtotal</Typography>
            </Stack>
            {cartItems.map(({ id, title, thumbnail, newPrice }) => (
              <Stack
                key={id}
                direction="row"
                alignItems="center"
                marginTop="30px"
                // justifyContent="space-between"
              >
                <img
                  src={thumbnail}
                  alt={title}
                  style={{
                    borderRadius: '5px',
                    width: '111px',
                    height: '90px',
                    objectFit: 'cover'
                  }}
                />
                <Stack
                  width={'80%'}
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center">
                  <Typography
                    sx={{
                      color: '#9F9F9F',
                      fontFamily: 'Poppins',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal'
                    }}>
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#9F9F9F',
                      fontFamily: 'Poppins',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal'
                    }}>
                    Rs. {newPrice}
                  </Typography>

                  <Typography
                    sx={{
                      // minWidth: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '3px',
                      border: '1px solid black',
                      width: '32px',
                      height: '32px'
                    }}>
                    1
                  </Typography>
                  <Typography
                    sx={{
                      color: '#000',
                      fontFamily: 'Poppins',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal'
                    }}>
                    Rs. {newPrice}
                  </Typography>
                </Stack>
                <Stack>
                  <IconButton onClick={() => handleRemoveItem(id)}>
                    <Delete size={'28px'} style={{ color: '#B88E2F', flexShrink: 0 }} />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
          </Stack>

          <Stack
            padding={'15px'}
            spacing={5}
            width={'30%'}
            bgcolor={'#F9F1E7'}
            alignItems={'center'}>
            <Typography
              sx={{
                color: '#000',
                fontFamily: ' Poppins',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal'
              }}>
              Cart Totals
            </Typography>

            <Stack direction={'column'} spacing={5}>
              <Stack direction={'row'} spacing={6}>
                <Typography>Subtotal</Typography>
                <Typography
                  sx={{
                    color: '#9F9F9F',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}>
                  Rs.{total}
                </Typography>
              </Stack>

              <Stack spacing={5} direction={'row'}>
                <Typography>Total</Typography>
                <Typography
                  sx={{
                    color: 'var(--Primary, #B88E2F)',
                    fontFamily: 'Poppins',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}>
                  Rs.{total}
                </Typography>
              </Stack>
            </Stack>

            <Button
              label="Home"
              component={Link}
              to={SCREEN_URL.CHECKOUT}
              sx={{
                border: '1px solid #000000',
                borderRadius: '7px',
                padding: '14px 58px',
                color: '#000000'
              }}>
              Check out
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <FutureComponent />
    </>
  );
};

export default CartPage;
