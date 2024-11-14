import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT=Dimensions.get('screen').height
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container: {
    margin:5,
    padding : 9,
    height: SCREEN_HEIGHT*.17,
    width: SCREEN_WIDTH*.33,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: '#1e1e1f',
  },
  cryptoinfoView:{

    justifyContent :'space-between',
    flexDirection :'row',
  },
  cryptoNameView:{
    width:'69%',
   // backgroundColor : 'red',
  },
  cryptoIconView:{},
  cryptoPriceView:{

    //backgroundColor:'red',
    marginTop : '30%',
  },
  cryptoIcon:{
    height : 30,
    width : 30,
  },
  cryptoName:{
    color:'grey'
  },
  cryptoShortName:{
    color:'white',
  },
  price:{
    color :'white',
  },
  priceprcnt:{
    color :'red',
  },
});
export default styles
