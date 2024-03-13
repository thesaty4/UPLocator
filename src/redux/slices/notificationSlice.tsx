// notificationSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ReduxKeys} from '../../constants/storage-keys.enum';

interface NotificationState {
  message: string | null;
  type: 'success' | 'error' | null;
}

const initialState: NotificationState = {
  message: null,
  type: null,
};

export const notificationSlice = createSlice({
  name: ReduxKeys.notification,
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{message: string; type: 'success' | 'error'}>,
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    hideNotification: state => {
      state.message = null;
      state.type = null;
    },
  },
});

export const {showNotification, hideNotification} = notificationSlice.actions;

export const selectNotification = (state: {
  [ReduxKeys.notification]: NotificationState;
}) => state[ReduxKeys.notification];

export default notificationSlice.reducer;
