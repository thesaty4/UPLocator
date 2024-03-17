import React, {ReactNode} from 'react';
import {Image, ImageURISource, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../../routes/router';
import {getStyles} from '../../utils/modifiers';
import {appColors} from '../../../constants/app.color';
import Navbar from '../../../components/Navbar/Navbar';

export type TabElements<RName> = {
  icon: ImageURISource;
  route: RName;
  element: Element;
};

export type TabViewProps<RName> = {
  headerShown?: boolean;
  navbar?: React.JSX.Element;
  initialRouteName: RName;
  tabElements: TabElements<RName>[];
};

const Tab = createBottomTabNavigator();

const TabView = <RName extends Routes>({
  headerShown = true,
  navbar = <Navbar />,
  initialRouteName,
  tabElements,
}: TabViewProps<RName>) => {
  const RNComponent = ({children}: {children: ReactNode | Element}): any =>
    children;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName.route}
      screenOptions={{
        headerShown: headerShown,
        header: () => <RNComponent children={navbar} />,
      }}>
      {tabElements.map(info => (
        <Tab.Screen
          name={info.route.route}
          component={RNComponent({children: info.element})}
          options={{
            tabBarStyle: {padding: 10},
            tabBarIcon: props => (
              <Image
                source={info.icon}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: props.focused ? appColors.primary : appColors.grey,
                }}
              />
            ),
            tabBarLabel: props => (
              <Text
                {...getStyles([], 'default', {
                  fontSize: 10,
                  color: props.focused ? appColors.primary : appColors.grey,
                })}>
                {info.route.label}
              </Text>
            ),
            // tabBarHideOnKeyboard: true,
            headerShadowVisible: true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabView;
