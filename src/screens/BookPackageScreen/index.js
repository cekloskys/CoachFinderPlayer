import { View, TextInput, Pressable, Text, Button, StyleSheet } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';


const BookPackageScreen = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));

  function showDatePicker() {
    setDatePicker(true);
  };

  function showTimePicker() {
    setTimePicker(true);
  };
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  };
  function twelve() {
     is24Hour = false;
  } 

  return (
    <View style={styles.page}>
      <TextInput
        value={name}
        onChangeText={value => setName(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Athlete's Name"}
        placeholderTextColor={'lightgrey'}
      />
      {datePicker && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onDateSelected}

        />
      )}
      {!datePicker && (
        <View style={{ margin: 10 }}>
          <Pressable onPress={showDatePicker} style={styles.button}>
            <Text style={styles.buttonText}>Select Date</Text>
          </Pressable>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder='Date'
        value={date.toLocaleDateString()}
        editable={false}
      />
      {timePicker && (
        <DateTimePicker
          value={time}
          mode={'time'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={false}
          onChange={onTimeSelected}

        />
      )}

      {!timePicker && (
        <View style={{ margin: 10 }}>
          <Pressable onPress={showTimePicker} style={styles.button}>
            <Text style={styles.buttonText}>Select Time</Text>
          </Pressable>
        </View>
      )}
       <TextInput
        style={styles.input}
        placeholder='Time'
        value={time.toLocaleTimeString(twelve)}
        editable={false}
      />
      <Pressable
        style={styles.button} onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}> Book Package </Text>
      </Pressable>

    </View>
  );
}

export default BookPackageScreen;