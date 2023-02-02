import { View, Pressable, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Booking = ({book}) => {
  const navigation = useNavigation();
  const onPress = () => {
        navigation.navigate('Booking', {id: book.id})
      }; 

  return (
    <Pressable style={styles.restaurantContainer} onPress={onPress}>
      <View style={styles.page}>
        <View><Pressable
          style={styles.title} onPress={() => navigation.navigate('Booking')}>
          <Text style={styles.completeContainer}> {book.User.name} </Text>
          </Pressable>
          <Text style={styles.subtitle}>
             {book.startDate}
          </Text>
          <Text style={styles.subtitle}>
             {book.startTime}
          </Text>
        </View>
      </View>
      </Pressable>
  );
}

export default Booking;