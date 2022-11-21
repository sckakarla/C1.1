import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';

import appReducer from './reducers/app';
import { CLEAR_REDUX, USE_LOGGER } from '../config';

if (CLEAR_REDUX) {
  AsyncStorage.clear();
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const loggerMiddleware = createLogger();

let store;
if (USE_LOGGER) {
  store = configureStore(reducer: persistedReducer, composeEnhancers(applyMiddleware(loggerMiddleware)));
} else {
  store = configureStore(persistedReducer);
}

const persistor = persistStore(store);

export { store, persistor };