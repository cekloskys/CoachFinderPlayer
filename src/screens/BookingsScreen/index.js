import { View, FlatList} from 'react-native';
import styles from './styles';
import bookings from '../../../assets/data/bookings.json/';
import Booking from '../../components/Booking';

const BookingsScreen = () => {

  return (
    <View style={styles.page}>
      <FlatList
        data={bookings}
        renderItem={({item, index}) => <Booking book={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );


}

export default BookingsScreen;