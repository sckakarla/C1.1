import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { useIsFocused } from '@react-navigation/native';

import { Tab1Screen, Tab2Screen, Tab3Screen, Tab4Screen } from '../screens';
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';

import * as colors from '../theme/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

const HomeTabs = ({ navigation }) => {
  // const isFocused = useIsFocused();
  const fontLoaded = useSelector((state) => state.app.fontLoaded);

  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs">
        {({ navigation }) => (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              // eslint-disable-next-line react/prop-types
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                const useCommunity = false;
                switch (route.name) {
                  case 'Tab1': {
                    iconName = 'home';
                    break;
                  }
                  case 'Tab2': {
                    iconName = 'home';
                    break;
                  }
                  case 'Tab3': {
                    iconName = 'home';
                    break;
                  }
                  case 'Tab4': {
                    iconName = 'home';
                    break;
                  }
                  default: {
                    iconName = 'error';
                    break;
                  }
                }

                if (useCommunity) {
                  return (
                    <MaterialCommunityIcons
                      name={iconName}
                      size={size}
                      color={color}
                    />
                  );
                } else {
                    return (
                        <MaterialIcons name={iconName} size={size} color={color} />
                    );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: colors.red,
              inactiveTintColor: colors.white,
              labelStyle: fontLoaded ? fontStyles.normal : '',
              labelPosition: 'below-icon',
              showLabel: false,
              style: {
                backgroundColor: '#333333',
                borderTopWidth: 0,
              },
            }}
          >
            <Tab.Screen name="Tab1">
              {({ navigation }) => <Tab1Screen navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="Tab2">
              {({ navigation }) => <Tab2Screen navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="Tab3">
              {({ navigation }) => <Tab3Screen navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="Tab4">
              {({ navigation }) => <Tab4Screen navigation={navigation} />}
            </Tab.Screen>
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

HomeTabs.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeTabs;