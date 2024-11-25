import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import {Icon} from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { addBalance } from '../../redux/config/configSlice';

const AddMoney = ({navigation}:{navigation:any}) => {
  const[money,setmoney]=useState("")
  const onmoneychange=(e)=>{
    setmoney(e)
  }
  const onDepositPress=()=>{
    dispatch(addBalance(money))
  }
  const dispatch=useDispatch()
  const on10press = () => {};
  const on50press = () => {};
  const on100press = () => {};
  const on500press = () => {};
  const {products,gainersData,walletBalance} = useSelector(store => store.mainapi);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image source={Icon.backw} style={styles.backimage} />
        </TouchableOpacity>
        <Text style={styles.addText}>Add Money</Text>
        <View></View>
      </View>
      <View style={styles.balanceView}>
        <Text style={styles.balance}>${walletBalance}</Text>
        <Text style={styles.balanceText}>Current Balace</Text>
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
      <TouchableOpacity style={styles.touchableDeposit} onPress={onDepositPress}>
        <Text style={styles.depositText}>Deposit ${money}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMoney;
