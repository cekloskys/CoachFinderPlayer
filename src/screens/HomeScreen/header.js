import React from 'react';
import { View} from 'react-native';
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

const Header = () => {

    const [sport, setSport] = useState('');

  const sports = [
    'Baseball',
    'Basketball',
    'Football',
    'Hockey',
    'Lacrosse',
    'Soccer',
  ];

  return (
    <View>
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
    </View>
  );
};

export default Header;