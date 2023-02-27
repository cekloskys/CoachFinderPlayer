import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Header = ({coach}) => {

  return (
    <View style={styles.page}>
        <Image 
            source={{uri: coach.image}} 
            style={styles.image} />
        <View style={styles.container}>
            <Text style={styles.title}>{coach.fullName}</Text>
            <Text style={styles.subtitle}>
               {coach.shortDesc}
            </Text>
            <Text style={styles.subtitle}>
                Starting at: ${coach.startPrice} 
            </Text>
            <Text style={styles.subtitle}>
            Location: {coach.city}, {coach.state}
          </Text>
        </View> 
    </View>
  );
};

export default Header;