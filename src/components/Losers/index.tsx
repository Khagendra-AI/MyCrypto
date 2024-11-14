import React from 'react';
import Tile from '../Tile';
import styles from './styles';
import data from '../../../data';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

const Losers = ({navigateLosers}: {navigateLosers: any}) => {
  const {products} = useSelector(store => store.mainapi);
  const apiData = products?.data;
  const positiveGainers = apiData?.filter(
    (item: any) => item.changePercent24Hr < 0,
  );

  const sortedGainers = positiveGainers?.sort(
    (a: any, b: any) => a.changePercent24Hr - b.changePercent24Hr,
  );

  const renderItem = ({item}: {item: any}) => (
    <Tile
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
          Top Losers
        </Text>
        <TouchableOpacity
          style={styles.touchableViewall}
          onPress={() => navigateLosers(2)}>
          <Text
            style={{color: 'blue', fontWeight: '600', margin: 5, fontSize: 14}}>
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
