import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   restaurantContainer: {
        width: '100%',
        marginVertical: 10,
      },
      title: {
        fontSize: 20,
        fontWeight: '500',    
        alignItems: 'center',
      },
      subtitle: {
        fontSize: 18,
        color: 'grey',
      },
      row: {
          flexDirection: 'row',
          alignItems: 'center',
      },
});

  export default styles;