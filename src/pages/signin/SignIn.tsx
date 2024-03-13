import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {appColors} from '../../constants/app.color';
import {getStyles} from '../../shared/utils/modifiers';
import {View} from 'react-native';
import Header from '../../shared/view/header/Header';
import InputField from '../../shared/components/form/input/InputField';
import Button from '../../shared/components/form/button/Button';
import {Icons} from '../../assets/icons/all-icons';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {startLoading, stopLoading} from '../../redux/slices/loaderSlice';
import {authService} from '../../services/auth.service';
import {showNotification} from '../../redux/slices/notificationSlice';
import {UserDetails} from '../../models/auth.model';
import {signIn} from '../../redux/slices/authSlice';

export type SignInProps = {
  email: string;
  password: string;
};

const SignIn = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInProps>();

  const onSubmit = (data: SignInProps) => {
    dispatch(startLoading());
    authService
      .login(data)
      .then(res => {
        const authData = new UserDetails(res.data);
        dispatch(signIn(authData));
      })
      .catch(errors => {
        dispatch(showNotification({message: errors.toString(), type: 'error'}));
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  };

  return (
    <LinearGradient
      colors={[appColors.primary, appColors.secondary]}
      {...getStyles(['flex1', 'alignCenter', 'justifyCenter'])}>
      <View>
        <Header heading=" Sign In" />
        <InputField
          name="email"
          type="email"
          placeholder="Enter Email"
          rule={{required: true}}
          control={control}
          errors={errors}
        />

        <InputField
          name="password"
          type="password"
          placeholder="Enter Password"
          rule={{required: true}}
          control={control}
          errors={errors}
        />

        <Button
          label="Sign In"
          icon={Icons.next}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </LinearGradient>
  );
};

export default SignIn;
