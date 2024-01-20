import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Pagination,
  Stack,
  Typography
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductCart from '../../components/ProductCart';
import { informationCard } from '../../data/inforCard';
import { addProduct } from '../../data/inforCard';
import FutureComponent from '../../components/FutureComponent';

const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await informationCard(); // Use the fetchData function
        setProductsData(data);
      } catch (error) {
        // Handle error if needed
      }
    };
    fetchDataFromApi();
  }, []);

  const handleAddToCart = async (id, thumbnail, title, oddPrice) => {
    const item = productsData.find((item) => item.id === id);

    await addProduct(item);
    window.location.reload();
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
                  <ProductCart
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
