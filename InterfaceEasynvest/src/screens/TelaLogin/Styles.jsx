import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    tela:{
      backgroundColor:'#fffdf7'
    },
    viewInput: {
      marginTop:70, marginHorizontal:30
    },
    viewButtons:{
      marginBottom: 255
    },
    input:{
      borderBottomColor: '#e0ded7',
      borderStyle: 'solid',
      borderBottomWidth: 2,
      padding: 15,
      paddingBottom:2,
    },
    buttonEsqueceuSenha: {
      marginHorizontal: 115,
      marginBottom: 20
    },
    textButtonEsqueceuSenha:{
      marginTop: 50,
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 13,
      color: '#660178',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    buttonEntrar:{
      marginTop: 10,
      marginHorizontal: 30,
      backgroundColor: '#660178',
      paddingVertical: 20,
      paddingHorizontal: 55,
      borderRadius: 50,
      alignItems: 'center'
    },
    textButtonEntrar:{
      color: '#fff',
      fontWeight: 'bold',
    }
  })

export default styles;