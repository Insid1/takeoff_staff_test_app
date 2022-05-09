import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuth } from './thunk';

interface IInitialState {
  isAuth: boolean,
  email:string,
  isAuthDataLoaded: boolean,
}

const initialState: IInitialState = {
  isAuth: false,
  email: '',
  isAuthDataLoaded: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.isAuth = action.payload.authStatus;
      state.isAuthDataLoaded = action.payload.isAuthDataLoaded;
    });
  },
});

export const { setAuth, setEmail } = userSlice.actions;
export default userSlice.reducer;
