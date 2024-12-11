import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Tile from '../Tile';
import data from '../../../data';
import styles from './styles';
import {useSelector} from 'react-redux';

const Popular = ({navigation}: {navigation?: any}) => {
  const {products} = useSelector((store: any) => store.mainapi);

  const chunkData = (data: any[], numColumns: number, numRows: number) => {
    const result = [];
    for (
      let i = 0;
      i < data.length && result.length < numRows;
      i += numColumns
    ) {
      result.push(data.slice(i, i + numColumns));
    }
    return result;
  };

  const rows = chunkData(data, 2, 5);

  const renderRow = ({item}: {item: any[]}) => (
    <FlatList
      horizontal
      data={item}
      renderItem={({item}) => (
        <Tile
          navigateToCrypto={navigation}
          screenName={'MainCrypto'}
          navigateMainCrypto={{}}
          tileId={item.id ?? ''}
          item={item}
          cryptoShortName={item.cryptoShortName}
          cryptoName={item.cryptoName}
          cryptoIcon={item.cryptoIcon}
          price={item.price}
          priceChange={item.priceChange}
        />
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Crypto</Text>

      <FlatList
        data={rows}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        contentContainerStyle={styles.rowContainer}
      />
    </View>
  );
};

export default Popular;
