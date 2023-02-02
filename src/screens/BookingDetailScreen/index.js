import { View, Text, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import bookings from '../../../assets/data/bookings.json';
import coaches from '../../../assets/data/coaches.json';
import packages from '../../../assets/data/packages.json';
import {Ionicons} from '@expo/vector-icons';

const BookingDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const onPress = () => {
    navigation.navigate('Bookings');
  };
  //const id = route.params?.id;
  const id = 1;

  const book = bookings[id-1];
  const coach = coaches[id-1];
  const pack = packages[id-1];

  return (
    <View style={styles.page}>
      <Image 
            source={{uri: coach.image}} 
            style={styles.image} />
             <Text style={styles.title}>{coach.name}</Text>
            <View style={{flexDirection:'row', marginVertical: 10}}>
            <Text style={styles.subtitle}>Package Name</Text>
            <Text style={styles.subtitledetail}>{pack.name}</Text>
            </View>
            <View style={{flexDirection:'row', marginVertical: 10}}>
            <Text style={styles.subtitle}>Price</Text>
            <Text style={styles.subtitledetail}>${pack.price}</Text>
            </View>
            <View style={{flexDirection:'row', marginVertical: 10}}>
            <Text style={styles.subtitle}>Date</Text>
            <Text style={styles.subtitledetail}>{book.startDate}</Text>
            </View>
            <View style={{flexDirection:'row', marginVertical: 10}}>
            <Text style={styles.subtitle}>Time</Text>
            <Text style={styles.subtitledetail}>{book.startTime}</Text>
            </View>
            
      <Ionicons
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
        onPress={onPress}
      />
    </View>
  )
};
export default BookingDetailScreen;