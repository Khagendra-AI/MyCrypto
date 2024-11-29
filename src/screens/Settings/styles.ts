import {Dimensions, StyleSheet} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    alignItems:'center',
    height: SCREEN_HEIGHT * 0.09,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backimage: {
    height: 25,
    width: 25,
  },
  infoView:{
    alignItems:'center',
  },
  nameText:{
    marginTop:'4%',
    fontSize:18,
    fontWeight:'500',
    color:'white'
  },
  numberText:{
    marginTop:5,
    color:'white'
  },
  mailText:{
    marginTop:5,
    color:'grey',
  },
  accountView:{
    marginTop:'10%',
  },
  accountText:{
    fontWeight:'500',
    fontSize:17,
    color:'white'
  },
  accountsubText:{
    marginVertical:4,
    color:'grey',
  },
  accountTiles:{},
  normalTiles:{
    marginTop:'3%',
  },
  logoutText:{
    color:'#00FFFF'
  },
  touchableLogout:{
    padding:20,
    width:SCREEN_WIDTH,
    backgroundColor:"#1e1e1f",
    alignItems:'center',
    borderRadius:10,
    marginVertical:10,
  },
});
export default styles;
