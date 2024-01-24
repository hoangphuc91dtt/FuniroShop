import React, { useEffect, useState } from 'react';
import { Grid, Pagination, Stack } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import FutureComponent from '../../components/FutureComponent';
import { useDispatch, useSelector } from 'react-redux';
import { findAllProduct } from '../../api/productApi';
import { addToCart } from '../../api/cartApi';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { products: productsData } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(findAllProduct());
  }, []);

  const handleAddToCart = async (id) => {
    const item = productsData.find((item) => item.id === id);

    dispatch(addToCart(item));
  };

  return (
    <>
      <Stack>
        {/* 78 */}

        {/*  63*/}
        <Stack alignItems={'center'} py={'40px'} px={'140px'}>
          <Grid container spacing={3}>
            {productsData.map(
              ({ id, thumbnail, title, description, newPrice, oddPrice, discount }) => (
                <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    id={id}
                    thumbnail={thumbnail}
                    title={title}
                    description={description}
                    newPrice={newPrice}
                    oddPrice={oddPrice}
                    discount={discount}
                    handleAddToCart={handleAddToCart}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Stack>
        {/* 62  */}
        <Stack alignItems={'center'}>
          <Pagination count={5} variant="rounded" shape="rounded" />
        </Stack>
        {/* 61 */}
        <Stack py={'40px'}>
          <FutureComponent></FutureComponent>
        </Stack>
      </Stack>
    </>
  );
};

export default ShopPage;
