import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { dropToken, saveToken } from 'api/token';
import { ApiRoutes, ResponseCode } from 'enums';

interface IPostSignIn {
  email: string,
  password: string,
}

const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const response = await api.get(ApiRoutes.Users);

      if (response.status === ResponseCode.Unauthorized) {
        localStorage.removeItem('email');
        dropToken();
      }

      return {
        authStatus: response.status !== ResponseCode.Unauthorized,
        isAuthDataLoaded: true,
      };
    } catch (err) {
      // throw error popup server problems! in component!
      return { authStatus: false, isAuthDataLoaded: false };
    }
  },
);

const signIn = createAsyncThunk(
  'user/signIn',
  async ({ email, password }: IPostSignIn) => {
    const response = await api.post(ApiRoutes.Register, { email, password });
    const userEmail = response.data.user.email;
    // take email and token to local storage
    const token = response.data.accessToken;
    localStorage.setItem('email', userEmail);
    saveToken(token);
    return {
      authStatus: true,
      isAuthDataLoaded: true,
      email,
    };
  },
);

export { signIn, checkAuth };
