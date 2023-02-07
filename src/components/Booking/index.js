import { View, Pressable, Text, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import coaches from '../../../assets/data/coaches.json';

const Booking = ({ book }) => {
  const navigation = useNavigation();
  const onPress = () => {
    const id = book.id;
    navigation.navigate('Booking', { book: book });
  };

  const coach = coaches[book.coachId-1]

  return (
    <Pressable style={{flexDirection: 'row', margin: 10, alignItems: 'center',}} onPress={onPress}>
        <Image
        source={{ uri: coach.image }}
        style={{width: 100, height: 100, marginRight: 10,}} />
        <View>
          <Text style={{fontWeight: '600', fontSize: 20,}}>{book.User.name} </Text>
          <Text style={{ color: 'grey',fontSize:18,}}>
            Start Date: {book.startDate}
          </Text>
          <Text style={{ color: 'grey',fontSize:18,}}>
            Start Time: {book.startTime}
          </Text>
        </View>
    </Pressable>
  );
}

export default Booking;