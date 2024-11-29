import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Icon } from '../../assets';

const RewardScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>

      <Image
        source={Icon.medal} 
        style={styles.image}
      />
      
      <Text style={styles.title}>No Reward Yet</Text>
      <Text style={styles.subtitle}>
        You haven't earned any rewards at the moment. Keep going!
      </Text>

      {/* Go Back Button */}
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RewardScreen;
