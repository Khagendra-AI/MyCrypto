import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { addLoginData } from '../../redux/config/configSlice';
import { getProductsAction } from '../../redux/config/configAction';

const LoginPage = ({navigation}:{navigation:any}) => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getProductsAction())
      .unwrap()
      .then((res: any) => {
      })
      .catch();
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const handleLogin = () => {
    if (validateForm()){
      dispatch(addLoginData(formData))
      navigation.replace("BottomNav")
    }

  };

  const handleSignUp = () => {

  };

  const handleInputChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '' };

    // Name validation (required)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation (required and valid email format)
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Phone validation (required and valid phone format)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    setErrors(newErrors); // Update errors only when validation runs
    return isValid;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          placeholderTextColor="#aaa"
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          placeholderTextColor="#aaa"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          keyboardType="email-address"
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          placeholderTextColor="#aaa"
          value={formData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
          keyboardType="phone-pad"
        />
         {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Do not have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginPage;
