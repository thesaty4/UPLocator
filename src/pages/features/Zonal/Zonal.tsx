import React from 'react';
import RouteLines from '../RouteLines/RouteLines';
import ZonalList from './ZonalList';
import {createStackNavigator} from '@react-navigation/stack';
import {router} from '../../../shared/routes/router';
import PoleList from '../PoleList/PoleList';
import EditPole from '../EditPole/EditPole';

const Stack = createStackNavigator();

const Zonal = () => {
  return (
    <Stack.Navigator initialRouteName={router.zonalList.route}>
      <Stack.Screen
        name={router.zonalList.route}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
        component={ZonalList}
      />
      <Stack.Screen
        name={router.routeLines.route}
        options={{headerShown: false, animationEnabled: false}}
        component={RouteLines}
      />
      <Stack.Screen
        name={router.poleList.route}
        options={{headerShown: false, animationEnabled: false}}
        component={PoleList}
      />
      <Stack.Screen
        name={router.editPole.route}
        options={{headerShown: false, animationEnabled: false}}
        component={EditPole}
      />
    </Stack.Navigator>
  );
};

export default Zonal;
