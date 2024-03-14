import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuth, signIn} from '../../redux/slices/authSlice';
import {router} from './router';
import {authService} from '../../services/auth.service';
import {UserDetails} from '../../models/auth.model';
import {AuthKeys} from '../../constants/storage-keys.enum';
import AppLoader from '../../components/AppLoader/AppLoader';
import SignIn from '../../pages/signin/SignIn';

const AuthRedirect: React.FC = () => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(selectAuth);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getStorageData<UserDetails>(AuthKeys.authData)
      .then(res => {
        if (res?.token) {
          dispatch(signIn(res));
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        navigation.navigate(router.home.route);
      } else {
        navigation.navigate(router.validator.route);
      }
    }
  }, [isAuthenticated, navigation, loading]);

  if (loading) {
    return <AppLoader />;
  }

  return <SignIn />;
};

export default AuthRedirect;
