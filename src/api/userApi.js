import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://65b00c342f26c3f2139c5535.mockapi.io/api/v1';

export const loginUser = createAsyncThunk('users/login', async ({ email, password }) => {
  try {
    const usersResponse = await axios.get(`${baseURL}/users`);
    const users = usersResponse.data;

    const matchedUser = users.find((user) => user.email === email && user.password === password);

    if (!matchedUser) {
      return {
        status: 400,
        message: 'Invalid email or password'
      };
    }

    return {
      status: 200,
      data: matchedUser
    };
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
});

export const registerUser = createAsyncThunk('users/register', async (newUser) => {
  try {
    const existingUsersResponse = await axios.get(`${baseURL}/users`);
    const existingUsers = existingUsersResponse.data;

    const isUserExists = existingUsers.some((user) => user.email === newUser.email);

    if (isUserExists) {
      throw new Error('User with this email already exists');
    }

    const response = await axios.post(`${baseURL}/users`, newUser);

    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
});
