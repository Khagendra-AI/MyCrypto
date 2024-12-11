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
import {Images} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsAction} from '../../redux/config/configAction';

const Splash = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch<any>();
  const {watchlistdata, token} = useSelector((store:any) => store.mainapi);
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (token=="") {
        navigation.replace('LoginPage');
      } else {
        dispatch(getProductsAction())
        .unwrap()
        .then(() => {
          navigation.replace('BottomNav');
        })
        .catch(({err}: any) => {
          console.error('Error fetching products', err);
        });

      }
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
