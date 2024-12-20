import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '../../assets';
import ProfileTile from '../ProfileTile';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {removeLoginToken, removeUserData, setBalanceZero} from '../../redux/config/configSlice';
import firestore, {firebase} from '@react-native-firebase/firestore';


const Profile = ({navigation}: {navigation: any}) => {
  const {userDetail, token, watchlistdata,walletBalance} = useSelector(
    (store:any) => store.mainapi,
  );

  const dispatch = useDispatch<any>();

  const navigateAddMoney = () => {
    navigation.navigate('AddMoney');
  };
  const navigateBankDetails = () => {
    navigation.navigate('BankDetails');
  };
  const navigateKYC = () => {
    navigation.navigate('KYC');
  };
  const navigateOrders= () => {
    navigation.navigate('Orders');
  };
  const handleLogout = async () => {
    try {
      await auth().signOut();
      dispatch(removeLoginToken(''));
      Alert.alert('Success', 'You have logged out successfully!');
      // console.log(watchlistdata,"////fuiwgevcawqy")
      const userId = token;
      const usersRef = firebase.firestore().collection('users');
      usersRef
        .doc(userId)
        .set(
          {
            favourites: watchlistdata || [] ,
            walletBalance:walletBalance
          },
          {merge: true},
        )
        .then(() => {
          console.log('Data saved');
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
      dispatch(removeUserData(''));
      dispatch(setBalanceZero(""));

      navigation.reset({
        index: 0,
        routes: [{name: 'LoginPage'}],
      });
    } catch (error) {
      Alert.alert('Error', 'There was a problem logging out.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Icon.backw} style={styles.backimage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Icon.bell} style={styles.backimage} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoView}>
          <Image source={Icon.profileww} />
          <Text style={styles.nameText}>{userDetail?.name}</Text>
          <Text style={styles.numberText}>{userDetail?.phone}</Text>
          <Text style={styles.mailText}>{userDetail?.email}</Text>
        </View>
        <View style={styles.accountView}>
          <Text style={styles.accountText}>Account Information</Text>
          <Text style={styles.accountsubText}>
            Find all yout profile related information
          </Text>
        </View>
        <View style={styles.accountTiles}>
          <ProfileTile
            navigateTo={navigateKYC}
            heading={'User Verification'}
            body={'Complete your KYC to buy, sell and withdraw'}
            photo={Icon.profileww}
            bcolor={'#6495ED'}
          />
          <ProfileTile
            navigateTo={navigateBankDetails}
            heading={'Bank Details'}
            body={
              'This account is used to facilitate all your deposits and withdrawals'
            }
            photo={Icon.bank}
            bcolor={'purple'}
          />
        </View>
        <View style={styles.normalTiles}>
          <ProfileTile
            navigateTo={navigateOrders}
            heading={'History'}
            body={'View your past transactions'}
            photo={Icon.history}
            bcolor={'#1e1e1f'}
          />
          <ProfileTile
            navigateTo={navigateAddMoney}
            heading={'Wallets'}
            body={'Check your wallet balance'}
            photo={Icon.wallet}
            bcolor={'#1e1e1f'}
          />
          <ProfileTile
            navigateTo={navigateAddMoney}
            heading={'Reports'}
            body={'Download your account statement'}
            photo={Icon.reports}
            bcolor={'#1e1e1f'}
          />
        </View>
        <TouchableOpacity style={styles.touchableLogout} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
