import {
  FlatList,
  Image,
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
import {Icon} from '../../assets';

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
      cryptoIcon={Icon.crypto}
      price={Number(item.priceUsd ?? 0).toFixed(2)}
      priceChange={Number(item.changePercent24Hr ?? 0).toFixed(2)}
    />
  );
  // console.log(filteredCoins);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{width: '80%'}}>
          <TextInput
            placeholder="Search for coins"
            style={styles.searchbox}
            autoFocus={true}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.touchableCancelImage} onPress={() => setSearchQuery('')}>>
            <Image source={Icon.cancel} style={styles.cancelImage} />
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('Shiba Inu')}>
            <Text style={styles.trendingEleText}>Shiba Inu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('Dogecoin')}>
            <Text style={styles.trendingEleText}>Dogecoin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('ADA')}>
            <Text style={styles.trendingEleText}>ADA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('Solana')}>
            <Text style={styles.trendingEleText}>Solana</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('BitCoin')}>
            <Text style={styles.trendingEleText}>BitCoin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flatlistView}>
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
