import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CoachComponent from '../../components/Coach';
import SelectDropdown from 'react-native-select-dropdown';
import { DataStore } from 'aws-amplify';
import { Coach, Sport } from '../../models';
import styles from './styles';

let selectedSport = '';

const Header = () => {

  const [sport, setSport] = useState('');
  const [sports, setSports] = useState([]);
  const [displaySports, setDisplaySports] = useState([]);

  useEffect(() => {
    DataStore.query(Sport).then(setSports);
  }, []);

  useEffect(() => {
    if (!sports) {
      return;
    }
    const display = [];
    for (let i = 0; i < sports.length; i++) {
      display.push(sports[i].nam);
    }
    setDisplaySports(display);
  }, [sports]);




  return (
    <View>
      <SelectDropdown
        data={displaySports}
        defaultButtonText={'Select a Sport'}
        onSelect={(selectedItem) => {
          //setSport(selectedItem);
          selectedSport = selectedItem;
          for (let i = 0; i < sports.length; i++) {
            if(sports[i].nam === selectedSport){
              selectedSport = sports[i].id
            }
          }
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

const HomeScreen = () => {

  const [coaches, setCoaches] = useState([]);

  const fetchCoaches = async () => {
    const results = await DataStore.query(Coach, (c) => c.sportID.eq(selectedSport));
    setCoaches(results);
  };

  useEffect(() => {
    if(!selectedSport){
      return;
    }
    fetchCoaches();
  }, [selectedSport]);


  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header />}
        data={coaches}
        renderItem={({ item, index }) => <CoachComponent coach={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default HomeScreen;