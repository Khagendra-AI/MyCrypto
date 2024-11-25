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
import {addGainers} from '../../redux/config/configSlice';

const Home = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductsAction())
      .unwrap()
      .then((res: any) => {
        console.log('res on the homescreen', res?.data);
        const positiveGainers = res?.data?.filter(
          (item: any) => item.changePercent24Hr > 0,
        );
        const sortedGainers = res?.data?.sort(
          (a: any, b: any) => b?.changePercent24Hr - a?.changePercent24Hr,
        );
        dispatch(addGainers([{}]));
      })
      .catch();
    // dispatch(addGainers(sortedGainers))
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

  // const dispatch=useDispatch()
  const {products} = useSelector(store => store.mainapi);
  const apiData = products?.data;

  // console.log('apiDataapiData', apiData);

  const positiveGainers = apiData?.filter(
    (item: any) => item.changePercent24Hr > 0,
  );
  const sortedGainers = positiveGainers?.sort(
    (a: any, b: any) => b?.changePercent24Hr - a?.changePercent24Hr,
  );

  console.log('sortedGainers', positiveGainers);

  // useEffect(() => {
  //   dispatch(addGainers(positiveGainers));
  // }, []);

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Header navigateSearch={navigateSearch} />
      <CurrentValueTile
        navigatePortfolio={navigatePortfolio}
        navigateAddMoney={navigateAddMoney}
      />
      <Explore />
      <WatchList
        navigateWatchlist={navigateWithIndex}
        navigation={navigation}
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
        navigateLosers={navigateWithIndex}
        navigateMainCrypto={navigateMainCrypto}
      />
      <SlidingBanner />
    </ScrollView>
  );
};

export default Home;