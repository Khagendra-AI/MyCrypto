import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import { Icon } from '../../assets';

const Explore = () => {
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.mainexploretext}>Explore More</Text>
    <View style={styles.container}>
      <TouchableOpacity style={styles.subcontainer}>
      <View style={styles.explore1}>
        <Image
        source={Icon.deposit}
        style={styles.images}
        />
      </View>
      <Text style={styles.exploretext}> Deposits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer}>
      <View style={styles.explore2}>
      <Image
        source={Icon.earn}
        style={styles.images}
        />
      </View>
      <Text style={styles.exploretext}>Earn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer}>
      <View style={styles.explore3}>
      <Image
        source={Icon.learn}
        style={styles.images}
        />
      </View>
      <Text style={styles.exploretext}>Futures</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer}>
      <View style={styles.explore4}>
      <Image
        source={Icon.stock}
        style={styles.images}
        />
      </View>
      <Text style={styles.exploretext}>Stocks</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Explore;

