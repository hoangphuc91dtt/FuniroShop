import React, { useEffect, useState } from 'react';
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
  Button,
  Badge
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Furniro from '../../assets/Furniro.png';
import { SCREEN_URL } from '../../constants/screenUrls';
import { APP_COLORS } from '../../themes';
import ShoppingCart from '../../components/ShoppingCart';
import { useSelector } from 'react-redux';

const pageRoutes = [
  SCREEN_URL.HOME,
  SCREEN_URL.SHOP,
  SCREEN_URL.BLOG_PAGE,
  SCREEN_URL.CONTACT_PAGE
];

const Header = () => {
  const { pathname } = useLocation();

  const [value, setValue] = useState(pageRoutes.indexOf(pathname) || 0);
  const [isCartOpen, setCartOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const navigator = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };
  const handelLogout = () => {
    localStorage.removeItem('token');
    navigator(SCREEN_URL.LOGIN);
  };

  return (
    <Stack
      height={100}
      position={'fixed'}
      zIndex={999}
      top={0}
      right={0}
      left={0}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p="30px 54px"
      className={`${scrollPosition ? 'fixed' : ''}`}
      sx={{
        transition: '.5s',

        '&.fixed': {
          height: 120,
          padding: '30px 104px',
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: blur('10px'),
          boxShadow: '0 1px 5px rgba(0,0,0,0.1)'
        }
      }}>
      <Link spacing={1} direction={'row'} component={Link} to={SCREEN_URL.HOME}>
        <img
          src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705686547/House_Logos_qmtfkd.png"
          alt="homeLogo"
        />
        <img src={Furniro} alt="Furniro" />
      </Link>
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
          <Tab label="Blog" component={Link} to={SCREEN_URL.BLOG_PAGE} />
          <Tab label="Contact" component={Link} to={SCREEN_URL.CONTACT_PAGE} />
        </Tabs>
      </Stack>
      <Stack direction={'row'} gap={3}>
        <IconButton onClick={handelLogout}>
          <PersonRemoveIcon />
        </IconButton>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleOpenCart}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Stack>
      <ShoppingCart isOpen={isCartOpen} onClose={handleCloseCart} />
    </Stack>
  );
};

export default Header;
