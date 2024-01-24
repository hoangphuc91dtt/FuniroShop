import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CompareCartItem from './CompareCartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';
import { removeCartAllCompare } from '../../redux/slice/cartSlice';

const CompareCartList = () => {
  const dispatch = useDispatch();
  const { cartCompare } = useSelector((state) => state.cart);

  const handleRemoveAllCompare = () => dispatch(removeCartAllCompare());

  return (
    <Stack
      position={'fixed'}
      bottom={0}
      width={'100%'}
      zIndex={999}
      direction={'row'}
      justifyContent={'center'}>
      <Stack
        width={'60%'}
        bgcolor={'#fff'}
        boxShadow={'1px 1px 10px rgba(0,0,0,.1) '}
        direction={'row'}
        justifyContent={'center'}
        py={3}>
        {cartCompare.map(({ id, title, thumbnail }) => (
          <CompareCartItem key={id} id={id} title={title} thumbnail={thumbnail} />
        ))}
        <Stack width={'25%'} pl={3} alignItems={'center'} justifyContent="center" gap={3}>
          <Button variant="contained" component={Link} to={SCREEN_URL.PRODUCT}>
            So sanh ngay
          </Button>
          <Button variant="outlined" onClick={handleRemoveAllCompare}>
            Xoa tat ca san pham
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CompareCartList;
