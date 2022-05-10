import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { ApiRoutes } from 'enums';

const fetchUsers = createAsyncThunk(
  'data/users',
  async () => {
    const response = await api.get(ApiRoutes.Users);
    return response.data;
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchUsers };
