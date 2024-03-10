// notificationSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NotificationState {
  message: string | null;
  type: 'success' | 'error' | null;
}

const initialState: NotificationState = {
  message: null,
  type: null,
};

export const notificationSlice = createSlice({
  name: 'notification',
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

export const selectNotification = (state: {notification: NotificationState}) =>
  state.notification;

export default notificationSlice.reducer;
