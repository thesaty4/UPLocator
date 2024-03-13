import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/slices/authSlice';

const useAuth = (): {
  logOut: () => void;
  login: () => void;
} => {
  const dispatch = useDispatch();

  const logOut = (): void => {
    dispatch(signOut());
  };

  const login = (): void => {};

  return {logOut, login};
};

export default useAuth;
