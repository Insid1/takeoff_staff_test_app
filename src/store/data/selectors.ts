import type { RootState } from 'store/store';

const selectUsers = (state: RootState) => state.DATA.users;

const selectIsDataLoaded = (state: RootState) => state.DATA.isDataLoaded;

const selectUsersNumberTotal = (state: RootState) => state.DATA.usersNumberTotal;

const selectUsersNumberCurrent = (state: RootState) => state.DATA.usersNumberCurrent;

export {
  selectUsers, selectIsDataLoaded, selectUsersNumberTotal, selectUsersNumberCurrent,
};
