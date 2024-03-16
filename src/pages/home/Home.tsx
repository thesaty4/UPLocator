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
import {images} from '../../assets/images/all-images';
import ListView, {ListViewItem} from '../../components/ListView/ListView';

const Home = () => {
  const {logOut} = useAuth();

  const handleLogout = () => {
    logOut();
  };
  return (
    <View {...getStyles(['flex1', 'z100'])}>
      <Navbar />

      <ListView label="Zonal List" items={homeList} onPressAction={() => {}} />

      <BottomNavbar items={items} />
    </View>
  );
};

export default Home;

const homeList: ListViewItem[] = [
  {
    label: 'Capture Pole',
    substr: 'Capture Pole',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
];

export const items: NavbarItems<string>[] = [
  {
    id: 'Home',
    label: 'Home',
    icon: Icons.home,
  },
  {
    id: 'Capture Pole',
    label: 'Capture Pole',
    icon: Icons.camera,
  },
  {
    id: 'PoleList',
    label: 'Pole List',
    icon: Icons.menuList,
  },
];
