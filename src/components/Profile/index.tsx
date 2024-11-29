import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '../../assets';
import ProfileTile from '../ProfileTile';

const Profile = ({navigation}: {navigation: any}) => {
  const navigateAddMoney = () => {
    navigation.navigate('AddMoney');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Icon.backw} style={styles.backimage} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Image source={Icon.bell} style={styles.backimage} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoView}>
          <Image source={Icon.profileww} />
          <Text style={styles.nameText}>Devansh Verma</Text>
          <Text style={styles.numberText}>+917376982077</Text>
          <Text style={styles.mailText}>devansh.verma@appinventiv.com</Text>
        </View>
        <View style={styles.accountView}>
          <Text style={styles.accountText}>Account Information</Text>
          <Text style={styles.accountsubText}>
            Find all yout profile related information
          </Text>
        </View>
        <View style={styles.accountTiles}>
          <ProfileTile
            heading={'User Verification'}
            body={'Complete your KYC to buy, sell and withdraw'}
            photo={Icon.profileww}
            bcolor={'#6495ED'}
          />
          <ProfileTile
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
            heading={'Reports'}
            body={'Download your account statement'}
            photo={Icon.reports}
            bcolor={'#1e1e1f'}
          />
        </View>
        <TouchableOpacity style={styles.touchableLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
