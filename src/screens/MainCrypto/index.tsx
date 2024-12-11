import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import IndividualCryptoPortfolio from '../../components/IndividualCryptoPortfolio';
import MarketStats from '../../components/MarketStats';
import SimilarCrypto from '../../components/SimilarCrypto';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Chart from '../../components/Chart';
import {Icon} from '../../assets';
import {addWatchlist, removeWatchlist} from '../../redux/config/configSlice';
// import starimage from '../../assets/icons/star.png';
// import starbimage from '../../assets/icons/starb.png';
import Star from '../../components/Star';
import {SafeAreaView} from 'react-native-safe-area-context';
/**
 * import watchlistData;
 * loop on watchlistData ==>  findIndex ==> item.id === ele.id ==> isStarred: false/true
 * toggle ==> action dispatch ==> payload: { ...item , isStarred: false/true}
 */

const MainCrypto = ({navigation}: {navigation: any}) => {
  const params: any = useRoute()?.params as {
    item: {
      id: any;
      rank: any;
      symbol: any;
      changePercent24Hr: any;
      marketCapUsd: any;
      priceUsd: any;
      name: any;
      supply: any;
      item: {
        // item:any
        id: any;
        supply: any;
        symbol: any;
        rank: any;
        priceUsd: any;
        marketCapUsd: any;
        changePercent24Hr: any;
      };
    };
  };
  const dispatch = useDispatch();
  const {watchlistdata} = useSelector((store: any) => store.mainapi);
  const [star, setstar] = useState(false);
  const [staricon, setstaricon] = useState(Icon.star);
  const [mainindex, setmainindex] = useState(-1);
  const navigateWithIndex = (index: any) => {
    navigation.navigate('Market', {index});
  };
  const croreFunction = (number: number) => {
    let crore = number / 10000000;
    return crore.toFixed(2);
  };
  const navigateMainCrypto = () => {
    navigation.navigate('MainCrypto', {});
  };
  const onStartPress = () => {
    if (star) {
      dispatch(removeWatchlist(mainindex));
      setstaricon(Icon.star);
      setstar(false);
    } else {
      dispatch(addWatchlist({...params, isStarred: true}));
      setstaricon(Icon.starb);
      setstar(true);
    }
  };

  const checkWatchlist = () => {
    (watchlistdata ?? [])?.map((item: any, index: any) => {
      if (item.item.id === params?.item?.id || params?.item?.item?.id) {
        setstar(true);
        setstaricon(Icon.starb);
        setmainindex(index);
      }
    });
  };
  useEffect(() => {
    checkWatchlist();
    console.log('ho gya run', watchlistdata);
  }, []);

  return (
    <SafeAreaView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.touchableBack}
            onPress={() => navigation.goBack()}>
            <Image source={Icon.backw} style={styles.backimage} />
          </TouchableOpacity>
          <View style={styles.headerCryptoInfo}>
            <Text style={styles.cryptoNameHeader}>
              {params.item?.symbol || params.item.item?.symbol}
            </Text>
            <Text
              style={[
                styles.priceChangeText,
                {
                  color:
                    params.item?.changePercent24Hr < 0 ||
                    params.item.item?.changePercent24Hr < 0
                      ? 'red'
                      : 'green',
                },
              ]}>
              {' '}
              {params.item?.changePercent24Hr != null
                ? parseFloat(params.item?.changePercent24Hr).toFixed(2)
                : parseFloat(params.item.item?.changePercent24Hr).toFixed(2)}
              %
            </Text>
          </View>
          {/* <TouchableOpacity style={styles.touchableStar} onPress={onStartPress}>
            <Image source={staricon} style={styles.starimage} />
          </TouchableOpacity> */}
          <Star onStartPress={onStartPress} staricon={staricon} />
        </View>
        <ScrollView>
          <View style={styles.currentPriceView}>
            <Text style={[styles.currentPrice]}>Current Price</Text>
            <Text
              style={[
                styles.Price,
                {
                  color:
                    params.item?.changePercent24Hr < 0 ||
                    params.item.item?.changePercent24Hr < 0
                      ? 'red'
                      : 'green',
                },
              ]}>
              $
              {params.item?.priceUsd != null
                ? parseFloat(params.item?.priceUsd).toFixed(3)
                : parseFloat(params.item.item?.priceUsd).toFixed(3)}
            </Text>
          </View>
          <Chart
            chartColor={
              params.item?.changePercent24Hr ||
              params.item.item?.changePercent24Hr
            }
            price={params.item?.priceUsd || params.item.item?.priceUsd}
          />
          <IndividualCryptoPortfolio
            shortName={params.item?.symbol}
            cryptoName={params.item?.name}
          />
          <MarketStats
            supply={croreFunction(
              params.item?.supply || params.item.item?.supply,
            )}
            mCap={croreFunction(
              params.item?.marketCapUsd || params.item.item?.marketCapUsd,
            )}
            mRank={params.item?.rank || params.item.item?.rank}
          />
          {/* <SimilarCrypto
            navigateWatchlist={navigateWithIndex}
            navigation={navigation}
            navigateMainCrypto={navigateMainCrypto}
          /> */}
        </ScrollView>
      </View>
      <View style={styles.footerView}>
        <TouchableOpacity style={styles.touchableBellImage}>
          <Image source={Icon.bell} style={styles.bellimage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableBuy}
          onPress={() =>
            navigation.navigate('BuyPage', {
              item: params.item || params.item?.item,
            })
          }>
          <Text style={styles.buyText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableSell}
          onPress={() =>
            navigation.navigate('SellPage', {
              item: params.item || params.item?.item,
            })
          }>
          <Text style={styles.sellText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainCrypto;
