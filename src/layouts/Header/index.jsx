import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  Button
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useLocation } from 'react-router-dom';
import Furniro from '../../assets/Furniro.png';
import { SCREEN_URL } from '../../constants/screenUrls';
import { APP_COLORS } from '../../themes';
import ShoppingCart from '../../components/ShoppingCart';

const pageRoutes = [SCREEN_URL.HOME, SCREEN_URL.SHOP, SCREEN_URL.BLOGPAGE, SCREEN_URL.CONTACTPAGE];

const Header = () => {
  const { pathname } = useLocation();

  const [value, setValue] = useState(pageRoutes.indexOf(pathname) || 0);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <Stack
      height={100}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p="30px 54px">
      <Stack spacing={1} direction={'row'}>
        <img
          src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705686547/House_Logos_qmtfkd.png"
          alt="homeLogo"
        />
        <img src={Furniro} alt="Furniro" />
      </Stack>
      <Stack justifyContent={'center'}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="transparent"
          sx={{
            '& .MuiTabs-flexContainer': { gap: 1 },
            '.MuiButtonBase-root.Mui-selected': {
              fontWeight: 900,
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              color: APP_COLORS.black.main
            }
          }}>
          <Tab label="Home" component={Link} to={SCREEN_URL.HOME} />
          <Tab label="Shop" component={Link} to={SCREEN_URL.SHOP} />
          <Tab label="Blog" component={Link} to={SCREEN_URL.BLOGPAGE} />
          <Tab label="Contact" component={Link} to={SCREEN_URL.CONTACTPAGE} />
        </Tabs>
      </Stack>
      <Stack direction={'row'} gap={3}>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleOpenCart}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Stack>
      <ShoppingCart isOpen={isCartOpen} onClose={handleCloseCart} />
    </Stack>
  );
};

export default Header;
