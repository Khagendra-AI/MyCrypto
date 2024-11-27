import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import IndividualCryptoPortfolio from '../../components/IndividualCryptoPortfolio';
import MarketStats from '../../components/MarketStats';
import SimilarCrypto from '../../components/SimilarCrypto';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Chart from '../../components/Chart';
import {Icon} from '../../assets';

const MainCrypto = ({navigation}: {navigation: any}) => {
  const params = useRoute()?.params;

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
    <View style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.touchableBack}
            onPress={() => navigation.goBack()}>
            <Image source={Icon.backw} style={styles.backimage} />
          </TouchableOpacity>
          <View style={styles.headerCryptoInfo}>
            <Text style={styles.cryptoNameHeader}>{params.item?.symbol}</Text>
            <Text
              style={[
                styles.priceChangeText,
                {color: params.item?.changePercent24Hr < 0 ? 'red' : 'green'},
              ]}>
              {' '}
              {params.item?.changePercent24Hr != null
                ? parseFloat(params.item?.changePercent24Hr).toFixed(2)
                : 'N/A'}
              %
            </Text>
          </View>
          <TouchableOpacity style={styles.touchableStar}>
            <Image source={Icon.star} style={styles.starimage} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Chart
            chartColor={params.item?.changePercent24Hr}
            price={params.item?.priceUsd}
          />
          <IndividualCryptoPortfolio
            shortName={params.item?.symbol}
            cryptoName={params.item?.name}
          />
          <MarketStats
            supply={croreFunction(params.item?.supply)}
            mCap={croreFunction(params.item?.marketCapUsd)}
            mRank={params.item?.rank}
          />
          <SimilarCrypto
            navigateWatchlist={navigateWithIndex}
            navigation={navigation}
            navigateMainCrypto={navigateMainCrypto}
          />
        </ScrollView>
      </View>
      <View style={styles.footerView}>
        <TouchableOpacity style={styles.touchableBellImage}>
          <Image source={Icon.bell} style={styles.bellimage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableBuy}
          onPress={() =>
            navigation.navigate('BuyPage', {
              item: params.item,
            })
          }>
          <Text style={styles.buyText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableSell} onPress={() =>
            navigation.navigate('SellPage', {
              item: params.item,
            })
          }>
          <Text style={styles.sellText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainCrypto;
