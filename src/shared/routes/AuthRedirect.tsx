import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuth, signIn} from '../../redux/slices/authSlice';
import {router} from './router';
import {authService} from '../../services/auth.service';
import {UserDetails} from '../../models/auth.model';
import {AuthKeys} from '../../constants/storage-keys.enum';
import AppLoader from '../../components/AppLoader/AppLoader';

const AuthRedirect: React.FC = () => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(selectAuth);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getStorageData<UserDetails>(AuthKeys.authData)
      .then(res => {
        if (res?.token) dispatch(signIn(res));
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [dispatch, loading]);

  useEffect(() => {
    if (!loading) {
      navigation.navigate(
        isAuthenticated ? router.home.route : router.signIn.route,
      );
    }
  }, [isAuthenticated, navigation, loading]);

  return <AppLoader />;
};

export default AuthRedirect;
