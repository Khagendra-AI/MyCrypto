import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Header from '../../components/Header';
import Popular from '../../components/Popular';
import Explore from '../../components/Explore';
import WatchList from '../../components/WatchList';
import Gainers from '../../components/Gainers';
import Losers from '../../components/Losers';
import BannerAnimated from '../../components/BannerAnimated';
import SlidingBanner from '../../components/SlidingBanner';
import CurrentValueTile from '../../components/CurrentValueTile';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsAction} from '../../redux/config/configAction';

const Home = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const navigateSearch = () => {
    navigation.navigate('Search');
  };
  const navigateWithIndex = (index: any) => {
    // Alert.alert(JSON.stringify(index));
    navigation.navigate('Market', {index});
  };
  const navigatePortfolio = () => {
    navigation.navigate('Portfolio');
  };

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Header navigateSearch={navigateSearch} />
      <CurrentValueTile navigatePortfolio={navigatePortfolio} />
      <Explore />
      <WatchList navigateWatchlist={navigateWithIndex} />
      <BannerAnimated />
      <Popular />
      <Gainers navigateGainers={navigateWithIndex} />
      <Losers navigateLosers={navigateWithIndex} />
      <SlidingBanner />
    </ScrollView>
  );
};

export default Home;
