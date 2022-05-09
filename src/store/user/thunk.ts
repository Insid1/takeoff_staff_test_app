import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { saveToken } from 'api/token';
import { ApiRoutes } from 'const';

interface IPostSignIn {
  email: string,
  password: string,
}

const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const response = await api.get(ApiRoutes.Users);
      return { authStatus: Boolean(response), isAuthDataLoaded: true };
    } catch (err) {
      // throw error popup server problems!
      return { authStatus: false, isAuthDataLoaded: false };
    }
  },
);

const signIn = createAsyncThunk(
  'user/signIn',
  async ({ email, password }: IPostSignIn) => {
    const response = await api.post(ApiRoutes.Register, { email, password });
    const userEmail = response.data.user.email;
    const token = response.data.accessToken;
    localStorage.setItem('email', userEmail);
    saveToken(token);
    return email;
  },
);

export { signIn, checkAuth };
