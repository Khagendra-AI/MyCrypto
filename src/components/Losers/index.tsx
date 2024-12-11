import React from 'react';
import Tile from '../Tile';
import styles from './styles';
import data from '../../../data';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import { Icon } from '../../assets';

const Losers = ({
  navigateLosers,
  navigateMainCrypto,
  navigation,

}: {
  navigateLosers: any;
  navigateMainCrypto: any;
  navigation:any;

}) => {
  const {products}= useSelector((store:any) => store.mainapi);
  const apiData = products?.data;
  const positiveGainers = apiData?.filter(
    (item: any) => item.changePercent24Hr < 0,
  );

  const sortedGainers = positiveGainers?.sort(
    (a: any, b: any) => a.changePercent24Hr - b.changePercent24Hr,
  );

  const renderItem = ({item}: {item: any}) => (
    <Tile
    
    navigateToCrypto={navigation}
    screenName={'MainCrypto'}
    navigateMainCrypto={{
      ...navigateMainCrypto,
      tileId: item.id ?? '',
    }}
    tileId={item.id ?? ''}
    item={item}
    // navigateMainCrypto={navigateMainCrypto}
    cryptoShortName={item.symbol}
    cryptoName={item.name}
    cryptoIcon={Icon.crypto}
    price={Number(item.priceUsd ?? 0).toFixed(2)}
    priceChange={Number(item.changePercent24Hr ?? 0).toFixed(2)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text
          style={styles.losersText}>
          Top Losers
        </Text>
        <TouchableOpacity
          style={styles.touchableViewall}
          onPress={() => navigateLosers(2)}>
          <Text
            style={styles.viewText}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        
        bounces={false}
        data={sortedGainers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Losers;
