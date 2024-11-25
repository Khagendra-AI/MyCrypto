import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH=Dimensions.get('screen').width
const styles = StyleSheet.create({
  container:{
    width:SCREEN_WIDTH,
    alignItems:'center',
    flex:1,
    backgroundColor:'black',

  },
  header:{
    width:SCREEN_WIDTH,
    alignItems:'center',
    marginTop:'10%',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:"#1e1e1f",
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
  },
  addText:{
    fontSize:20,
    color:'white',
    padding:30,
  },
  backimage:{
    height:30,
    width:30,
  },
  Touchablebackimage:{

  },
  balanceView:{
    marginTop:'5%',
    padding:20,
    borderRadius:20,
    width:SCREEN_WIDTH*.98,
    alignItems:'center',
    backgroundColor:'#FFFDD0'
  },
  balanceText:{
    marginTop:10,
    fontWeight:'500',
  },
  balance:{
    fontSize:22,
    fontWeight:'800',
  },
  enterAmountView:{
    marginTop:'8%',
    width:SCREEN_WIDTH*.98,
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