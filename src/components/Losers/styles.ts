import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginVertical: 9,
  },
  subcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewText: {
    color: '#00FFFF', fontWeight: '600', margin: 5, fontSize: 14
  },
  losersText: {
    color: 'white',
    fontWeight: '600',
    margin: 5,
    fontSize: 19,
  },

  touchableViewall: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 50,
    backgroundColor: '#1e1e1f',
  },
});
export default styles;
