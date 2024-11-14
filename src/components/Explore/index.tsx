import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Explore = () => {
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.mainexploretext}>Explore More</Text>
    <View style={styles.container}>
      <TouchableOpacity style={styles.subcontainer}>
      <View style={styles.explore1}></View>
      <Text style={styles.exploretext}> Deposits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer}>
      <View style={styles.explore2}></View>
      <Text style={styles.exploretext}>Earn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer}>
      <View style={styles.explore3}></View>
      <Text style={styles.exploretext}>Futures</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer}>
      <View style={styles.explore4}></View>
      <Text style={styles.exploretext}>Stocks</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Explore;

