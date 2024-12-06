import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const Star = ({onStartPress, staricon}:{onStartPress:any, staricon:any}) => {
  return (
    <TouchableOpacity style={styles.touchableStar} onPress={onStartPress}>
      <Image source={staricon} style={styles.starimage} />
    </TouchableOpacity>
  );
};

export default Star;


