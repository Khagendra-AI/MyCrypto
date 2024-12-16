import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2980B9',
  },
  inputContainer: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#2980B9',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  createStyle: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 16,
    color: '#2980B9',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  toggleEye: {
    position: 'absolute',
    right: 15,
    top: '50%',
  },
  lastUpdatedContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  lastUpdatedText: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
  },
});

export default styles;
