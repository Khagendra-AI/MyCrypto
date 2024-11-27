import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tile from './src/components/Tile';
import {Icon} from './src/assets';
import Header from './src/components/Header';
import Explore from './src/components/Explore';
import WatchList from './src/components/WatchList';
import Popular from './src/components/Popular';
import Home from './src/screens/Home';
import BottomNav from './src/navigator/RootNavigation/Index';
import HorizontalTile from './src/components/HorizontalTile';
import Market from './src/screens/Market';
import {SearchSource} from 'jest';
import Search from './src/screens/Search';
import RootNavigation from './src/navigator';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MainCrypto from './src/screens/MainCrypto';
import AddMoney from './src/components/AddMoney';
import Chart from './src/components/Chart';

const App = () => {
  return (
    
    <Provider store={store}>
      <RootNavigation />
    </Provider>
    
    
  );
};

export default App;

const styles = StyleSheet.create({});
