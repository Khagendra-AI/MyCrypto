import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    },
  container:{
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    flexDirection:'row',
    backgroundColor:'#daf28f',
    flex :1,
    justifyContent:'space-between',
    padding:10,
    paddingTop:20
  },
  leftView:{},
  rightView:{},
  lupperView:{
   
    marginVertical:15,
  },
  llowerView:{

    marginVertical:15,
  },
  rupperView:{
    alignItems:'flex-end',
    marginVertical:15,
  },
  rlowerView:{

    alignItems:'flex-end',
    marginVertical:15,
  },
  priceTypeText:{
    color:'grey',
    fontSize:12,

  },
  changePriceText:{
    color:'red',
     fontSize:18,
    fontWeight:'700'
  },
  priceText:{
    fontSize:20,
    fontWeight:'700'
  },
})
export default styles