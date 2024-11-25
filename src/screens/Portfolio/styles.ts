import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  header:{
    alignItems:'center',
    padding:10,
    paddingTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#d7f285',
  },
  portfolioText:{
    fontSize:25,
    fontWeight:'600',
  },
  orderText:{
    fontWeight:'400',
    color:'blue',
  },
  body:{
    marginVertical:25,
  },
  cryptosText:{
    color:'white',
    fontSize:18,
    margin:5,
    marginTop:20,

  },
  walletView:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    padding:10,
    backgroundColor:'#1e1e1f',

  },
  walletLeftView:{},
  walletRightView:{
    borderWidth:1,
    borderColor:'#B4C424',
    padding:5,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  balanceText:{
    fontSize:11,
    color:'grey',
    fontWeight:'500',
  },
  balance:{
    color:'white',
    fontSize:22,
    fontWeight:'800',
  },
  walletText:{
    fontSize:19,
    fontWeight:'400',
    color:'#B4C424'
  },
});
export default styles
