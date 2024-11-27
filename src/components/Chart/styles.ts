import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container:{
    width:SCREEN_WIDTH,
    // flex:1,
    backgroundColor: 'black'
  },
})
export default styles