import { Box, Stack, Typography, Button, Grid, ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { fetchData } from '../../data/api';
import { APP_COLORS } from '../../themes';

const HomePage = () => {
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
      {/* Browse The Range */}
      <Stack sx={{ position: 'relative' }}>
        <img
          src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705727250/homeImage01_yenbiy.png"
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </Stack>
      {/* Browse The Range */}
      <Stack
        justifyContent={'space-between'}
        sx={{
          position: 'absolute',
          top: 150,
          right: 60,
          padding: '40px',
          width: '640px',
          height: '440px',
          backgroundColor: '#FFF3E3'
        }}>
        {/* Nội dung Stack 2 */}
        <Typography py={'10px'} variant="h2" fontSize={'24px'}>
          New Arrival
        </Typography>
        <Typography py={'10px'} variant="h1" fontSize={'52px'} color={'#b8822f'}>
          Discover Our New Collection
        </Typography>
        <Typography py={'10px'} variant="h2" fontSize={'20px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </Typography>
        <Button
          sx={{ paddingY: '25px', paddingX: '72px', width: 'fit-content' }}
          variant="contained">
          <Typography variant="body1">BUY NOW</Typography>
        </Button>
      </Stack>
      {/* Browse The Range */}
      <Stack py={'30px'} px={'100px'} alignItems={'center'}>
        <Typography variant="h2" py={'10px'}>
          Browse The Range
        </Typography>
        <Typography py={'10px'} variant="h4" fontSize={'20px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Stack direction={'row'} spacing={3}>
          <Stack alignItems={'center'}>
            <Stack py={'10px'}>
              <img
                src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705684138/homeImage02_s8dlyy.png"
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
            </Stack>
            <Typography variant="h3">Living</Typography>
          </Stack>
          <Stack alignItems={'center'}>
            <Stack py={'10px'}>
              <img
                src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705684139/homeImage03_tuqack.png"
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
            </Stack>
            <Typography variant="h3">Living</Typography>
          </Stack>
          <Stack alignItems={'center'}>
            <Stack py={'10px'}>
              <img
                src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705684139/homeImage04_adombw.png"
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
            </Stack>
            <Typography variant="h3">Living</Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* Our Products */}
      <Stack alignItems={'center'} py={'40px'} px={'60px'}>
        <Typography variant="h2" py={'40px'}>
          Our Products
        </Typography>
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
        <Stack pt={'40px'} pb={'40px'}>
          <Button variant="outlined">Show More</Button>
        </Stack>
      </Stack>
      {/* Inspirations */}
      <Stack
        direction={'row'}
        width={'100%'}
        spacing={4}
        bgcolor={'#FFF3E3'}
        p={'44px 0 44px 100px'}>
        <Stack width={'30%'} spacing={2} justifyContent={'center'}>
          <Typography variant="h1">50+ Beautiful rooms inspiration</Typography>
          <Typography>
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </Typography>

          <Stack sx={{ width: 'fit-content' }}>
            <Button variant="contained">Explore More</Button>
          </Stack>
        </Stack>
        <Stack width={'30%'} sx={{ position: 'relative' }}>
          <Stack>
            <img
              src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705684144/homeImage13_hf45lp.png"
              alt=""
            />
          </Stack>
          <Stack>
            <Stack
              spacing={1}
              sx={{
                position: 'absolute',
                bottom: 30,
                left: 30,
                padding: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.72)'
              }}>
              <Typography variant="h5">01 - Bed Room</Typography>
              <Typography variant="h3">Inner Peace</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={'30%'}>
          <img
            src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705684144/homeImage14_kksi3y.png"
            alt=""
          />
        </Stack>
      </Stack>
      {/* Inspirations */}
      <Stack py={'20px'} px={'100px'} alignItems={'center'}>
        <Typography py={'10px'} variant="body2">
          #FuniroFurniture
        </Typography>
        <Typography variant="h2" py={'10px'}>
          Share your setup with
        </Typography>
        <Box sx={{ overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {productsData.map(({ id, thumbnail, title }) => (
              <ImageListItem key={id}>
                <img srcSet={thumbnail} src={thumbnail} alt={title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
      {/* Hihi */}
    </>
  );
};

export default HomePage;
