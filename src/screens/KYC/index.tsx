import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import styles from './styles';

const KYC = ({ navigation }: any) => {
  const handleTryAgain = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>KYC Not Available</Text>
        <Text style={styles.message}>
          The KYC (Know Your Customer) details are currently unavailable. Please try again later.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleTryAgain}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default KYC

