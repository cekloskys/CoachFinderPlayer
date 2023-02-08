import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  completeContainer: {
    width: '100%',
    height: 36,
    backgroundColor: 'lightgrey',
    paddingTop: 3,
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  sectionContent: {
    width: '100%',
    height: 36,
    paddingTop: 3,
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  outer: {
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    color: 'grey',
    fontSize: 16,
  },
  container: {
    margin: 10,
  },
  sectionContent: {
    width: '100%',
    height: 36,
    paddingTop: 3,
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  button: {
    borderColor: 'black',
    marginTop: 'auto',
    padding: 15,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    borderRadius: 15,
    fontWeight: '600',
    fontSize: 18,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  input: {
    height: 60,
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    marginTop: 15,
    marginLeft:10,
    marginRight:10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 15,
    fontSize: 18,
  },


});

export default styles;