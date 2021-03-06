import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { dropToken, saveToken } from 'api/token';
import { ApiRoutes, ResponseCode } from 'enums';
import { IRegisterInputs } from 'type';

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

const signUp = createAsyncThunk(
  'user/signup',
  async ({ email, password }: IRegisterInputs) => {
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

const signIn = createAsyncThunk(
  'user/signin',
  async ({ email, password }: IRegisterInputs) => {
    const response = await api.post(ApiRoutes.Login, { email, password });
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

export { signUp, signIn, checkAuth };
