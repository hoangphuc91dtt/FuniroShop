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
import ProductCard from '../../components/ProductCard';
import { fetchData } from '../../data/api';
import FutureComponent from '../../components/FutureComponent';

const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData(); // Use the fetchData function
        setProductsData(data);
      } catch (error) {
        // Handle error if needed
      }
    };
    fetchDataFromApi();
  }, []);
  return (
    <>
      <Stack>
        {/* 78 */}
        <Stack position={'relative'}>
          <img
            src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705684050/ShopImage01_plvame.png"
            alt=""
            width={'100%'}
          />
          <Stack
            spacing={2}
            sx={{
              position: 'absolute',
              flexDirection: 'column',
              alignItems: 'stretch',
              transform: 'translate(-50%, -20%)',
              transition: '.3s',
              top: '50%',
              left: '50%'
            }}>
            <Typography variant="h2" fontSize={'48px'}>
              Shop
            </Typography>
            <Stack direction={'row'}>
              <Typography variant="h5">Home</Typography>
              <NavigateNextIcon></NavigateNextIcon>
              <Typography variant="h5">Shop</Typography>
            </Stack>
          </Stack>
        </Stack>
        {/*  63*/}
        <Stack alignItems={'center'} py={'40px'} px={'140px'}>
          <Grid container spacing={3}>
            {productsData.map(
              ({ id, thumbnail, title, description, newPrice, oddPrice, discount }) => (
                <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    thumbnail={thumbnail}
                    title={title}
                    description={description}
                    newPrice={newPrice}
                    oddPrice={oddPrice}
                    discount={discount}
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
