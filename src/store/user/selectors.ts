import { RootState } from 'store/store';

const selectIsAuth = (state: RootState) => state.USER.isAuth;
const selectEmail = (state: RootState) => state.USER.email;
const selectIsAuthDataLoaded = (state: RootState) => state.USER.isAuthDataLoaded;

export { selectIsAuth, selectEmail, selectIsAuthDataLoaded };
