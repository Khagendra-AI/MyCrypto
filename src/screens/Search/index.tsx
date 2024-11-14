import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Search = ({navigation}:{navigation:any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput placeholder="Search for coins" style={styles.searchbox} autoFocus={true} />
        <TouchableOpacity
          style={styles.touchableCancel}
          onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.trendingView}>
        <View>
          <Text style={styles.trendingText}>Trending Now</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginRight: 40,
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#1e1e1f',
              margin: 5,
              // marginHorizontal: 5,
              // marginVertical: 5,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'grey'}}>Shiba Inu</Text>
          </View>
          <View
            style={{
              padding: 10,
              paddingHorizontal: 20,
              backgroundColor: '#1e1e1f',
              margin: 5,
              borderRadius: 10,
            }}>
            <Text style={{color: 'grey'}}>Dogecoin</Text>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: '#1e1e1f',
              margin: 5,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'grey'}}>PEPE</Text>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: '#1e1e1f',
              margin: 5,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'grey'}}>Solana</Text>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: '#1e1e1f',
              margin: 5,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'grey'}}>BitCoin</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
