import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType, SortingType } from 'enums';

interface IInitialState {
  sortingType: SortingType,
  filterType: FilterType,
}

const initialState: IInitialState = {
  sortingType: SortingType.default,
  filterType: FilterType.None,
};

const interfaceSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSortingType(state, action: PayloadAction<SortingType>) {
      state.sortingType = action.payload;
    },
    setFilterType(state, action: PayloadAction<FilterType>) {
      state.filterType = action.payload;
    },
  },
});

export const { setFilterType, setSortingType } = interfaceSlice.actions;
export default interfaceSlice.reducer;
