import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maincontainer:{
    marginVertical:9,
    backgroundColor:'black',
  },
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:5,
    backgroundColor:'black',
  },
  subcontainer:{
    borderRadius:10,
    paddingHorizontal :14,
    justifyContent:'center',
    alignItems:'center',
   /// backgroundColor:'#1e1e1f',
  },
  explore1: {
    borderRadius:20,
    height: 60,
    width: 60,
    backgroundColor:"blue",
  },
  explore2: {
    borderRadius:20,
    height: 60,
    width: 60,
    backgroundColor:"red",
  },
  explore3: {
    borderRadius:20,
    height:60,
    width:60,
    backgroundColor:"green",
  },
  explore4: {
    borderRadius:20,
    height:60,
    width:60,
    backgroundColor:"yellow",
  },
  mainexploretext:{
    fontSize:19,
    color : 'white',
    fontWeight: '600',
    margin:5,
    marginBottom : 15,
  },
  exploretext:{
    marginVertical:4,
    color : '#D0D0D0',
  },
  images:{
    borderRadius:10,
    backgroundColor:'black',
    height:60,
    width:60,
  },
});
export default styles