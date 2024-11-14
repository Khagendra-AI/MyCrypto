import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    justifyContent:'space-between',
    backgroundColor: 'black',
    // flex:1,
    flexDirection: 'row',
  },
  leftheader:{
    marginHorizontal:10,
    justifyContent:'center',
   // backgroundColor: 'red'
  },
  rightheader:{
    flexDirection:'row',
   // backgroundColor:'red',
    justifyContent:'center',
  },
  headericon:{
    height:15,
    width:15,
  },
  headerimage:{
    margin:4,
    borderWidth:1,
    borderColor:'white',
    padding:8,
    borderRadius:40,
  },
  profileicon:{
    height:30,
    width:30,
  },
  swiggytouch:{
     backgroundColor:'#ffdf00',
    alignSelf:'center',
    height:35,
    width:50,
    borderRadius:40,
    marginHorizontal:5,
    //paddingHorizontal:5,
  },
  swiggy:{
    paddingBottom:20,
resizeMode:"cover",
    height:50,
    width:50,
    // backgroundColor:"green"
  },

});
export default styles
