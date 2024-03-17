import React from 'react';
import PoleList from './PoleList';
import {createStackNavigator} from '@react-navigation/stack';
import {router} from '../../../shared/routes/router';
import EditPole from '../EditPole/EditPole';

const Stack = createStackNavigator();

const PoleListMain = () => {
  return (
    <Stack.Navigator initialRouteName={router.poleList.route}>
      <Stack.Screen
        name={router.zonalList.route}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
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

export default PoleListMain;
