import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH=Dimensions.get('screen').width
const SCREEN_HEIGHT=Dimensions.get('screen').height
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  header:{
    
    paddingVertical:20,
    height:SCREEN_HEIGHT*.2,
    backgroundColor:"#1e1e1f",
    flexDirection:'row',
    justifyContent:'space-between',
  },
  infoViewHeader:{
    alignItems:'center'
  },
  enterAmountView:{
    marginTop:'8%',
    width:SCREEN_WIDTH*.98,
  },
  crypNameText:{
    color:'white',
    fontSize:19,
    fontWeight:'600'
  },
  cryppriceText:{
    color:'grey',
    fontWeight:'500',
  },
  directAddView:{
    marginVertical:10,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  directAddText:{
    fontSize:16,
    borderRadius:8,
    padding:5,
    paddingHorizontal:20,
    color:'grey',
    backgroundColor:'#1e1e1f'
  },
  enterAmountText:{
    marginVertical:5,
    color:'grey'
  },
  textInput:{
    fontWeight:'400',
    fontSize:18,
    color:'white',
    borderRadius:10,
    borderColor:'#FAF9F6',
    borderWidth:.4,
    padding:18,
    backgroundColor:'#1e1e1f',
    
  },
  touchableDeposit:{
    borderRadius:10,
    marginTop:'5%',
    width:SCREEN_WIDTH*.98,
    padding:20,
    backgroundColor:'#DFFF00',
  },
  depositText:{
    fontWeight:'800',
  },
})
export default styles