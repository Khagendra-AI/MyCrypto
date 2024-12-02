import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import { Icon } from '../../assets';

const CreateAccount = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    validateFields();
  }, [email, password]);

  const validateFields = () => {
    let emailValid = validateEmail(email);
    let passwordValid = password.length >= 6;

    setIsButtonDisabled(!(emailValid && passwordValid));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCreateAccount = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('Account created for user:', userCredential.user);
      navigation.navigate('LoginPage');
    } catch (err: any) {
      console.error('Account creation error:', err);
    }
  };

  return (
    <LinearGradient
      colors={["black", "#1e1e1e"]}  
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create{'\n'}Account</Text>
      </View>

      <View
        style={[
          styles.inputContainer,
          email !== '' && !validateEmail(email)
            ? {borderColor: 'red'}
            : {borderColor: '#FF5733'},  
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={"#bbb"}  
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      {email !== '' && !validateEmail(email) ? (
        <Text style={styles.errorText}>Invalid email format.</Text>
      ) : null}

      <View
        style={[
          styles.inputContainer,
          password !== '' && password.length < 6
            ? {borderColor: 'red'}
            : {borderColor: '#FF5733'}, 
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={"#bbb"}  
          secureTextEntry={showPassword}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.toggleEye} onPress={togglePassword}>
          {showPassword ? (
            <Image
              source={Icon.eye}
            />
          ) : (
            <Image
              source={Icon.eyeoff}
            />
          )}
        </TouchableOpacity>
      </View>
      {password !== '' && password.length < 6 ? (
        <Text style={styles.errorText}>Password must be at least 6 characters.</Text>
      ) : null}

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && {opacity: 0.6}]}
        onPress={handleCreateAccount}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createStyle}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.forgotText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CreateAccount;
