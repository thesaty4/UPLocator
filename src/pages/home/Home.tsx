import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../shared/components/form/button/Button';
import {appColors} from '../../constants/app.color';
import useAuth from '../../shared/hooks/auth.hook';
import BottomNavbar, {
  NavbarItems,
} from '../../components/BottomNavbar/BottomNavbar';
import {Icons} from '../../assets/icons/all-icons';
import {getStyles} from '../../shared/utils/modifiers';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  const {logOut} = useAuth();

  const handleLogout = () => {
    logOut();
  };
  return (
    <View {...getStyles(['flex1', 'z100'])}>
      <Navbar />
      <Text>Welcome to Home</Text>
      <Button
        label="Logout"
        onPress={handleLogout}
        style={{backgroundColor: appColors.primary}}
      />

      <BottomNavbar items={items} />
    </View>
  );
};

export default Home;

export const items: NavbarItems<string>[] = [
  {
    id: 'ForgotPassword',
    icon: Icons.login2,
  },
  {
    id: 'Home',
    icon: Icons.home,
  },
  {
    id: 'Profile',
    icon: Icons.maleUser,
  },
];
