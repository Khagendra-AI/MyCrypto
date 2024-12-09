import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import styles from './styles';

const Orders = ({ navigation }: any) => {
  const handleBrowseProducts = () => {

    navigation.navigate('BottomNav'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>No Orders Found</Text>
        <Text style={styles.message}>
          You haven't placed any orders yet. Browse products and make your first order.
        </Text>
        {/* <TouchableOpacity style={styles.button} onPress={handleBrowseProducts}>
          <Text style={styles.buttonText}>Browse Products</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default Orders;
