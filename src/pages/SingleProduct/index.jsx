import { Box, Button, Divider, Grid, Rating, Stack, Typography } from '@mui/material';
import Facebook from '@mui/icons-material/FacebookRounded';
import Linked from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import ProductCard from '../../components/ProductCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllProduct, findProductById } from '../../api/productApi';
import { useParams } from 'react-router-dom';
import { addCompareCart } from '../../redux/slice/cartSlice';
import { addToCart } from '../../api/cartApi';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products: productsData, productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(findAllProduct());
  }, []);

  useEffect(() => {
    dispatch(findProductById(productId));
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
  };
  return (
    <Stack ml={'5%'} alignItems={'center'} direction={'column'}>
      <Stack py={'40px'} direction={'row'} alignItems={'center'} justifyContent={'space-around'}>
        <Stack direction={'column'} spacing={'10px'} wi>
          <Stack bgcolor={'#F9F1E7'} borderRadius={'10px'} overflow={'hidden'}>
            <img
              src={productDetail?.imageList ? productDetail?.imageList[1] : ''}
              alt="jjjj"
              width="60px"
              height="64px"
            />
          </Stack>
          <Stack bgcolor={'#F9F1E7'} borderRadius={'10px'} overflow={'hidden'}>
            <img
              src={productDetail?.imageList ? productDetail?.imageList[2] : ''}
              alt="jjjj"
              width="60px"
              height="64px"
            />
          </Stack>
          <Stack bgcolor={'#F9F1E7'} borderRadius={'10px'} overflow={'hidden'}>
            <img
              src={productDetail?.imageList ? productDetail?.imageList[3] : ''}
              alt="jjjj"
              width="60px"
              height="64px"
            />
          </Stack>
          <Stack bgcolor={'#F9F1E7'} borderRadius={'10px'} overflow={'hidden'}>
            <img
              src={productDetail?.imageList ? productDetail?.imageList[4] : ''}
              alt="jjjj"
              width="60px"
              height="64px"
            />
          </Stack>
        </Stack>
        <Stack
          bgcolor={'#F9F1E7'}
          borderRadius={'10px'}
          width={500}
          height={350}
          overflow={'hidden'}>
          <img
            src={productDetail?.thumbnail}
            alt=""
            width={'100%'}
            height={'100%'}
            style={{ objectFit: 'cover' }}
          />
        </Stack>
        <Stack width={'50%'} spacing={'15px'} alignItems={'start'}>
          <Typography variant="h2">{productDetail?.title}</Typography>
          <Typography variant="h3" color={'#9F9F9F'}>
            Rs.{' '}
            {productDetail?.newPrice
              ? productDetail?.newPrice.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND'
                })
              : 0}
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

              <Button variant="outlined" onClick={handleAddToCart}>
                Add to card
              </Button>
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
      <Stack mt={'20px'} mb={'20px'} direction={'row'} spacing={'20px'}>
        <Stack bgcolor={'#F9F1E7'} borderRadius={'10px'} width={'fix-content'}>
          <img
            src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705683975/SingleImage07_k1qhae.png"
            alt=""
          />
        </Stack>
        <Stack bgcolor={'#F9F1E7'} borderRadius={'10px'} width="fit-content">
          <img
            src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705683975/SingleImage06_cwxreq.png"
            alt=""
          />
        </Stack>
      </Stack>
      <Stack alignItems={'center'} mt={'30px'}>
        <Typography variant="h3">Our Products</Typography>
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
    </Stack>
  );
};

export default SingleProduct;
