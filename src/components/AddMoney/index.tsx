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
import {Icon} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {addBalance} from '../../redux/config/configSlice';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddMoney = ({navigation}: {navigation: any}) => {
  const [money, setmoney] = useState('');
  const onmoneychange = (e :any)=> {
    setmoney(e);
  };
  const onDepositPress = () => {
    dispatch(addBalance(money));
  };
  const dispatch = useDispatch();
  const on10press = () => {setmoney("10")};
  const on50press = () => {setmoney("50")};
  const on100press = () => {setmoney("100")};
  const on500press = () => {setmoney("500")};
  const {products, gainersData, walletBalance} = useSelector(
    (store: any) => store.mainapi,
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Icon.backw} style={styles.backimage} />
        </TouchableOpacity>
        <Text style={styles.addText}>Add Money</Text>
        <View></View>
      </View>
      <View style={styles.balanceView}>
        <Text style={styles.balance}>${walletBalance}</Text>
        <Text style={styles.balanceText}>Current Balance</Text>
      </View>
      <View style={styles.enterAmountView}>
        <Text style={styles.enterAmountText}>Enter Amount</Text>
        <TextInput
          onChangeText={onmoneychange}
          value={money}
          defaultValue="50"
          placeholderTextColor={'grey'}
          placeholder="10"
          style={styles.textInput}
        />
        <Text style={styles.enterAmountText}>Min: $10 | Max: $5000</Text>
        <View style={styles.directAddView}>
          <Text style={styles.directAddText} onPress={on10press}>
            10
          </Text>
          <Text style={styles.directAddText} onPress={on50press}>
            50
          </Text>
          <Text style={styles.directAddText} onPress={on100press}>
            100
          </Text>
          <Text style={styles.directAddText} onPress={on500press}>
            500
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.touchableDeposit}
        onPress={onDepositPress}>
        <Text style={styles.depositText}>Deposit ${money}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddMoney;
