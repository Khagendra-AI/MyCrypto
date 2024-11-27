import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import HorizontalTile from '../../components/HorizontalTile';

const Search = ({
  index,
  navigateMainCrypto,
  navigation,
}: {
  index: any;
  navigateMainCrypto: any;
  navigation: any;
}) => {
  const {products} = useSelector(store => store.mainapi);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCoins = () => {
    if (!(searchQuery.length > 2)) {
      return [];
    } else {
      return products.data?.filter(
        coin =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
  };
  const renderdataitem = ({item, index}: {item: any; index: number}) => (
    <HorizontalTile
      navigateToCrypto={navigation}
      screenName={'MainCrypto'}
      navigateMainCrypto={{
        ...navigateMainCrypto,
        tileId: item.id ?? '',
      }}
      item={item}
      cryptoShortName={item.symbol}
      cryptoName={item.name}
      cryptoIcon={item.cryptoIcon}
      price={Number(item.priceUsd ?? 0).toFixed(2)}
      priceChange={Number(item.changePercent24Hr ?? 0).toFixed(2)}
    />
  );
  console.log(filteredCoins);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Search for coins"
          style={styles.searchbox}
          autoFocus={true}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
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
        <View style={styles.trendingSubView}>
          <View style={styles.trendingTextView}>
            <Text style={styles.trendingEleText}>Shiba Inu</Text>
          </View>
          <View style={styles.trendingTextView}>
            <Text style={styles.trendingEleText}>Dogecoin</Text>
          </View>
          <View style={styles.trendingTextView}>
            <Text style={styles.trendingEleText}>PEPE</Text>
          </View>
          <View style={styles.trendingTextView}>
            <Text style={styles.trendingEleText}>Solana</Text>
          </View>
          <View style={styles.trendingTextView}>
            <Text style={styles.trendingEleText}>BitCoin</Text>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          bounces={false}
          data={filteredCoins()}
          renderItem={renderdataitem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
