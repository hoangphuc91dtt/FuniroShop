import { createSlice } from '@reduxjs/toolkit';
import { findAllProduct, findProductById } from '../../api/productApi';

const initialState = {
  products: [],
  productDetail: {}
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllProduct.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(findProductById.fulfilled, (state, { payload }) => {
        state.productDetail = payload;
      });
  }
});

const { actions, reducer } = productSlice;
export default reducer;
