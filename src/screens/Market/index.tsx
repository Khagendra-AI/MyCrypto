import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import Header from '../../components/Header';
import {Icon} from '../../assets';
import MarketMainFlatlist from '../../components/MarketMainFlatlist';
import HorizontalTile from '../../components/HorizontalTile';
import {useRoute} from '@react-navigation/native';

const Market = ({navigation, route}: {navigation: any,route:any}) => {
  // console.log('route in the ', route);
  const {params} = route;

  // console.log(index, '++++++');

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.subheader}>
        <Text style={styles.headertext}>Crypto</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image style={styles.headerimage} source={Icon.searchw} />
        </TouchableOpacity>
      </View>

      <MarketMainFlatlist index={params?.index || 0} />
    </SafeAreaView>
  );
};

export default Market;
