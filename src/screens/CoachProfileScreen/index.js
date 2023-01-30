import { View, Text, SectionList, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import coaches from '../../../assets/data/coaches.json';
import Coach from '../../components/Coach';
import Header from './header';
import {Ionicons} from '@expo/vector-icons';

const CoachProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const onPress = () => {
        navigation.navigate('Search');
      };

  const id = route.params?.id;

  const coach = coaches[id - 1];

    return (
        <View style={styles.page}>
          <SectionList
        ListHeaderComponent={() => <Header coach={coach} />}
        ListFooterComponent={() =>
          <Pressable
          style={styles.button} onPress={() => navigation.navigate('Packages')}>
          <Text style={styles.buttonText}> Coach's Packages </Text>
          </Pressable>
          }
        sections={[{ title: 'Accreditations', data: coach.accreditations},
        { title: 'Ages', data: coach.ages},
        { title: 'Positions', data: coach.positions},
        { title: 'Specialities', data: coach.specialties},
         
        ]}
        renderItem={({ item }) => (
          <View style={styles.sectionContent}>
            <View style={{ width: '70%' }}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </View>
          </View>

        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.completeContainer}>
            <View style={{ width: '70%' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{section.title}</Text>
            </View>
          </View>
        )}

      />
       
      <Ionicons 
            name='arrow-back-circle'
            size={45}
            color='white'
            style={styles.iconContainer}
            onPress={onPress}
        />
          
        </View>
      );
}

export default CoachProfileScreen;