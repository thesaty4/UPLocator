// loginSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthKeys, ReduxKeys} from '../../constants/storage-keys.enum';
import {UserDetails} from '../../models/auth.model';

export interface AuthState {
  isAuthenticated: boolean;
  authData?: UserDetails;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: ReduxKeys.auth,
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserDetails>) => {
      state.isAuthenticated = true;
      state.authData = {
        user: action.payload.user,
        token: action.payload.token,
      };

      // Store user information and token in local storage under a single key
      AsyncStorage.setItem(AuthKeys.authData, JSON.stringify(state.authData));
    },
    logout: state => {
      state.isAuthenticated = false;
      state.authData = undefined;

      // Clear user information and token from local storage during logout
      AsyncStorage.removeItem(AuthKeys.authData);
    },
  },
});

export const {login, logout} = authSlice.actions;

export const selectAuth = (state: {auth: AuthState}) => state.auth;

export default authSlice.reducer;
