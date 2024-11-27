import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searchbox: {
    borderRadius: 10,
    padding: 15,
    width: '80%',
    backgroundColor: 'white',
  },
  touchableCancel: {},
  cancelText: {
    color: '#3E8EDE',
  },
  trendingView: {
    margin: 9,
  },
  trendingText: {
    fontSize: 19,
    fontWeight: '500',
    color: 'grey',
  },
  trendingTextView: {
    padding: 10,
    backgroundColor: '#1e1e1f',
    margin: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  trendingSubView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 40,
  },
  trendingEleText:{
    color: 'grey'
  },
});
export default styles;
