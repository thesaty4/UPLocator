// dialogSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface DialogState {
  label: string;
  isOpened: boolean;
  onDone?: (data: string) => void;
  onClose?: () => void;
}

const initialState: DialogState = {
  label: 'Enter Something :',
  isOpened: false,
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (
      state,
      action: PayloadAction<
        Pick<DialogState, 'label'> & {
          onDone?: (data: string) => void;
          onClose?: () => void;
        }
      >,
    ) => {
      state.isOpened = true;
      state.label = action.payload?.label ?? 'Enter Something';
      state.onDone = action.payload.onDone;
      state.onClose = action.payload.onClose;
    },
    closeDialog: state => {
      state.label = 'Enter Something :';
      state.isOpened = false;
      state.isOpened = false;
      state.onDone = undefined;
      state.onClose = undefined;
    },
    // Add other actions as needed
  },
  extraReducers: builder => {
    builder.addCase(dialogSlice.actions.openDialog, (state, action) => {
      // If onDone is a function, set it to undefined (non-serializable)
      if (
        action.payload?.onDone &&
        typeof action.payload.onDone === 'function'
      ) {
        state.onDone = undefined;
      }
    });
  },
});

export const {openDialog, closeDialog} = dialogSlice.actions;

export const selectDialog = (state: {dialog: DialogState}) => state.dialog;

export default dialogSlice.reducer;
