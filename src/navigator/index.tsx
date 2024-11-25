import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import BottomNav from './RootNavigation/Index';
import Home from '../screens/Home';
import Search from '../screens/Search';
import MainCrypto from '../screens/MainCrypto';
import AddMoney from '../components/AddMoney';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown:false}} />
        <Stack.Screen name="Search" component={Search}  options={{headerShown:false}} />
        <Stack.Screen name="MainCrypto" component={MainCrypto}  options={{headerShown:false}} />
        <Stack.Screen name="AddMoney" component={AddMoney}  options={{headerShown:false}} />
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
