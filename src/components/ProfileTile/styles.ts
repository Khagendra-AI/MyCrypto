import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT=Dimensions.get('screen').height
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#1e1e1f',
    height:SCREEN_HEIGHT*.13,
    borderRadius:10,
    padding:15,
    marginVertical:5,
  },
  rightView:{},
  leftView:{
    flexDirection:'row',
  },
  leftSubview:{
    marginLeft:10,
   // backgroundColor:'red',
    width:"70%"
  },
  headingText:{
    marginTop:5,
    fontWeight:'700',
    fontSize:17,
    color:'white'
  },
  bodyText:{
    marginVertical:10,
    color:'white'
  },
  rightImage:{
    height:25,
    width:25
  },
})
export default styles