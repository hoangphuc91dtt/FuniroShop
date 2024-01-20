import { SCREEN_URL } from '../constants/screenUrls';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ShopPage from '../pages/ShopPage';
import ErrorPage from '../pages/ErrorPage';

export const routerConfig = [
  {
    path: SCREEN_URL.HOME,
    component: HomePage,
    isHeader: true,
    isFooter: true,
    isBanner: true,
    title: 'Home'
  },
  {
    path: SCREEN_URL.LOGIN,
    component: LoginPage,
    isHeader: false,
    isFooter: false,
    isBanner: true,
    title: 'Login'
  },
  {
    path: SCREEN_URL.SHOP,
    component: ShopPage,
    isHeader: true,
    isFooter: true,
    isBanner: true,
    title: 'Shop'
  },
  {
    path: SCREEN_URL.ERRORS,
    component: ErrorPage,
    isHeader: false,
    isFooter: false,
    isBanner: true,
    title: '404 Not Found'
  }
];
