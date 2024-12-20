import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import data from '../../../data';
import Tile from '../Tile';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {addGainers} from '../../redux/config/configSlice';
import {Icon} from '../../assets';

const Gainers = ({
  navigateGainers,
  navigateMainCrypto,
  navigation,
}: {
  navigation: any;
  navigateGainers: any;
  navigateMainCrypto: any;
}) => {
  const dispatch = useDispatch();
  const {products} = useSelector((store: any) => store.mainapi);
  const apiData = products?.data;

  const positiveGainers = apiData?.filter(
    (item: any) => item.changePercent24Hr > 0,
  );
  const sortedGainers = positiveGainers?.sort(
    (a: any, b: any) => b?.changePercent24Hr - a?.changePercent24Hr,
  );

  const renderItem = ({item, index}: {item: any; index: any}) => (
    <Tile
      navigateToCrypto={navigation}
      screenName={'MainCrypto'}
      navigateMainCrypto={{
        ...navigateMainCrypto,
        tileId: item.id ?? '',
      }}
      tileId={item.id ?? ''}
      item={item}
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
        <Text style={styles.topGainersText}>Top Gainers</Text>
        <TouchableOpacity
          style={styles.touchableViewall}
          onPress={() => navigateGainers(1)}>
          <Text style={styles.viewAllText}>View all</Text>
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

export default Gainers;
