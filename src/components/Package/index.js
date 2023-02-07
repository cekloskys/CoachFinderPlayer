import { View, Pressable, Text,Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Package = ({pack}) => {
  const navigation = useNavigation();
  const onPress = () => {
        navigation.navigate('Book Package', {id: pack.id})
      }; 

  return (
       <Pressable style={{flexDirection: 'row', margin: 10, alignItems: 'center',}} onPress={onPress}>
        <Image
        source={{ uri: pack.image }}
        style={{width: 85, height: 100, marginRight: 10,}} />
        <View>
          <Text style={{fontWeight: '600', fontSize: 20,}}>{pack.name} </Text>
          <Text style={{ color: 'grey',fontSize:16,}}>
             ${pack.price}
          </Text>
          <Text style={{ color: 'grey',fontSize:14,}}>
            {pack.shortDescription}
          </Text>
          <Text style={{ color: 'grey',fontSize:14,}}>
             {pack.longDescription}
          </Text>
        </View>
    </Pressable>
  );
}

export default Package;