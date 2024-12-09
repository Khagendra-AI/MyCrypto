import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';

const BankDetails = ({ navigation, route }: any) => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [accountType, setAccountType] = useState('');
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  useEffect(() => {
    const fetchBankDetails = async () => {
      const userId = firebase.auth().currentUser?.uid;
      if (userId) {
        try {
          const bankDetailsRef = firestore()
            .collection('users')
            .doc(userId)
            .collection('bankDetails')
            .limit(1); 
          
          const snapshot = await bankDetailsRef.get();
          if (!snapshot.empty) {
            const bankDetails = snapshot.docs[0].data();
            setBankName(bankDetails.bankName);
            setAccountNumber(bankDetails.accountNumber);
            setRoutingNumber(bankDetails.routingNumber);
            setAccountType(bankDetails.accountType);
            setLastUpdated(bankDetails.lastUpdated?.toDate()?.toLocaleString() || null); 
          }
        } catch (error) {
          console.error('Error fetching bank details:', error);
        }
      }
    };

    fetchBankDetails();
  }, []);

  useEffect(() => {
    validateFields();
  }, [bankName, accountNumber, routingNumber, accountType]);

  const validateFields = () => {
    let bankNameValid = bankName.trim().length > 0;
    let accountNumberValid = accountNumber.trim().length >= 10;
    let routingNumberValid = routingNumber.trim().length === 9;
    let accountTypeValid = accountType.trim().length > 0;

    setIsButtonDisabled(!(bankNameValid && accountNumberValid && routingNumberValid && accountTypeValid));
  };

  const handleSaveBankDetails = async () => {
    try {
      const userId = firebase.auth().currentUser?.uid;
      if (!userId) {
        throw new Error('User not authenticated');
      }

      const bankDetailsRef = firestore().collection('users').doc(userId).collection('bankDetails');


      const snapshot = await bankDetailsRef.get();
      if (snapshot.empty) {
       
        await bankDetailsRef.add({
          bankName,
          accountNumber,
          routingNumber,
          accountType,
          lastUpdated: firestore.FieldValue.serverTimestamp(), 
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
      } else {
        const docId = snapshot.docs[0].id;
        await bankDetailsRef.doc(docId).update({
          bankName,
          accountNumber,
          routingNumber,
          accountType,
          lastUpdated: firestore.FieldValue.serverTimestamp(), 
          updatedAt: firestore.FieldValue.serverTimestamp(),
        });
      }

      console.log('Bank details successfully saved!');
      Alert.alert('Success', 'Bank details saved successfully!', [{ text: 'OK' }]);
      navigation.goBack();
    } catch (err: any) {
      Alert.alert(
        'Error',
        err.message || 'An error occurred while saving bank details. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Enter Bank Details</Text>
      </View>

      <View
        style={[
          styles.inputContainer,
          bankName !== '' && bankName.trim().length === 0
            ? { borderColor: 'red' }
            : { borderColor: '#2980B9' },
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Bank Name"
          placeholderTextColor="#bbb"
          value={bankName}
          onChangeText={text => setBankName(text)}
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          accountNumber !== '' && accountNumber.trim().length < 10
            ? { borderColor: 'red' }
            : { borderColor: '#2980B9' },
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Account Number"
          placeholderTextColor="#bbb"
          keyboardType="number-pad"
          value={accountNumber}
          onChangeText={text => setAccountNumber(text)}
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          routingNumber !== '' && routingNumber.trim().length !== 9
            ? { borderColor: 'red' }
            : { borderColor: '#2980B9' },
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Routing Number"
          placeholderTextColor="#bbb"
          keyboardType="number-pad"
          value={routingNumber}
          onChangeText={text => setRoutingNumber(text)}
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          accountType !== '' && accountType.trim().length === 0
            ? { borderColor: 'red' }
            : { borderColor: '#2980B9' },
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder="Account Type (Checking/Savings)"
          placeholderTextColor="#bbb"
          value={accountType}
          onChangeText={text => setAccountType(text)}
        />
      </View>


      {lastUpdated && (
        <View style={styles.lastUpdatedContainer}>
          <Text style={styles.lastUpdatedText}>Last Updated: {lastUpdated}</Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && { opacity: 0.6 }]}
        onPress={handleSaveBankDetails}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>Save Bank Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createStyle}
        onPress={() => navigation.goBack()}>
        <Text style={styles.forgotText}>Back to Previous Page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BankDetails;
