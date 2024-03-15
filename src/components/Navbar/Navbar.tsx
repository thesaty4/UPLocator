import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {images} from '../../assets/images/all-images';
import {toTitleCase} from '../../shared/utils/formator';
import {useSelector} from 'react-redux';
import {selectAuth} from '../../redux/slices/authSlice';
import {appColors} from '../../constants/app.color';
import InputField from '../../shared/components/form/input/InputField';
import {useForm} from 'react-hook-form';
import {getStyles} from '../../shared/utils/modifiers';

function Navbar() {
  const {authData} = useSelector(selectAuth);
  const {user} = authData ?? {};
  const {
    control,
    formState: {errors},
  } = useForm<{search: string}>();

  return (
    <>
      {true && (
        <View style={usersStyles.navbar}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Image
              source={images.logo}
              style={[
                usersStyles.logo,
                {width: 50, top: 2},
                usersStyles.navbarIcons,
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

          <View style={[usersStyles.navbarActions, {gap: 5}]}>
            <View style={styles.textInfo}>
              <Text style={styles.name}>
                {user?.name?.length && user?.name?.length > 5
                  ? toTitleCase(user?.name ?? '')
                      .substring(0, 5)
                      .concat('...')
                  : toTitleCase(user?.name ?? '')}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

export default Navbar;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  textInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  role: {
    fontSize: 12,
    color: 'white',
    letterSpacing: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 12,
    fontWeight: '900',
    color: appColors.white,
    letterSpacing: 1,
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
  },
});

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
    height: 20,
  },
  navbarIcons: {
    tintColor: 'white',
  },
  navbarActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  logoutWrapper: {
    marginHorizontal: 20,
  },
  logout: {
    width: '100%',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    gap: 30,
  },
});
