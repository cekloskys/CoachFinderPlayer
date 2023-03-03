import { View, Pressable, Text, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



const Booking = ({ book }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Booking', { book : book });
  };

  
  

  return (
    <Pressable style={{flexDirection: 'row', margin: 10, alignItems: 'center',}} onPress={onPress}>
        <Image
        source={{ uri: book.Coach.image}}
        style={{width: 100, height: 100, marginRight: 10, borderRadius: 10}} />
        <View>
          <Text style={{fontWeight: '500', fontSize: 20,}}>{book.athleteName} </Text>
          <Text style={{ color: 'grey'}}>
            Start Date: {book.startDate}
          </Text>
          <Text style={{ color: 'grey'}}>
            Start Time: {book.startTime}
          </Text>
        </View>
    </Pressable>
  );
}

export default Booking;