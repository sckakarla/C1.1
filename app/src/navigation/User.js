import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen } from '../screens';
import { recordScreen } from '../utils';

const Stack = createStackNavigator();

const UserScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Landing');
          },
        })}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  );
};

UserScreens.propTypes = {};

export default UserScreens;