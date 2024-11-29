import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashalterate: {
    height : SCREEN_HEIGHT*.5,
    width  : SCREEN_WIDTH*.5,
    position: 'absolute',
  },
  activityView:{
    position:"absolute",
    // backgroundColor:'red',
    bottom:SCREEN_HEIGHT*.2,

  },
  // title: {
  //   fontSize: 34,
  //   color: '#98c6e3',
  //   marginBottom: 20,
  // },
  // splashimage: {
  //   resizeMode: 'cover',
  //   height: '110%',
  //   width: '110%',
  // },
    // top: SCREEN_HEIGHT * 0.35,
    // left: SCREEN_WIDTH * 0.25,
  
  // indicator: {position: 'absolute'},
  // splashgif:{
  //   height : 200,
  //   width  : 200,
  //   backgroundColor:'black'
  // }
})
export default styles