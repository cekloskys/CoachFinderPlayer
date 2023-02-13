import { View, TextInput, Pressable, Text, Button, StyleSheet } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';


const BookPackageScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
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

  const Validation = () => {
    if (!name) {
      alert('Please enter athlete\'s name.');
      return
    }
    if (!date) {
      alert('Please select a start date.');
      return
    }
    if (!time) {
      alert('Please select a start time.');
      return
    }

    navigation.navigate('Search')

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
      <TextInput
        value={age}
        onChangeText={value => setAge(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Athlete's Age"}
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
        <View>
          <Pressable onPress={showDatePicker} style={styles.button}>
            <Text style={styles.buttonText}>Select Start Date</Text>
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
        <View>
          <Pressable onPress={showTimePicker} style={styles.button}>
            <Text style={styles.buttonText}>Select Start Time</Text>
          </Pressable>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder='Time'
        value={time.toLocaleTimeString()}
        editable={false}
      />
      <Pressable
        style={styles.bookbutton} onPress={Validation}>
        <Text style={styles.buttonText}> Book Package </Text>
      </Pressable>
    </View>
  );
}

export default BookPackageScreen;