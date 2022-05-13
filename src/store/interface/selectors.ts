import { RootState } from 'store/store';

const selectFilterType = (state: RootState) => state.INTERFACE.filterType;
const selectSortingType = (state: RootState) => state.INTERFACE.sortingType;

export { selectFilterType, selectSortingType };
