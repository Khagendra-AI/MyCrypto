import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const PortfolioTile = () => {
  return (
    
      <View style={styles.container}>
        <View style={styles.leftView}>
          <View style={styles.lupperView}>
            <Text style={styles.priceText}>$1200</Text>
            <Text style={styles.priceTypeText}>Invested Value</Text>
          </View>
          <View style={styles.llowerView}>
            <Text style={styles.changePriceText}>$100</Text>
            <Text style={styles.priceTypeText}>Loss INR</Text>
          </View>
        </View>
        <View style={styles.rightView}>
          <View style={styles.rupperView}>
            <Text style={styles.priceText}>$1100</Text>
            <Text style={styles.priceTypeText}>Current Value</Text>
          </View>
          <View style={styles.rlowerView}>
            <Text style={styles.changePriceText}>10.6%</Text>
            <Text style={styles.priceTypeText}>Loss%</Text>
          </View>
        </View>
      </View>
  );
};

export default PortfolioTile;
