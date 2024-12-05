import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import styles from './styles';
import { Icon } from '../../assets';
import firestore from '@react-native-firebase/firestore';

const CreateAccount = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    validateFields();
  }, [email, password, name]);

  const validateFields = () => {
    let emailValid = validateEmail(email);
    let passwordValid = password.length >= 6;
    let nameValid = name.trim().length > 0;   

    setIsButtonDisabled(!(emailValid && passwordValid && nameValid));
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
      // console.log(userCredential.user,"///")
      if (userCredential) {
        const userId = userCredential.user.uid
        const usersRef = firebase.firestore().collection('users');
    
        usersRef.doc(userId).set({
          name: {name},
          email: {email},
        })
        .then(() => {
          console.log('User data successfully written!');
        })
        .catch(error => {
          console.error('Error writing document:', error);
        });
      } else {
        // User is signed out
      }
      // const userRef = firestore().collection('users'); 
      // await userRef.add({
      //   name: name,
      //   email: email,    
      //   createdAt: firestore.FieldValue.serverTimestamp(),
      // });

      console.log('Account created for user:', userCredential.user);
      navigation.navigate('LoginPage');
    } catch (err: any) {
      Alert.alert(
        'Account Creation Failed',
        err.message || 'An error occurred while creating your account. Please try again.',
        [{ text: 'OK' }],
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
      </View>


      <View
        style={[
          styles.inputContainer,
          name !== '' && name.trim().length === 0
            ? { borderColor: 'red' }
            : { borderColor: '#2980B9' },
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          placeholderTextColor={"#bbb"}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      {name !== '' && name.trim().length === 0 ? (
        <Text style={styles.errorText}>Name cannot be empty.</Text>
      ) : null}


      <View
        style={[
          styles.inputContainer,
          email !== '' && !validateEmail(email)
            ? { borderColor: 'red' }
            : { borderColor: '#2980B9' },
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
            ? { borderColor: 'red' }
            : { borderColor: '#2980B9' },
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
            <Image source={Icon.eye} />
          ) : (
            <Image source={Icon.eyeoff} />
          )}
        </TouchableOpacity>
      </View>
      {password !== '' && password.length < 6 ? (
        <Text style={styles.errorText}>Password must be at least 6 characters.</Text>
      ) : null}


      <TouchableOpacity
        style={[styles.button, isButtonDisabled && { opacity: 0.6 }]}
        onPress={handleCreateAccount}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.createStyle}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.forgotText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccount;
