import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Tile from '../Tile';
import data from '../../../data';
import styles from './styles';
import {useSelector} from 'react-redux';
import { Icon } from '../../assets';

const WatchList = ({
  navigateWatchlist,
  navigateMainCrypto,
  navigation,
}: {
  navigateWatchlist: any;
  navigateMainCrypto: any;
  navigation: any;
}) => {
  const {products} = useSelector((store:any) => store.mainapi);

  // console.log('productsproducts', products);

  const renderItem = ({item,}: {item: any}) => {
    // console.log('item in the renderItem', item.id);
    return (
      <Tile
        // index={index}
        navigateToCrypto={navigation}
        screenName={'MainCrypto'}
        navigateMainCrypto={{
          ...navigateMainCrypto,
          tileId: item.id ?? '',
        }}
        item={item}
        tileId={item.id ?? ''}
        cryptoShortName={item.symbol}
        cryptoName={item.name}
        cryptoIcon={Icon.crypto}
        price={Number(item.priceUsd ?? 0).toFixed(2)}
        priceChange={Number(item.changePercent24Hr ?? 0).toFixed(2)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text
          style={{color: 'white', fontWeight: '600', margin: 5, fontSize: 19}}>
          Cryptos
        </Text>
        <TouchableOpacity
          style={styles.touchableViewall}
          onPress={() => navigateWatchlist(0)}>
          <Text
            style={{color: '#00FFFF', fontWeight: '600', margin: 5, fontSize: 14}}>
            View all
          </Text>
        </TouchableOpacity>
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

export default WatchList;
