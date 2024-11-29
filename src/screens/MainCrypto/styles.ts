import {Dimensions, StyleSheet} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: '13%',
  },
  header: {
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 1,
    top: 0,
    width: '100%',
  },
  headerCryptoInfo: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    backgroundColor: '#1e1e1f',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  backimage: {
    height: 35,
    width: 35,
  },
  starimage: {
    // backgroundColor:'red',
    height: 25,
    width: 25,
  },
  cryptoNameHeader: {
    color: 'white',
    fontWeight: '600',
  },
  priceChangeText: {
    marginLeft: 4,
    // width:'30%',
  },
  container: {
    flex: 1,
    //  alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  footerView: {
    padding:10,
    height: '12%',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.98,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  bellimage: {
    height: 20,
    width: 20,
  },
  touchableBellImage: {
    backgroundColor: '#1e1e1f',
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 15,
    borderRadius: 10,
  },
  touchableBuy: {
    backgroundColor: '#ADFF2F',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ADFF2F',
    paddingHorizontal: '15%',
    borderRadius: 10,
  },
  touchableSell: {
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: '15%',
    borderRadius: 10,
  },
  buyText: {
    fontWeight: '700',
    color: 'black',
  },
  sellText: {
    fontWeight: '700',
    color: 'black',
  },
});
export default styles;
