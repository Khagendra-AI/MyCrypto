import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Tile from '../Tile';
import {Icon, Images} from '../../assets';
import styles from './styles';

const SlidingBanner = () => {
  const imageData = [
    {id: '1', source: Images.slidingBanner1},
    {id: '2', source: Images.slidingBanner2},
    {id: '3', source: Images.slidingBanner3},
    {id: '4', source: Images.slidingBanner4},
    {id: '5', source: Images.slidingBanner1},
    {id: '6', source: Images.slidingBanner2},
  ];
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={()=>{const url = 'https://www.dentons.com/en/insights/podcasts/crypto-bytes-podcast-series';
      Linking.openURL(url).catch(err => console.error("Failed to open URL:", err))}}>
      <Image source={item.source} style={styles.image} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text
        style={styles.cryptoText}>
        Crypto Bytes
      </Text>
      <FlatList
        horizontal
        bounces={false}
        data={imageData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SlidingBanner;
