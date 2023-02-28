import { View, FlatList} from 'react-native';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Package } from '../../models';
import styles from './styles';
import PackageComponent from '../../components/Package';

const PackagesScreen = () => {
  const [packages, setPackages] = useState([]);
  

  useEffect(() => {
    DataStore.query(Package).then(setPackages);
  }, []);

    return (
        <View style={styles.page}>
          <FlatList
            data={packages}
            renderItem={({item, index}) => <PackageComponent pack={item} />}
            keyExtractor={(item, index) => index}
          />    
        </View>
      );
}

export default PackagesScreen;