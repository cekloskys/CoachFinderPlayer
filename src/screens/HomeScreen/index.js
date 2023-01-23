import { View, Text, Pressable, TextInput} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';

const HomeScreen = () => {

  const navigation = useNavigation();
  const [sport,setSport] = useState(' ');
  const [address, setAddress] = useState(' ');

  const sports = [
    'Baseball',
    'Basketball',
    'Football',
    'Hockey',
    'Lacrosse',
    'Soccer',

  ];

    return (
        <View style={styles.page}>
        <SelectDropdown
            data={sports}
            defaultButtonText={'Select a Sport'}
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
          <TextInput 
            value = {address}
            onChangeText={value=>setAddress(value)}
            style = {styles.address}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter Address'}
            placeholderTextColor = {'black'}
            />
          <Pressable
          style={styles.button} onPress={navigation.navigate("Coach Profile")}>
          <Text style={styles.buttonText}> Find </Text>
          </Pressable>
        </View>
      );
}

export default HomeScreen;