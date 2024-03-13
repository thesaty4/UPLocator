import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ReduxKeys} from '../../constants/storage-keys.enum';

interface LoaderState {
  loading: boolean;
  text?: string; // Optional text property
}

const initialState: LoaderState = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: ReduxKeys.loader,
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<string | undefined>) => {
      state.loading = true;
      state.text = action.payload; // Set the text property
    },
    stopLoading: state => {
      state.loading = false;
      state.text = undefined; // Clear the text property when stopping loading
    },
  },
});

export const {startLoading, stopLoading} = loaderSlice.actions;

export const selectLoading = (state: {[ReduxKeys.loader]: LoaderState}) =>
  state[ReduxKeys.loader];

export default loaderSlice.reducer;
