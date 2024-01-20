import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { SCREEN_URL } from '../../constants/screenUrls';
import Banner from '../Banner';

const LayoutContainer = ({ component: Component, isHeader, isFooter, isBanner, title }) => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'));

  document.title = title + ' • Funiro';

  useEffect(() => {
    if (!token) return navigate(SCREEN_URL.LOGIN);
  }, []);

  return (
    <div>
      {isHeader && <Header />}
      {isBanner && <Banner title={title} />}
      <Component />
      {isFooter && <Footer />}
    </div>
  );
};

export default LayoutContainer;
