import { View, FlatList} from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import BookingComponent from '../../components/Booking';
import { DataStore } from 'aws-amplify';
import { Booking, Coach } from '../../models';

const BookingsScreen = () => {
  const [bookings, setBookings] = useState([]);
  const [finalBookings, setFinalBookings] = useState([]);
  
  useEffect(() => {
    DataStore.query(Booking).then(setBookings);
  }, [])
  console.log("bookings")
    console.log(bookings)
  useEffect(() => {
    if(!bookings){
      return;
    }
    const fetchCoaches = async () => {
      const coaches = await DataStore.query(Coach);
    setFinalBookings(
      bookings.map( booking => ({
        ...booking,
        Coach : coaches.find(c => c.id == booking.coachID),
      }))
    );
    console.log("coaches")
    console.log(coaches)
    };
    fetchCoaches();
  }, [bookings]);
  console.log("finalBookings")
  console.log(finalBookings)

  return (
    <View style={styles.page}>
      <FlatList
        data={finalBookings}
        renderItem={({item, index}) => <BookingComponent book={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );


}

export default BookingsScreen;