import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH=Dimensions.get('screen').width

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    width:SCREEN_WIDTH,
   // padding:5,

  },
  subcontainer:{
    paddingVertical:25,
    alignSelf:'center',
    width:SCREEN_WIDTH*.98,
    backgroundColor:'#1e1e1f',
    borderRadius:10,
    padding:15,
  },
  mainHeading:{
    marginLeft:4,
    color:'white',
    fontSize:19,
    fontWeight:'500',
    marginVertical:10,
  },
  topView:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  middleView:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  bottomView:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  horizontalLine:{
    borderBottomWidth:.4,
    borderColor:'grey',
    marginVertical:15,
  },
  headingText:{
    color:'grey',
  },
  normalText:{
    fontSize:16,
    fontWeight:'500',
    color:'white',
  },
})
export default styles