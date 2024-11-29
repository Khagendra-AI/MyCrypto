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
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductsAction())
      .unwrap()
      .then((res: any) => {
      })
      .catch();
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
  const navigateMainCrypto = () => {
    navigation.navigate('MainCrypto', {});
  };
  const navigateAddMoney = () => {
    navigation.navigate('AddMoney');
  };
  const navigateProfile = () => {
    navigation.navigate('Profile');
  };
  const navigateReward=()=>{
    navigation.navigate('RewardScreen');
  }
  return (
    <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
      <Header navigateSearch={navigateSearch} navigateProfile={navigateProfile} navigateReward={navigateReward}/>
      <CurrentValueTile
        navigatePortfolio={navigatePortfolio}
        navigateAddMoney={navigateAddMoney}
      />
      <Explore />
      <WatchList
        navigateWatchlist={navigateWithIndex}
        navigation={navigation}
        navigateMainCrypto={navigateMainCrypto}
        // navigateMainCrypto={{onPress: navigateMainCrypto, tileId: '', index: 0}}
      />
      <BannerAnimated />
      <Popular />
      <Gainers
        navigation={navigation}
        // navigateMainCrypto={{onPress: navigateMainCrypto, tileId: '', index: 0}}
        navigateGainers={navigateWithIndex}
        navigateMainCrypto={navigateMainCrypto}
      />
      <Losers
      navigation={navigation}
        navigateLosers={navigateWithIndex}
        navigateMainCrypto={navigateMainCrypto}
      />
      <SlidingBanner />
    </ScrollView>
  );
};

export default Home;
