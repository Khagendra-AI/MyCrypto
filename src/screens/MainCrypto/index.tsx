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
          shortName={route.item?.symbol}
          cryptoName={route.item?.name}
        />
        <MarketStats
          supply={croreFunction(route.item?.supply)}
          mCap={croreFunction(route.item?.marketCapUsd)}
          mRank={route.item?.rank}
        />
        <SimilarCrypto
        navigateWatchlist={navigateWithIndex}
        navigation={navigation}
        navigateMainCrypto={navigateMainCrypto}
        />
      </View>
    </ScrollView>
  );
};

export default MainCrypto;
