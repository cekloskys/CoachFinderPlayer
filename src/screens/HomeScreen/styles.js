import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    button: {
      borderColor: 'black',        
      marginTop: 'auto',
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
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'black',
    },
    dropdownBtnTxtStyle: {
      color: '#444', 
      textAlign: 'left',
    },
    dropdownDropdownStyle: {
      backgroundColor: '#EFEFEF',
    },
    dropdownRowStyle: {
      backgroundColor: '#EFEFEF', 
      orderBottomColor: '#C5C5C5',
    },
    dropdownRowTxtStyle: {
      color: '#444', 
      textAlign: 'center',
    },
    
  });

  export default styles;