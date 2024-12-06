import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const IndividualCryptoPortfolio = ({cryptoName,shortName}:{cryptoName:string,shortName:string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Your {cryptoName} Portofilo</Text>
      <View style={styles.subcontainer}>
        <View style={styles.upperView}>
          <View style={styles.leftUpperView}>
            <Text style={styles.headingText}>{shortName} Balance</Text>
            <Text style={styles.normalText}> 0.0</Text>
          </View>
          <View style={styles.rightUpperView}>
          <Text style={styles.headingText}>Current Value</Text>
            <Text style={styles.normalText}> $0</Text>
            </View>
        </View>
        <View style={styles.horizontalLine}/>
        <View style={styles.lowerView}>
          <View style={styles.leftLowerView}>
          <Text style={styles.headingText}>Average Buy Price</Text>
          <Text style={styles.normalText}> $0</Text>
          </View>
          <View style={styles.rightLowerView}>
          <Text style={styles.headingText}>Gain/Loss</Text>
          <Text style={styles.normalText}>0%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default IndividualCryptoPortfolio;
