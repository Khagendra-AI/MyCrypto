import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container:{
    marginVertical:15,
    backgroundColor:'black',
    width:SCREEN_WIDTH,
  },
  subcontainer:{
    flexDirection:'row',
    
    borderRadius:15,
    width:SCREEN_WIDTH,
   backgroundColor:'pink',
  },
  lowercontainer:{
    
    marginVertical:14,
    width:SCREEN_WIDTH,
    backgroundColor:'black',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  leftView:{
    borderRadius:15,
    padding:20,
    width:'90%',
    backgroundColor:'white',
    // height:10
  },
  rightView:{
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    width:'10%',
    backgroundColor:'#ff9999',
  },
  dataView:{
    
  },
  currentText:{
    color:'grey',
    fontSize:14,
  },
  priceText:{
    fontSize:25,
    fontWeight:'700',
  },
  pricechangeText:{
    marginTop:15,
    fontSize:15,
    fontWeight:'600',
   padding:5,
    backgroundColor:'red',
    // aling:'center',
    width:'22%',
    borderRadius:10,
    color:'white'
  },
  forwardImage:{
    width:20,
    height:20,
  },
  touchableForward:{
    padding:10,
    paddingHorizontal:15,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:'black',
    position:'absolute',
    top:'34%',
    right:'5%',
    zIndex:1,
  },
  bitlogo:{
    height:15,
    width:15,
  },
  buyText:{
    fontWeight:'600',
    marginHorizontal:5,
  },
  addText:{
    color:'#ADFF2F',
    fontWeight:'600',

  },
  touchableBuy:{
    borderRadius:10,
    alignItems:'center',
    padding:10,
    //paddingHorizontal:40,
    flexDirection:'row',
    justifyContent:'center',
    width:'49%',
    backgroundColor:'#ADFF2F',
  },
  touchableAdd:{
    padding:10,
    borderRadius:10,
    alignItems:'center',
    borderWidth:2,
    borderColor:'#ADFF2F',
    width:'49%',
    backgroundColor:'black'
  },
})
export default styles