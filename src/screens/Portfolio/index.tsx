import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import styles from './styles';
import Header from '../../components/Header';
import PortfolioTile from '../../components/PortfolioTile';
import data from '../../../data';
import HorizontalTile from '../../components/HorizontalTile';

const Portfolio = ({navigation}: {navigation: any}) => {
  const renderdataitem = ({item, index}: {item: any,index:number}) => (
    <HorizontalTile
      cryptoShortName={item.cryptoShortName}
      cryptoName={item.cryptoName}
      cryptoIcon={item.cryptoIcon}
      price={item.price}
      priceChange={item.priceChange}
    />
  );
  const navigateSearch = () => {
    navigation.navigate('Search');
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.header}>
        <Text style={styles.portfolioText}>Portfolio</Text>
        <TouchableOpacity>
          <Text style={styles.orderText}>Orders</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <PortfolioTile />
        <View style={styles.body}>
          <Text style={styles.cryptosText}>
            Cryptos
          </Text>
          <FlatList
        bounces={false}
        data={data}
        renderItem={renderdataitem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Portfolio;
