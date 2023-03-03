import { View, Text, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Coach, Package } from '../../models';
import {Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const BookingDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const book = route.params?.book;
  const onPress = () => {
    navigation.navigate('Bookings');
  };
  const [packages, setPackages] = useState({});
  

  useEffect(() => {
    DataStore.query(Package, p => p.id.eq(book.packageID)).then(setPackages);
  }, []);
  console.log(packages.name);
  console.log(packages);

  

  

  
  



  return (
    <ScrollView style={styles.page}>
      <Image 
            source={{uri:book.Coach.image
          }} 
            style={styles.image} />
             <Text style={styles.title}>{book.Coach.fullName}</Text>
             <View style={{flexDirection:'row',marginVertical: 4, padding:10}}>
            <Text style={styles.subtitle}>Athlete</Text>
            <Text style={styles.subtitledetail}>{book.athleteName}</Text>
            </View>
            <View style={{flexDirection:'row', marginVertical: 4,padding:10}}>
            <Text style={styles.subtitle}>Package Name</Text>
            <Text style={styles.subtitledetail}>{packages?.name}</Text>
            </View>
            <View style={{flexDirection:'row', marginVertical: 4,padding:10}}>
            <Text style={styles.subtitle}>Price</Text>
            <Text style={styles.subtitledetail}>${packages.price}</Text>
            </View>
            <View style={{flexDirection:'column', marginVertical: 4, padding: 10}}>
            <Text style={styles.subtitle}>Details</Text>
            <Text style={styles.details}>{packages.longDesc}</Text>
            </View>
            <View style={{flexDirection:'row', marginVertical: 4,padding:10,}}>
            <Text style={styles.subtitle}>Start Date</Text>
            <Text style={styles.subtitledetail}>{book.startDate}</Text>
            </View>
            <View style={{flexDirection:'row', marginVertical: 4,padding:10}}>
            <Text style={styles.subtitle}>Start Time</Text>
            <Text style={styles.subtitledetail}>{book.startTime}</Text>
            </View>
      <Ionicons
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
        onPress={onPress}
      />
    </ScrollView>
  )
};
export default BookingDetailScreen;