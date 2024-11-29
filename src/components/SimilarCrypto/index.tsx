import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Tile from '../Tile';
import data from '../../../data';
import styles from './styles';
import {useSelector} from 'react-redux';
import { Icon } from '../../assets';

const SimilarCrypto = ({
  navigateWatchlist,
  navigateMainCrypto,
  navigation,
}: {
  navigateWatchlist: any;
  navigateMainCrypto: any;
  navigation:any;
}) => {
  const {products} = useSelector(store => store.mainapi);

 

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
          style={{color: 'white', fontWeight: '600', margin: 5, fontSize: 19}}>
          Similar Cryptos
        </Text>
      </View>
      <FlatList
        horizontal
        bounces={false}
        data={products?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SimilarCrypto;
