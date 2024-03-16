import React from 'react';
import {View} from 'react-native';
import BottomNavbar, {
  NavbarItems,
} from '../../components/BottomNavbar/BottomNavbar';
import {Icons} from '../../assets/icons/all-icons';
import {getStyles} from '../../shared/utils/modifiers';
import Navbar from '../../components/Navbar/Navbar';
import {PAGES} from '../../types/pages.type';
import {usePageHelper} from '../../shared/hooks/pageHelper.hook';
import Layout from '../layout/Layout';

const Home = () => {
  const {setPage} = usePageHelper();

  const handlePage = (item: NavbarItems<PAGES>) => {
    setPage(item.id);
  };

  return (
    <View {...getStyles(['flex1', 'z100'])}>
      <Navbar />
      <Layout />
      <BottomNavbar items={items} onClick={handlePage} />
    </View>
  );
};

export default Home;

export const items: NavbarItems<PAGES>[] = [
  {
    id: PAGES.Home,
    label: 'Home',
    icon: Icons.home,
  },
  {
    id: PAGES.CapturePole,
    label: 'Capture Pole',
    icon: Icons.camera,
  },
  {
    id: PAGES.PoleList,
    label: 'Pole List',
    icon: Icons.menuList,
  },
];
