import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import styles from './styles';  

const ForgotPassword = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    validateEmail();
  }, [email]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsButtonDisabled(!emailRegex.test(email));
  };

  const handleResetPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email has been sent!');
      navigation.navigate('LoginPage');  
    } catch (error) {
      console.error('Error sending password reset email:', error);
      Alert.alert('Error', 'Failed to send password reset email. Please try again.');
    }
  };

  return (
    <LinearGradient
      colors={["black", "#1e1e1e"]}  
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Forgot{'\n'}Password</Text>
      </View>

      <View
        style={[
          styles.inputContainer,
          email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            ? { borderColor: 'red' }
            : { borderColor: '#FF5733' }, 
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          placeholderTextColor={"#bbb"}  
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      {email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (
        <Text style={styles.errorText}>Invalid email format.</Text>
      ) : null}

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && { opacity: 0.6 }]}
        onPress={handleResetPassword}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createStyle}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.forgotText}>Remembered your password? Sign In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ForgotPassword;
