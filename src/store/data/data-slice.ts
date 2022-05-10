import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'type';
import { fetchUsers } from './thunks';
// import { fetchUsers } from './thunks';

interface IInitialState {
  users: IUser[],
  isDataLoaded: boolean,
}

const initialState: IInitialState = {
  users: [],
  isDataLoaded: false,
};

const dataSlice = createSlice({
  name: 'DATA',
  initialState,
  reducers: {
    loadUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isDataLoaded = false;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.isDataLoaded = true;
      state.users = action.payload;
    });
  },
});

export const { loadUsers } = dataSlice.actions;
export default dataSlice.reducer;
