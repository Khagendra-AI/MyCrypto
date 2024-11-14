import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    flex: 1,
    justifyContent: 'flex-start',
  },
  item: {
    // padding: 10,
    marginHorizontal: 10,
    // backgroundColor: '#1e1e1f',
    //borderRadius: 8,
  },
  title: {
    color: 'grey',
    fontWeight: '500',
    fontSize: 16,
    padding:5,
  },
  isSelected:{
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    borderBottomWidth:1,
    borderBottomColor:'white',
    padding:5,
  },
});
export default styles