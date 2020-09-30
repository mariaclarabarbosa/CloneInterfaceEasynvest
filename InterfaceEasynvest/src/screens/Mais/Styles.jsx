import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    tela:{
        backgroundColor:'#fff',
        flex: 1
    },
    imagem1:{
        width: 90, 
        height: 70,
        marginTop: 20,
        marginLeft: 20
    },
    viewImage:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 22,
    },
    buttons:{
        fontSize: 25,
        paddingHorizontal: 30,
        paddingVertical: 12
    },
    icon:{
        paddingLeft: 30,
    },
    viewLogin:{
        marginVertical: 20,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonEsqueceuSenha: {
        marginRight: 220,
      },
      textButtonEsqueceuSenha:{
        fontSize: 13,
        color: '#660178',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
      viewDados:{
        marginTop: 20
      },
      text:{
          fontSize: 16,
          color: '#8f8c8c'
      }
})

export default styles;