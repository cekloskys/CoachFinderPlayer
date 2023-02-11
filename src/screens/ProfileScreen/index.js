import { View, TextInput, Pressable, Text } from 'react-native';
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

const validator = require('validator');

const ProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [sport, setSport] = useState('');
  const [email, setEmail] = useState('');

  const sports = [
    'Baseball',
    'Basketball',
    'Football',
    'Hockey',
    'Lacrosse',
    'Soccer',
  ];

  const Validation = () => {
    if (!fullName) {
      alert('Please enter your fullname.');
      return
    }
    if (!age) {
      alert('Please enter your age.');
      return
    }
    if (!address) {
      alert('Please enter your address.');
      return
    }
    if (!email || !validator.isEmail(email)) {
      alert('Please enter a valid email.');
      return
    }
    if (!sport) {
      alert('Please select your preferred sport.');
      return
    }
    alert('Profile saved.');
  }

  return (
    <View style={styles.page}>
      <TextInput
        value={fullName}
        onChangeText={value => setFullName(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Full Name"}
        placeholderTextColor={'lightgrey'}
        keyboardType='name-phone-pad'
      />
      <TextInput
        value={age}
        onChangeText={value => setAge(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Age"}
        placeholderTextColor={'lightgrey'}
        keyboardType='numeric'
      />
      <TextInput
        value={address}
        onChangeText={value => setAddress(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Address"}
        placeholderTextColor={'lightgrey'}
      />
      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Email"}
        placeholderTextColor={'lightgrey'}
        keyboardType='email-address'
      />
      <SelectDropdown
        data={sports}
        defaultButtonText={'Select Preferred Sport'}
        onSelect={(selectedItem) => {
          setSport(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem;
        }}
        rowTextForSelection={(item) => {
          return item;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
      <Pressable
        style={styles.button} onPress={Validation}>
        <Text style={styles.buttonText}> Submit </Text>
      </Pressable>
    </View>
  );
}

export default ProfileScreen;