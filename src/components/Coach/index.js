import { View, Pressable, Image, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const Coach = ({ coach }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Coach Profile', { id: coach.id })
  };

  return (
    <Pressable style={styles.restaurantContainer} onPress={onPress}>
      <Image
        source={{ uri: coach.image }}
        style={styles.image} />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>
            {coach.name}
          </Text>
          <Text style={styles.subtitle}>
            {coach.shortDescription}
          </Text>
          <Text style={styles.subtitle}>
            Starting at: ${coach.startPrice}
          </Text>
          <Text style={styles.subtitle}>
            Location: {coach.address}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Coach;