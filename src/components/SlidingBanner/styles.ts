import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT=Dimensions.get('screen').height
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginVertical:9,
  },
  itemContainer:{
    // backgroundColor:'red',
    marginHorizontal:5,

  },
  image:{
    borderRadius:10,
    resizeMode:'cover',
    height:SCREEN_HEIGHT*.2,
    width:SCREEN_WIDTH*.4,
  },
});
export default styles