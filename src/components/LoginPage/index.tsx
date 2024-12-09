import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  StatusBar,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {getProductsAction} from '../../redux/config/configAction';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '../../assets';
import {styles} from './styles';
import {addLoginToken, addUserData} from '../../redux/config/configSlice';

const LoginPage = ({navigation}: any) => {
  const dispatch = useDispatch<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);


  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;

      dispatch(addLoginToken(user?.uid));
      const usersRef = firestore().collection('users').doc(user?.uid);

      usersRef
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          // console.log('usersRef', documentSnapshot);
          // setUserData(documentSnapshot.data());
          dispatch(addUserData(documentSnapshot.data()));
          console.log(documentSnapshot.data(),"home snapshop")
        } else {
          console.log('No such document!');
        }
      })
      .catch(error => {
        console.error('Error getting document:', error);
      });
      dispatch(getProductsAction())
        .unwrap()
        .then(() => {
          navigation.replace('BottomNav');
        })
        .catch(({err}: any) => {
          console.error('Error fetching products', err);
        });
    } catch (error) {
      Alert.alert('Login Error', 'Something went wrong. Please try again.');
    }
  };

  const isButtonDisabled = !email.trim() || !password.trim();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          placeholderTextColor="#B0B0B0"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.toggleEye} onPress={togglePassword}>
          {showPassword ? (
            <Image source={Icon.eye} style={styles.eyeIcon} />
          ) : (
            <Image source={Icon.eyeoff} style={styles.eyeIcon} />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && {opacity: 0.6}]}
        onPress={handleLogin}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.linkText}>Create an Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
