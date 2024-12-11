import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../../assets';
import styles from './styles';

const BannerAnimated = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagetouchable} onPress={()=>{const url = 'https://www.ig.com/en/cryptocurrency-trading/how-to-trade-cryptocurrency';
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err))}}>
        <Image source={Images.Cryptobanner} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default BannerAnimated;
