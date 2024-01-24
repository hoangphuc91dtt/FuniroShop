import { createSlice } from '@reduxjs/toolkit';
import { addToCart, findAllCart, findDeleteCartById } from '../../api/cartApi';

const initialState = {
  cart: [],
  cartCompare: [{}, {}, {}]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    getCompareCart: (state, { payload }) => {
      const compareLocal = JSON.parse(localStorage.getItem('cart_compare')) || [{}, {}, {}];

      state.cartCompare = compareLocal;
    },
    addCompareCart: (state, { payload }) => {
      const emptyIndex = state.cartCompare.findIndex((item) => Object.keys(item).length === 0);
      const index = state.cartCompare.findIndex((item) => item.id === payload.id);

      if (emptyIndex !== -1 && index === -1) {
        state.cartCompare[emptyIndex] = payload;
        localStorage.setItem('cart_compare', JSON.stringify(state.cartCompare));
      }
    },
    removeCartCompare: (state, { payload }) => {
      const index = state.cartCompare.findIndex((item) => item.id === payload);
      console.log({ index });
      if (index !== -1) {
        state.cartCompare.splice(index, 1, {});
        localStorage.setItem('cart_compare', JSON.stringify(state.cartCompare));
      }
    },
    removeCartAllCompare: (state) => {
      state.cartCompare = [{}, {}, {}];
      localStorage.setItem('cart_compare', JSON.stringify(state.cartCompare));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAllCart.fulfilled, (state, { payload }) => {
        state.cart = payload;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.cart = [...state.cart, payload];
      })
      .addCase(findDeleteCartById.fulfilled, (state, { payload }) => {
        const index = state.cart.findIndex((item) => item.id === payload.id);

        state.cart.splice(index, 1);
      });
  }
});

const { actions, reducer } = cartSlice;
export const { getCompareCart, addCompareCart, removeCartCompare, removeCartAllCompare } = actions;
export default reducer;
