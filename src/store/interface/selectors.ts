import { RootState } from 'store/store';

const selectFilterType = (state: RootState) => state.INTERFACE.sortingType;
const selectSortingType = (state: RootState) => state.INTERFACE.filterType;

export { selectFilterType, selectSortingType };
