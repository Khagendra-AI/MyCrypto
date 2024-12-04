import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigation from './src/navigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import LoginPage from './src/components/LoginPage';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
let persistor=persistStore(store)
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RootNavigation />
      </PersistGate>
    </Provider>

  );
};

export default App;

const styles = StyleSheet.create({});
