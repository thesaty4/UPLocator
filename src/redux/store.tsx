import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './slices/authSlice';
import {ReduxKeys} from '../constants/storage-keys.enum';

export const store = configureStore({
  reducer: {
    [ReduxKeys.auth]: loginReducer,
  },
});
