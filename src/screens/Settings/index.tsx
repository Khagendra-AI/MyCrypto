import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Header';

const Settings = ({navigation}:{navigation:any}) => {
  const navigateSearch=()=>{
    navigation.navigate('Search')
  }
  return (
    <ScrollView style={styles.container} bounces={false}>
      <Header navigateSearch={navigateSearch}/>
    </ScrollView>
  );
};

export default Settings;


