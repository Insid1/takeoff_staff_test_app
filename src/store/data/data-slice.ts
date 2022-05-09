import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'type';

interface IInitialState {
  users: IUser[]
}

const initialState: IInitialState = {
  users: [],
};

const dataSlice = createSlice({
  name: 'DATA',
  initialState,
  reducers: {
    loadUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
  },
});

export const { loadUsers } = dataSlice.actions;
export default dataSlice.reducer;
