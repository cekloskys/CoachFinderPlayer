import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    input: {
      height: 55,
      backgroundColor: 'white',
      padding: 15,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 15,
      fontSize: 18,
    },
    button: {
      borderColor: 'black',
      marginTop: 135,
      padding: 15,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      borderRadius: 15,
    },
    buttonText: {
      color: 'black',
      fontWeight: '600',
      fontSize: 18,
    },
    dropdownBtnStyle: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'lightgrey',
      backgroundColor: 'lightgrey',
      marginVertical: 15,
    },
    dropdownBtnTxtStyle: {
      color: '#444',
      textAlign: 'left',
    },
    dropdownDropdownStyle: {
      borderRadius: 10,
    },
    dropdownRowStyle: {
      backgroundColor: '#EFEFEF',
    },
    dropdownRowTxtStyle: {
      color: '#000',
      textAlign: 'left',
    },
  });

  export default styles;