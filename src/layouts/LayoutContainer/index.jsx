import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { SCREEN_URL } from '../../constants/screenUrls';
import Banner from '../Banner';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { findAllProduct } from '../../api/productApi';
import { findAllCart } from '../../api/cartApi';

const LayoutContainer = ({ component: Component, isHeader, isFooter, isBanner, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  document.title = title + ' • Funiro';

  useEffect(() => {
    if (!token) return navigate(SCREEN_URL.LOGIN);
    if (token) return navigate(SCREEN_URL.HOME);
  }, []);

  useEffect(() => {
    if (!token) return;

    dispatch(findAllProduct());
    dispatch(findAllCart());
  }, []);

  return (
    <div>
      {isHeader && <Header />}
      <Box mt={'100px'}>
        {isBanner && <Banner title={title} />}
        <Component />
      </Box>
      {isFooter && <Footer />}
    </div>
  );
};

export default LayoutContainer;
