import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../api/userAPI';

const initialState = {
  users: [],
  userCurrent: {},
  message: '',
  isLoading: false
};

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.status === 400) {
          state.message = payload.message;
        } else {
          state.message = '';
          state.userCurrent = payload.data;
          localStorage.setItem('token', payload.data.token);
        }
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.usersDetail = payload;
      });
  }
});

const { actions, reducer } = userSlice;
export default reducer;
