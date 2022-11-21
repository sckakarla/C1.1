/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';
import { Main } from './src/navigation';

const App = () => {
  const renderLoading = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={renderLoading()} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};


export default App;
