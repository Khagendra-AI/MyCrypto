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
import {useSelector} from 'react-redux';

const Portfolio = ({navigation}: {navigation: any}) => {
  const {products, gainersData, walletBalance} = useSelector(
    store => store.mainapi,
  );
  const renderdataitem = ({item, index}: {item: any; index: number}) => (
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
          <Text style={styles.cryptosText}>Cryptos</Text>
          <FlatList
            bounces={false}
            data={data}
            renderItem={renderdataitem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.walletView}>
        <View style={styles.walletLeftView}>
          <Text style={styles.balance}>${walletBalance}</Text>
          <Text style={styles.balanceText}>Wallet Balance</Text>
        </View>
        <TouchableOpacity
          style={styles.walletRightView}
          onPress={() => navigation.navigate('AddMoney')}>
          <Text style={styles.walletText}>Wallet {'>'} </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Portfolio;
