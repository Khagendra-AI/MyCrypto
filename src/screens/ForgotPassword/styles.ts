import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  header: {
    marginBottom: '10%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
  },
  inputContainer: {
    marginVertical: '2%',
    backgroundColor: '#34495E',
    borderRadius: 15,
    padding: 3,

    marginHorizontal: 15,
    borderWidth: 1,
    height: 50,
  },
  textInput: {
    color: '#FFFFFF',
    fontSize: 16,
    padding: 13,
  },
  button: {
    backgroundColor: '#2980B9',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#2980B9',
    textAlign: 'center',
    padding: 5,
    fontSize: 14,
  },
  createStyle: {
    margin: 18,
    borderColor: '#2980B9',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
