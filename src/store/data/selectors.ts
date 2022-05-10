import { RootState } from 'store/store';

const selectUsers = (state: RootState) => state.DATA.users;

const selectIsDataLoaded = (state: RootState) => state.DATA.isDataLoaded;

export { selectUsers, selectIsDataLoaded };
