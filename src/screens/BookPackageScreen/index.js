import { View, TextInput, Pressable, Text} from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import bookings from '../../../assets/data/bookings.json/';
import Booking from '../../components/Booking';

const BookPackageScreen = () => {
const [name,setName] = useState('');
const navigation = useNavigation();
  return (
    <View style={styles.page}>

      <TextInput 
            value = {name}
            onChangeText={value=>setName(value)}
            style = {styles.button}
            clearButtonMode = {'while-editing'}
            placeholder = {"Enter Athlete's Name"}
            placeholderTextColor = {'black'}
            />
      <Pressable
          style={styles.button} onPress={() => navigation.navigate('Search')}>
          <Text style={styles.buttonText}> Book Package </Text>
          </Pressable>
    </View>
  );
}

export default BookPackageScreen;