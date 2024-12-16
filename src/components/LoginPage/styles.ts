import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    backgroundColor: 'black',  
  },
  header: {
    marginBottom: 40,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#34495E',  
    borderRadius: 12,
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 55,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2980B9',  
  },
  textInput: {
    paddingRight:'8%',
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 5,
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
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  linkButton: {
    marginVertical: 10,
  },
  linkText: {
    color: '#2980B9',  
    fontSize: 14,
    fontWeight: 'bold',
  },
  toggleEye: {
    position: 'absolute',
    right: 15,
    top: '35%',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#B0B0B0',  
  },
});
