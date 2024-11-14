import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  // maincontainer: {
  //   flex: 1,
  //   // justifyContent:'center',
  //   backgroundColor: 'yellow',
  //   justifyContent:'flex-start',
  //  // alignItems: 'center',
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    padding: 15,
    height: SCREEN_HEIGHT * 0.1,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#1e1e1f',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    flexDirection: 'row',
  },
  infoview: {
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  infomain: {
    width: '50%',
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  priceView: {
    alignItems: 'flex-end',
    // margin:15,
  },
  cryptoIcon: {
    // backgroundColor:'red',
    height: 40,
    width: 40,
  },
  cryptoName: {
    fontSize: 14,
    color: 'grey',
  },
  cryptoShortName: {
    marginBottom: 5,
    fontSize: 15,
    color: 'white',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  priceprcnt: {
    color: 'red',
  },
});
export default styles