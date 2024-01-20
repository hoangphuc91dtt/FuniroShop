import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { Button, Card, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { SCREEN_URL } from '../../constants/screenUrls';
import { APP_COLORS } from '../../themes';
import { Link } from 'react-router-dom';

const ProductCard = ({
  id,
  thumbnail,
  title,
  description,
  newPrice,
  oddPrice,
  handleAddToCart
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        position: 'relative',
        bgcolor: '#F4F5F7',

        '.modal': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          transform: 'translate(-50%, -500%)',
          transition: '.3s',
          position: 'absolute',
          top: '50%',
          left: '50%'
        },

        '&:hover': {
          opacity: 0.82,
          '.modal': {
            transform: 'translate(-50%, -100%)'
          }
        }
      }}>
      <CardMedia component="img" height="" image={thumbnail} alt="Product" />
      <CardContent component={Stack} spacing={2}>
        <Typography gutterBottom variant="h2" fontSize={'24px'} component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="h5" fontWeight={700} color="text.secondary">
            Rp {newPrice}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
            Rp {oddPrice}
          </Typography>
        </Stack>
      </CardContent>
      <div className="modal">
        <Stack alignItems={'center'}>
          <Button
            variant="contained"
            sx={{ bgcolor: '#FFF', color: APP_COLORS.primary.main, width: 'fit-content' }}
            onClick={() => handleAddToCart(id, thumbnail, title, oddPrice)}>
            Add to cart
          </Button>
          <Stack direction={'row'} spacing={1} pt={'10px'} sx={{ color: '#FFF' }}>
            <Stack direction={'row'} alignItems={'center'}>
              <IconButton color="inherit" component={Link} to={SCREEN_URL.SINGLE_PRODUCT}>
                <ReorderIcon></ReorderIcon>
              </IconButton>
              More
            </Stack>
            <Stack direction={'row'} alignItems={'center'} color={'white'}>
              <IconButton color="inherit" component={Link} to={SCREEN_URL.PRODUCT}>
                <CompareArrowsIcon></CompareArrowsIcon>
              </IconButton>
              Compare
            </Stack>
            <Stack direction={'row'} alignItems={'center'}>
              <IconButton color="inherit">
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </IconButton>
              Like
            </Stack>
          </Stack>
        </Stack>
      </div>
    </Card>
  );
};

export default ProductCard;