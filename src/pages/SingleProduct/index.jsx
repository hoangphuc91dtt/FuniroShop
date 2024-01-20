import { Box, Button, Divider, Grid, Rating, Stack, Typography } from '@mui/material';
import Facebook from '@mui/icons-material/FacebookRounded';
import Linked from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import ProductCart from '../../components/ProductCart';
import { fetchData } from '../../data/api';
import React, { useEffect, useState } from 'react';

const SingleProcduct = () => {
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
    <Stack
      width={'90%'}
      ml={'5%'}
      alignItems={'center'}
      direction={'column'}
      divider={<Divider orientation="horizon" flexItem />}>
      <Stack mb={'20px'} direction={'row'} alignItems={'center'}>
        <Stack direction={'row'} width={'50%'}>
          <Stack direction={'column'} spacing={'10px'} wi>
            <img src="" alt="jjjj" width="60px" height="63.16px" />
            <img src="" alt="jjjj" width="60px" height="63.16px" />
            <img src="" alt="jjjj" width="60px" height="63.16px" />
            <img src="" alt="jjjj" width="60px" height="63.16px" />
          </Stack>
          <img src="" alt="" width={'350px'} height={'414px'} />
        </Stack>
        <Stack width={'50%'} spacing={'15px'} alignItems={'start'}>
          <Typography variant="h2">Asgaard sofa</Typography>
          <Typography variant="h3" color={'#9F9F9F'}>
            Rs. 250,000.00
          </Typography>
          <Stack
            direction={'row'}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" readOnly />
            <Typography variant="h5" color={'#9F9F9F'}>
              5 Customer Review
            </Typography>
          </Stack>
          <Box sx={{ width: '65%' }}>
            <Typography
              paddingRight={'10px'}
              variant="h5"
              fontSize={'13px'}
              fontStyle={'normal'}
              fontWeight={'400'}
              align="justify">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound.
            </Typography>
          </Box>
          <Typography variant="h5" color={'#9F9F9F'}>
            Size
          </Typography>
          <Stack direction={'row'}>
            <Button
              variant="contained"
              sx={{
                height: '30px',
                width: '30px',
                minWidth: '0',
                marginRight: '10px',
                backgroundColor: '#B88E2F'
              }}>
              <Typography variant="h5" color={'#F9F1E7'}>
                L
              </Typography>
            </Button>
            <Button
              sx={{
                height: '30px',
                width: '30px',
                minWidth: '0',
                marginRight: '10px',
                backgroundColor: '#F9F1E7'
              }}>
              <Typography variant="h5">XL</Typography>
            </Button>
            <Button
              sx={{ height: '30px', width: '30px', minWidth: '0', backgroundColor: '#F9F1E7' }}>
              <Typography variant="h5">XS</Typography>
            </Button>
          </Stack>
          <Typography variant="h5" color={'#9F9F9F'}>
            Color
          </Typography>
          <Stack direction={'row'}>
            <Button
              sx={{
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                minWidth: '0',
                marginRight: '10px',
                backgroundColor: '#816DFA'
              }}></Button>
            <Button
              sx={{
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                minWidth: '0',
                marginRight: '10px',
                backgroundColor: '#000'
              }}></Button>
            <Button
              sx={{
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                minWidth: '0',
                backgroundColor: '#B88E2F'
              }}>
              {' '}
            </Button>
          </Stack>
          <Stack
            direction="column"
            divider={<Divider orientation="horizon" flexItem />}
            spacing={'15px'}
            width={'100%'}>
            <Stack direction={'row'} spacing={'5%'} width={'100%'}>
              <Button variant="outlined">
                <Button>-</Button>
                <Typography>1</Typography>
                <Button>+</Button>
              </Button>

              <Button variant="outlined">Add to card</Button>
            </Stack>
            <Stack direction={'row'} spacing={'10px'}>
              <Box>
                <Stack direction={'column'} alignItems={'justify'} spacing={'5px'}>
                  <Typography align={'justify'} font-weight="400" color={'#9F9F9F'} variant="h5">
                    SKU
                  </Typography>
                  <Typography align={'justify'} font-weight="400" color={'#9F9F9F'} variant="h5">
                    Category
                  </Typography>
                  <Typography align={'justify'} font-weight="400" color={'#9F9F9F'} variant="h5">
                    Tags
                  </Typography>
                  <Typography align={'justify'} font-weight="400" color={'#9F9F9F'} variant="h5">
                    Share
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Stack direction={'column'} alignItems={'justify'} spacing={'5px'}>
                  <Typography align={'justify'} font-weight="400" color={'#9F9F9F'} variant="h5">
                    : SS001
                  </Typography>
                  <Typography align={'justify'} font-weight="400" color={'#9F9F9F'} variant="h5">
                    : Sofas
                  </Typography>
                  <Typography align={'justify'} font-weight="400" color={'#9F9F9F'} variant="h5">
                    : Sofa, Chair, Home, Shop
                  </Typography>

                  <Typography align={'justify'} font-weight="400" color={'#9F9F9F'} variant="h5">
                    :{' '}
                    <Button sx={{ minWidth: '0px', padding: '0px 0px', color: '#000', mr: '10px' }}>
                      <Facebook></Facebook>
                    </Button>
                    <Button sx={{ minWidth: '0px', padding: '0px 0px', color: '#000', mr: '10px' }}>
                      <Linked></Linked>
                    </Button>
                    <Button sx={{ minWidth: '0px', padding: '0px 0px', color: '#000' }}>
                      <Twitter></Twitter>
                    </Button>
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack mt={'20px'} mb={'20px'} spacing={'20px'} alignItems={'center'}>
        <Box>
          <Stack direction={'row'} spacing={'100px'}>
            <Button variant="text" sx={{ color: '#000', textTransform: 'none' }}>
              <Typography fontSize={'24px'} fontWeight={'500'}>
                Decription
              </Typography>
            </Button>
            <Button variant="text" sx={{ color: '#9F9F9F', textTransform: 'none' }}>
              <Typography fontSize={'24px'} fontWeight={'400'}>
                Additional Information
              </Typography>
            </Button>
            <Button variant="text" sx={{ color: '#9F9F9F', textTransform: 'none' }}>
              <Typography fontSize={'24px'} fontWeight={'400'}>
                Review
              </Typography>
            </Button>
          </Stack>
        </Box>

        <Stack spacing={'20px'} alignItems={'center'}>
          <Typography
            sx={{ width: '71.25%' }}
            fontSize={'16px'}
            align="justify"
            fontWeight={'400'}
            color={'#9F9F9F'}>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
            speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
            the show on the road.
          </Typography>
          <Typography
            sx={{ width: '71.25%' }}
            fontSize={'16px'}
            align="justify"
            fontWeight={'400'}
            color={'#9F9F9F'}>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
            engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is
            a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
            and extended highs for a sound that is both articulate and pronounced. The analogue
            knobs allow you to fine tune the controls to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.
          </Typography>
        </Stack>
      </Stack>
      <Stack mt={'20px'} mb={'20px'} direction={'row'} spacing={'20px'} alignItems={'center'}>
        <img src="" alt="" width={'605px'} height={'348px'} />
        <img src="" alt="" width={'605px'} height={'348px'} />
      </Stack>
      <Stack alignItems={'center'} mt={'30px'}>
        <Typography variant="h3">Our Products</Typography>
        <Grid container spacing={3}>
          {productsData.map(
            ({ id, thumbnail, title, description, newPrice, oddPrice, discount }) => (
              <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                <ProductCart
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
    </Stack>
  );
};

export default SingleProcduct;
