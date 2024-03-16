import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PAGES} from '../../types/pages.type';
import {ReduxKeys} from '../../constants/storage-keys.enum';

export interface ActivePageState<sType extends PAGES = PAGES> {
  activePage: sType;
}

const initialState: ActivePageState = {
  activePage: PAGES.Home, // Set the default active Page
};

export const activePageSlice = createSlice({
  name: ReduxKeys.activePage,
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<PAGES>) => {
      state.activePage = action.payload;
    },
  },
});

export const {setActivePage} = activePageSlice.actions;

export const selectActivePage = (state: {activePage: ActivePageState}) =>
  state[ReduxKeys.activePage];

export default activePageSlice.reducer;
