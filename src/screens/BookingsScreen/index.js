import { View, FlatList, Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import bookings from '../../../assets/data/bookings.json/';
import Booking from '../../components/Booking';

const BookingsScreen = () => {
  const navigation = useNavigation();
  const onPress = () => {
        navigation.navigate('Booking')
      }; 

  return (
    <View style={styles.sectionContent}>
      <Pressable
      style={styles.subtitle} onPress={(onPress)}>
      <FlatList
        data={bookings}
        renderItem={({item, index}) => <Booking book={item} />}
        keyExtractor={(item, index) => index}
      />
      </Pressable>
    </View>
  );


}

export default BookingsScreen;