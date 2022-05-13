import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import { ApiRoutes } from 'enums';
import type { AppDispatch, RootState } from 'store/store';
import { IUser } from 'type';

const fetchUsers = createAsyncThunk<{
  users: IUser[],
  totalUsersOnServer: number
}, undefined, {
  // Optional fields for defining thunkApi field types
  dispatch: AppDispatch
  state: RootState
}>(
  'data/users',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { usersNumberCurrent } = state.DATA;
    const { sortingType } = state.INTERFACE;

    const response = await api.get(
      `${ApiRoutes.Users}?_sort=${sortingType}&_limit=${usersNumberCurrent}`,
    );
    const totalUsersOnServer = +response.headers['x-total-count'];

    return {
      users: response.data,
      totalUsersOnServer,
    };
  },
);

const removeUser = createAsyncThunk(
  'data/user',
  async (id: number, { dispatch }) => {
    const response = await api.delete(`${ApiRoutes.Users}/${id}`);
    return response.statusText === 'OK';
  },
);

export { fetchUsers, removeUser };
