// snackbarSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MessageType} from '../../types/snackbar';

interface SnackbarState {
  message: string | null;
  type: MessageType;
}

const initialState: SnackbarState = {
  message: null,
  type: 'success', // Default type is success
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showMessage: (
      state,
      action: PayloadAction<{
        message: string;
        type?: MessageType;
      }>,
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type || 'success';
    },
    hideMessage: state => {
      state.message = null;
    },
  },
});

export const {showMessage, hideMessage} = snackbarSlice.actions;

export const selectSnackbar = (state: {snackbar: SnackbarState}) =>
  state.snackbar;

export default snackbarSlice.reducer;
