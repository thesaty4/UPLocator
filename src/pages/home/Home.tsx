import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../shared/components/form/button/Button';
import {appColors} from '../../constants/app.color';
import useAuth from '../../shared/hooks/auth.hook';

const Home = () => {
  const {logOut} = useAuth();

  const handleLogout = () => {
    logOut();
  };
  return (
    <View>
      <Text>Welcome to Home</Text>
      <Button
        label="Logout"
        onPress={handleLogout}
        style={{backgroundColor: appColors.primary}}
      />
    </View>
  );
};

export default Home;
