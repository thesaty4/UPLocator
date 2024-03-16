import React from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectAuth} from '../../redux/slices/authSlice';
import {appColors} from '../../constants/app.color';
import InputField from '../../shared/components/form/input/InputField';
import {useForm} from 'react-hook-form';
import {getStyles} from '../../shared/utils/modifiers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icons} from '../../assets/icons/all-icons';
import useAuth from '../../shared/hooks/auth.hook';

function Navbar() {
  const {authData} = useSelector(selectAuth);
  const {user} = authData ?? {};
  const {
    control,
    formState: {errors},
  } = useForm<{search: string}>();
  const {logOut} = useAuth();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Ok',
        onPress: logOut,
      },
    ]);
  };

  return (
    <>
      {true && (
        <View style={usersStyles.navbar}>
          <View {...getStyles(['flexRow'])}>
            <Image
              source={Icons.trainFront}
              style={[
                usersStyles.logo,
                usersStyles.navbarIcons,
                {width: 30, top: 2},
              ]}
            />
          </View>
          <View {...getStyles(['flex1'])}>
            <InputField
              name="search"
              control={control}
              errors={errors}
              rule={{}}
              type={'text'}
              placeholder="Search..."
              styleClass={['borderDir', 'borderWhite']}
              searchable
              onSearch={data => console.log(data)}
            />
          </View>

          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={Icons.logout}
              style={{tintColor: 'white', height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export default Navbar;

export const usersStyles = StyleSheet.create({
  mainWrapper: {},
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: appColors.primary,
  },
  logo: {
    height: 35,
  },
  navbarIcons: {
    tintColor: 'white',
  },
});
