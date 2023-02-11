import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  subtitle: {
    color: 'grey',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 'auto',
    marginTop: 35,
    backgroundColor: 'lightgrey',
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;