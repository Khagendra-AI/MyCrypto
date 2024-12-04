// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import styles from './styles';
import { Images } from '../../assets';




const Splash = ({navigation}:{navigation:any}) => {
  useEffect(() => {
    const timer = setTimeout(async () => {
      navigation.replace('LoginPage');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <Image
        resizeMode="contain"
        source={Images.splashimage}
        style={styles.splashalterate}
      />
      <View style={styles.activityView}>
      <ActivityIndicator size="large" color="white" />
      </View>
      

    </View>
  );
};


 
export default Splash;