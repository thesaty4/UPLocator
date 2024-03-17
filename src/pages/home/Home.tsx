import React from 'react';
import {Icons} from '../../assets/icons/all-icons';
import CapturePole from '../features/CapturePole/CapturePole';
import PoleList from '../features/PoleList/PoleList';
import TabView, {TabViewProps} from '../../shared/view/TabView/TabView';
import {Routes, router} from '../../shared/routes/router';
import Zonal from '../features/Zonal/Zonal';

const Home = () => {
  return <TabView {...tabViewInfo} />;
};

export default Home;

const tabViewInfo: TabViewProps<Routes> = {
  hideTab: true,
  initialRouteName: router['home'],
  tabElements: [
    {
      icon: Icons.home,
      route: router['home'],
      element: Zonal,
    },
    {
      icon: Icons.camera,
      route: router['capturePole'],
      element: CapturePole,
    },
    {
      icon: Icons.menuList,
      route: router['poleList'],
      element: PoleList,
    },
  ],
};
