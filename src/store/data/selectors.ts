import { RootState } from 'store/store';

const selectUsers = (state: RootState) => state.DATA.users;

// eslint-disable-next-line import/prefer-default-export
export { selectUsers };
