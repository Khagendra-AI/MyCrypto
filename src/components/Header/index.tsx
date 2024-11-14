import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from '../../assets';
import styles from './styles';

const Header = ({navigateSearch}:{navigateSearch:any}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.leftheader}>
          <TouchableOpacity >
            <Image source={Icon.profileww} style={styles.profileicon} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightheader}>
          <TouchableOpacity style={styles.swiggytouch}>
            <Image source={Icon.swiggy} style={styles.swiggy} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerimage}>
            <Image source={Icon.gift} style={styles.headericon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerimage} onPress={navigateSearch}>
            <Image source={Icon.searchw} style={styles.headericon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
