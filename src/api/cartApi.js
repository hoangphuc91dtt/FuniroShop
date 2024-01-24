import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from './axiosClient';

export const findAllCart = createAsyncThunk('cart/findAllCart', async () => {
  try {
    const response = await axiosClient.get('/cart');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

export const findDeleteCartById = createAsyncThunk('cart/findDeleteCartById', async (cartId) => {
  try {
    const apiUrl = `/cart/${cartId}`;
    const response = await axiosClient.delete(apiUrl);

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
});

export const addToCart = createAsyncThunk('cart/addToCart', async (productData) => {
  try {
    const response = await axiosClient.post('/cart', productData);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
});
