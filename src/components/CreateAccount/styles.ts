import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',   
  },
  header: {
    alignItems:"center",
    marginBottom:"10%", 
  },
  title: {
    color: '#FFFFFF',  
    fontSize: 40,

  },
  inputContainer: {
    backgroundColor: '#34495E',  
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
  toggleEye: {
    position: 'absolute',
    right: 0,
    padding: 12,
  },
});

export default styles;
