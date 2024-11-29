import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '../../assets';
import { useRoute } from '@react-navigation/native';

const BuyPage = ({navigation}: {navigation: any}) => {
  const params = useRoute()?.params;
  const [amount, setamount] = useState('');
  const onamountchange = e => {
    setamount(e);
  };
  const onBuyPress = () => {};
  const on10press = () => {};
  const on50press = () => {};
  const on100press = () => {};
  const on500press = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image source={Icon.backw} />
        </TouchableOpacity>
        <View style={styles.infoViewHeader}>
          <Text style={styles.crypNameText}>Buy {params.item.symbol || params.item.item?.symbol}</Text>
          <Text style={styles.cryppriceText}>${parseFloat(params.item?.priceUsd || params.item.item?.priceUsd).toFixed(2)}</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.enterAmountView}>
        <Text style={styles.enterAmountText}>Enter Amount</Text>
        <TextInput
          onChangeText={onamountchange}
          value={amount}
          defaultValue="50"
          placeholderTextColor={'grey'}
          placeholder="10"
          style={styles.textInput}
        />
        <Text style={styles.enterAmountText}>Min: $10 | Max: $5000</Text>
        <View style={styles.directAddView}>
          <Text style={styles.directAddText} onPress={on10press}>
            +10
          </Text>
          <Text style={styles.directAddText} onPress={on50press}>
            +50
          </Text>
          <Text style={styles.directAddText} onPress={on100press}>
            +100
          </Text>
          <Text style={styles.directAddText} onPress={on500press}>
            +500
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.touchableDeposit} onPress={onBuyPress}>
        <Text style={styles.depositText}>
          Buy {params.item.symbol || params.item.item?.symbol}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BuyPage;
