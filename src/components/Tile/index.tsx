import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Tile = ({
  cryptoShortName,
  cryptoName,
  cryptoIcon,
  price,
  priceChange,
}: {
  cryptoShortName: any;
  cryptoName: any;
  cryptoIcon: any;
  price: any;
  priceChange: any;
}) => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.cryptoinfoView}>
          <View style={styles.cryptoNameView}>
            <Text style={styles.cryptoShortName}>{cryptoShortName}</Text>
            <Text numberOfLines={1} style={styles.cryptoName}>
              {cryptoName}
            </Text>
          </View>
          <View style={styles.cryptoIconView}>
            <Image source={cryptoIcon} style={styles.cryptoIcon} />
          </View>
        </View>
        <View style={styles.cryptoPriceView}>
          <Text style={styles.price}>${price}</Text>
          <Text
            style={[
              styles.priceprcnt,
              {color: priceChange < 0 ? 'red' : 'green'},
            ]}>
            {priceChange}%
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Tile;
