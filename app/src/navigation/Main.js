import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import UserScreens from './User';
import HomeTabs from './Tabs';

LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();

const Main = () => {
  const isAuthenticated = false;
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Search">
              {(navigation) => <HomeTabs navigation={navigation} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Landing"
              component={UserScreens}
              options={{
                headerShown: false,
                animationTypeForReplace: 'pop',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

Main.propTypes = {};

export default Main;