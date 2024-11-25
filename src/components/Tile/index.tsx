import {
  Alert,
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
  navigateMainCrypto,
  cryptoShortName,
  cryptoName,
  cryptoIcon,
  price,
  tileId,
  priceChange,
  screenName,
  
  navigateToCrypto,
  item
}: {
  navigateMainCrypto: any;
  cryptoShortName: any;
  cryptoName: any;
  cryptoIcon: any;
  price: any;
  priceChange: any;
  screenName: string;
  
  tileId: number | string;
  navigateToCrypto: () => void;
  item: any
}) => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <TouchableOpacity
        style={styles.container}
        // onPress={navigateMainCrypto?.onPress}
        onPress={() =>
          navigateToCrypto?.navigate?.(screenName, {
            tileId: tileId ?? '',
            
            item
          })
        }
        activeOpacity={1}>
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
