import { View, Pressable, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Package = ({pack}) => {
  const navigation = useNavigation();
  const onPress = () => {
        navigation.navigate('Book Package', {id: pack.id})
      }; 

  return (
    <Pressable style={styles.restaurantContainer} onPress={onPress}>
      <View style={styles.page}>
        <View>
          <Text style={styles.completeContainer}> {pack.name} </Text>
          <Text style={styles.subtitle}>
             ${pack.price}
          </Text>
          <Text style={styles.subtitle}>
             {pack.shortDescription}
          </Text>
          <Text style={styles.subtitle}>
              {pack.longDescription}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Package;