import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Tile from '../Tile';
import data from '../../../data';
import styles from './styles';
import {useSelector} from 'react-redux';

const SimilarCrypto = ({
  navigateWatchlist,
  navigateMainCrypto,
}: {
  navigateWatchlist: any;
  navigateMainCrypto: any;
}) => {
  const {products} = useSelector(store => store.mainapi);

  // console.log('productsproducts', products);

  const renderItem = ({item}: {item: any}) => (
    <Tile
      navigateMainCrypto={navigateMainCrypto}
      cryptoShortName={item.symbol}
      cryptoName={item.name}
      cryptoIcon={item.cryptoIcon}
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