import { View, Text, Pressable, FlatList} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import coaches from '../../../assets/data/coaches.json';
import Coach from '../../components/Coach';

const HomeScreen = () => {

  const navigation = useNavigation();
  const [sport,setSport] = useState('');

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
          <FlatList
            data={coaches}
            renderItem={({item, index}) => <Coach coach={item} />}
            keyExtractor={(item, index) => index}
          />
        </View>
      );
}

export default HomeScreen;