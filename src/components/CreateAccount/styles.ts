import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',   
  },
  header: {
    left: 20,
    marginBottom: 20, 
  },
  title: {
    color: '#FF5733',  
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
  },
  inputContainer: {
    backgroundColor: '#1e1e1e',  
    borderRadius: 15,
    padding: 3,
    marginVertical: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    height: 50,
  },
  textInput: {
    color: '#FFFFFF',  
    fontSize: 16,
    padding: 9,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#FF5733', 
    borderRadius: 30,
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
    color: '#FF5733',   
    textAlign: 'center',
    padding: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  createStyle: {
    margin: 18,
    borderColor: '#FF5733',  
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  toggleEye: {
    position: 'absolute',
    right: 0,
    padding: 12,
  },
});

export default styles;
