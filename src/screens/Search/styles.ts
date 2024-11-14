import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  header:{
    alignItems:'center',
    padding:10,
    justifyContent:'space-between',
    flexDirection:'row',

  },
  searchbox:{
    borderRadius:10,
   padding:15,
    width:'80%',
    backgroundColor:'white',

  },
  touchableCancel:{},
  cancelText:{
    color:'#3E8EDE'
  },
  trendingView:{
    margin:9,
  },
  trendingText:{
    fontSize:19,
    fontWeight:'500',
    color:'grey',
  },
})
export default styles