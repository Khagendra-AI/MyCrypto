import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../../assets';
import styles from './styles';

const BannerAnimated = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagetouchable}>
        <Image source={Images.Cryptobanner} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default BannerAnimated;
