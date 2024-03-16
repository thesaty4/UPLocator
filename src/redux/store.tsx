import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './slices/authSlice';
import {ReduxKeys} from '../constants/storage-keys.enum';
import loaderReducer from './slices/loaderSlice';
import notificationReducer from './slices/notificationSlice';
import activePageReducer from './slices/pageSlice';

export const store = configureStore({
  reducer: {
    [ReduxKeys.auth]: loginReducer,
    [ReduxKeys.loader]: loaderReducer,
    [ReduxKeys.notification]: notificationReducer,
    [ReduxKeys.activePage]: activePageReducer,
  },
});
