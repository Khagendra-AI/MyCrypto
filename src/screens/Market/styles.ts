import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: 'black',
    flex: 1,

    // paddingHorizontal:10,
  },
  subheader: {
    marginHorizontal: 9,
    marginVertical: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',

    backgroundColor: 'black',
  },
  headertext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  headerimage: {
    height: 20,
    width: 20,
  },
});
export default styles