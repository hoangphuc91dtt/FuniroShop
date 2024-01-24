import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from './axiosClient';

// Fetch information card
export const findAllProduct = createAsyncThunk('product/findAllProduct', async () => {
  try {
    const response = await axiosClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

export const findProductById = createAsyncThunk('product/findProductById', async (productId) => {
  try {
    const response = await axiosClient.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});
