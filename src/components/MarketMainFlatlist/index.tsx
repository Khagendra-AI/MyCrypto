import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Tile from '../Tile';
import data from '../../../data';
import HorizontalTile from '../HorizontalTile';
import styles from './styles';
import {useSelector} from 'react-redux';
import {newapiData} from '../../../newData';
import {Icon} from '../../assets';

const MarketMainFlatlist = ({
  index,
  navigateMainCrypto,
  navigation,
}: {
  index: any;
  navigateMainCrypto: any;
  navigation: any;
}) => {
  const {products, watchlistdata} = useSelector((store:any) => store.mainapi);
  const apiData = products?.data;
  const positiveGainers = apiData?.filter(
    (item: any) => item.changePercent24Hr > 0,
  );
  const psortedGainers = positiveGainers.sort(
    (a: any, b: any) => b.changePercent24Hr - a.changePercent24Hr,
  );
  const negativeGainers = apiData.filter(
    (item: any) => item.changePercent24Hr < 0,
  );
  const nsortedGainers = negativeGainers.sort(
    (a: any, b: any) => a.changePercent24Hr - b.changePercent24Hr,
  );
  const newlyAdded: any = newapiData;

  const flatListRef: any = useRef(null);

  const [selectedId, setSelectedId] = useState('1');
  const [dataset, setDataSet] = useState(data);
  const handlePress = (id: any) => {
    setSelectedId(id);
  };
  const headerListData = [
    {id: '1', title: 'All'},
    {id: '2', title: 'Top Gainers'},
    {id: '3', title: 'Top Losers'},
    {id: '4', title: 'Watchlist'},
    {id: '5', title: 'Newly Listed Coins'},
    {id: '6', title: 'Ethereum Alternatives'},
    {id: '7', title: 'DeFi'},
    {id: '8', title: 'Metaverse'},
    {id: '9', title: 'AI & Big Data'},
    {id: '10', title: 'Large Cap'},
    {id: '11', title: 'Mid Cap'},
    {id: '12', title: 'Small Cap'},
    {id: '13', title: 'Innovation Zone'},
    {id: '14', title: 'All Time Favourites'},
  ];

  useEffect(() => {
    setSelectedId(
      (index + 1)?.toString() === 'undefined' ? '1' : (index + 1)?.toString(),
    );
    newData('', index);
    flatListRef.current.scrollToOffset({offset: 15, animated: true});
  }, [index, watchlistdata]);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const isSelected = item.id === selectedId;
    return (
      <View style={styles.item}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            newData(item, index), handlePress(item.id);
          }}>
          <Text style={[styles.title, isSelected && styles.isSelected]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderdataitem = ({item, index}: {item: any; index: number}) => (
    <HorizontalTile
      navigateToCrypto={navigation}
      screenName={'MainCrypto'}
      navigateMainCrypto={{
        ...navigateMainCrypto,
        tileId: item.id ?? '',
      }}
      item={item || item.item}
      cryptoShortName={item.symbol || item.item?.symbol}
      cryptoName={item.name || item.item?.name}
      cryptoIcon={Icon.crypto}
      price={Number(item.priceUsd ?? item.item?.priceUsd).toFixed(2)}
      priceChange={Number(
        item.changePercent24Hr ?? item.item?.changePercent24Hr,
      ).toFixed(2)}
    />
  );

  const newData = (item: any, index: number) => {
    switch (index) {
      case 0:
        setDataSet(apiData);
        return;
      case 1:
        setDataSet(psortedGainers);
        return;
      case 2:
        setDataSet(nsortedGainers);
        return;
      case 3:
        setDataSet(watchlistdata);
        return;
      case 4:
        setDataSet(newlyAdded);
        return;
      default:
        setDataSet([]);
        return [];
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        ref={flatListRef}
        bounces={false}
        data={headerListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        bounces={false}
        data={dataset}
        renderItem={renderdataitem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MarketMainFlatlist;
