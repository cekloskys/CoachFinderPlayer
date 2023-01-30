import { View, FlatList} from 'react-native';
import styles from './styles';
import packages from '../../../assets/data/packages.json';
import Package from '../../components/Package';

const PackagesScreen = () => {

    return (
        <View style={styles.page}>
          <FlatList
            data={packages}
            renderItem={({item, index}) => <Package pack={item} />}
            keyExtractor={(item, index) => index}
          />

          
        </View>
      );
}

export default PackagesScreen;