import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import IndividualCryptoPortfolio from '../../components/IndividualCryptoPortfolio';
import MarketStats from '../../components/MarketStats';
import SimilarCrypto from '../../components/SimilarCrypto';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const MainCrypto = ({navigation}: {navigation: any}) => {
  const route = useRoute()?.params;
  const {products, gainersData} = useSelector(store => {
    return store.mainapi;
  });
  const apiData = products?.data;
  // console.log(apiData[route?.index], 'apiDataapiDataapiData');
  console.log(gainersData, '///');
  const cryptoData = apiData?.filter((item: any) => item.id == route.tileId);
  // const route = useRoute()?.params;
  // console.log(
  //   'route in the mainCryptod',
  //   cryptoData[route?.index],
  //   route.index,
  // );
  // console.log('route in the mainCrypto', apiData[route?.index], route.index);

  const navigateWithIndex = (index: any) => {
    navigation.navigate('Market', {index});
  };
  const croreFunction = number => {
    let crore = number / 10000000;
    return crore.toFixed(2);
  };
  const navigateMainCrypto = () => {
    navigation.navigate('MainCrypto', {});
  };
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <IndividualCryptoPortfolio
          shortName={apiData[route?.index]?.symbol}
          cryptoName={apiData[route?.index]?.name}
        />
        <MarketStats
          supply={croreFunction(apiData[route?.index]?.supply)}
          mCap={croreFunction(apiData[route?.index]?.marketCapUsd)}
          mRank={apiData[route?.index]?.rank}
        />
        <SimilarCrypto
          navigateWatchlist={navigateWithIndex}
          navigateMainCrypto={navigateMainCrypto}
        />
      </View>
    </ScrollView>
  );
};

export default MainCrypto;
