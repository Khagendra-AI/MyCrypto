import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import BottomNav from './RootNavigation/Index';
import Home from '../screens/Home';

import MainCrypto from '../screens/MainCrypto';
import AddMoney from '../components/AddMoney';
import BuyPage from '../components/BuyPage';
import SellPage from '../components/SellPage';
import Profile from '../components/Profile';
import Splash from '../screens/Splash';
import RewardScreen from '../screens/RewardScreen';
import LoginPage from '../components/LoginPage';
import CreateAccount from '../components/CreateAccount';
import ForgotPassword from '../screens/ForgotPassword';
import Search from '../screens/Search';
import BankDetails from '../screens/BankDetails';
import KYC from '../screens/KYC';
import Orders from '../screens/Orders';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name="MainCrypto"
          component={MainCrypto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddMoney"
          component={AddMoney}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuyPage"
          component={BuyPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SellPage"
          component={SellPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="KYC"
          component={KYC}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BankDetails"
          component={BankDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RewardScreen"
          component={RewardScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
