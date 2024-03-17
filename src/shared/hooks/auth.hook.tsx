import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/slices/authSlice';
import {startLoading, stopLoading} from '../../redux/slices/loaderSlice';
import {authService} from '../../services/auth.service';
import {showNotification} from '../../redux/slices/notificationSlice';
import {setActivePage} from '../../redux/slices/pageSlice';
import {PAGES} from '../../types/pages.type';

const useAuth = (): {
  logOut: () => void;
  login: () => void;
} => {
  const dispatch = useDispatch();

  const logOut = (): void => {
    dispatch(startLoading());
    authService
      .logout()
      .then(res => {
        dispatch(signOut());
        dispatch(setActivePage(PAGES.Home));
      })
      .catch(err => {
        dispatch(
          showNotification({message: err.message.toString(), type: 'error'}),
        );
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  };

  const login = (): void => {};

  return {logOut, login};
};

export default useAuth;
