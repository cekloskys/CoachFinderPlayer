import { View, TextInput, Pressable, Text } from 'react-native';
import { useState } from 'react';
import styles from './styles';

const ProfileScreen = () => {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [sport, setSport] = useState('');
  const [email, setEmail] = useState('');

    return (
        <View style={styles.page}>
          <TextInput
        value={firstName}
        onChangeText={value => setFirst(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter First Name"}
        placeholderTextColor={'lightgrey'}
      />
        <TextInput
        value={lastName}
        onChangeText={value => setLast(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Last Name"}
        placeholderTextColor={'lightgrey'}
      />
        <TextInput
        value={age}
        onChangeText={value => setAge(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Age"}
        placeholderTextColor={'lightgrey'}
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
        value={sport}
        onChangeText={value => setSport(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Perferred Sport"}
        placeholderTextColor={'lightgrey'}
      />
        <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Email"}
        placeholderTextColor={'lightgrey'}
      />
          <Pressable
            style={styles.button} onPress={() => console.warn("Submitted")}>
            <Text style={styles.buttonText}> Submit </Text>
          </Pressable>
      
          
        </View>
      );
}

export default ProfileScreen;