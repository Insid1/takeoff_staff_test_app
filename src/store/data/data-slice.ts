import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'type';
import { fetchUsers, removeUser } from './thunks';

interface IInitialState {
  users: IUser[],
  isDataLoaded: boolean,
  usersNumberTotal: number,
  usersNumberCurrent: number,
}

const initialState: IInitialState = {
  users: [],
  isDataLoaded: false,
  usersNumberTotal: 100,
  usersNumberCurrent: 10,
};

const dataSlice = createSlice({
  name: 'DATA',
  initialState,
  reducers: {
    loadUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setUsersNumberTotal(state, action: PayloadAction<number>) {
      state.usersNumberTotal = action.payload;
    },
    setUsersNumberCurrent(state, action: PayloadAction<number>) {
      state.usersNumberCurrent = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isDataLoaded = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<{ users: IUser[],
      totalUsersOnServer: number }>) => {
      state.isDataLoaded = true;
      state.usersNumberTotal = action.payload.totalUsersOnServer;
      state.users = action.payload.users;
    });
    builder.addCase(removeUser.fulfilled, (state, action: PayloadAction<boolean>) => {
      state.isDataLoaded = action.payload;
    });
    builder.addCase(removeUser.pending, (state) => {
      state.isDataLoaded = false;
    });
  },
});

export const { loadUsers, setUsersNumberTotal, setUsersNumberCurrent } = dataSlice.actions;
export default dataSlice.reducer;
