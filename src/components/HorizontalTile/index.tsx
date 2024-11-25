import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from '../../assets';
import styles from './styles';

const HorizontalTile = (props: any) => {
  const {cryptoIcon, price, priceChange, cryptoName, cryptoShortName} = props;
  return (
    // <View style={styles.maincontainer}>
    <>
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.container}>
          <View style={styles.infoview}>
            <Image source={cryptoIcon} style={styles.cryptoIcon} />

            <View style={styles.infomain}>
              <Text style={styles.cryptoShortName}>{cryptoShortName}</Text>
              <Text numberOfLines={1} style={styles.cryptoName}>
                {cryptoName}
              </Text>
            </View>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.price}>${price}</Text>
            <Text
              style={[
                styles.priceprcnt,
                {color: priceChange < 0 ? 'red' : 'green'},
              ]}>
              {priceChange}%
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
    //  </View>
  );
};

export default HorizontalTile;
