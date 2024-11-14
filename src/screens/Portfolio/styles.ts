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
});
export default styles
