import { View, TextInput } from 'react-native';
import { useState } from 'react';
import styles from './styles';

const CoachProfileScreen = () => {
  const [name,setName] = useState(' ');
  const [address,setAddress] = useState(' ');
  const [credentials,setCredentials] = useState(' ');
  const [services,setServices] = useState(' ');

    return (
        <View style={styles.page}>
          <TextInput 
            value = {name}
            onChangeText={value=>setName(value)}
            style = {styles.name}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter Name'}
            placeholderTextColor = {'black'}
            />
          <TextInput 
            value = {address}
            onChangeText={value=>setAddress(value)}
            style = {styles.address}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter Address'}
            placeholderTextColor = {'black'}
            />
            <TextInput 
            value = {credentials}
            onChangeText={value=>setCredentials(value)}
            style = {styles.credentials}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter Credentials'}
            placeholderTextColor = {'black'}
            />
            <TextInput 
            value = {services}
            onChangeText={value=>setAddress(value)}
            style = {styles.address}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter Services'}
            placeholderTextColor = {'black'}
            />
          
        </View>
      );
}

export default CoachProfileScreen;