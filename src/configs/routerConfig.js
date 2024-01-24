import { SCREEN_URL } from '../constants/screenUrls';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ShopPage from '../pages/ShopPage';
import ErrorPage from '../pages/ErrorPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import SingleProduct from '../pages/SingleProduct';
import CheckOut from '../pages/CheckOut/index ';
import RegisterPage from '../pages/RegisterPage';

export const routerConfig = [
  {
    path: SCREEN_URL.HOME,
    component: HomePage,
    isHeader: true,
    isFooter: true,
    isBanner: false,
    title: 'Home'
  },
  {
    path: SCREEN_URL.LOGIN,
    component: LoginPage,
    isHeader: false,
    isFooter: false,
    isBanner: false,
    title: 'Login'
  },
  {
    path: SCREEN_URL.REGISTER,
    component: RegisterPage,
    isHeader: false,
    isFooter: false,
    isBanner: false,
    title: 'Register'
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
  },
  {
    path: SCREEN_URL.BLOG_PAGE,
    component: BlogPage,
    isHeader: true,
    isFooter: true,
    isBanner: true,
    title: 'Blog'
  },
  {
    path: SCREEN_URL.CONTACT_PAGE,
    component: ContactPage,
    isHeader: true,
    isFooter: true,
    isBanner: true,
    title: 'Contact'
  },
  {
    path: SCREEN_URL.CHECKOUT,
    component: CheckOut,
    isHeader: true,
    isFooter: true,
    isBanner: true,
    title: 'Check Out'
  },
  {
    path: SCREEN_URL.SINGLE_PRODUCT,
    component: SingleProduct,
    isHeader: true,
    isFooter: true,
    isBanner: true,
    title: 'Single Product'
  },
  {
    path: SCREEN_URL.PRODUCT,
    component: ProductPage,
    isHeader: true,
    isFooter: true,
    isBanner: true,
    title: 'Product'
  },
  {
    path: SCREEN_URL.CART,
    component: CartPage,
    isHeader: true,
    isFooter: true,
    isBanner: true,
    title: 'Cart'
  }
];
