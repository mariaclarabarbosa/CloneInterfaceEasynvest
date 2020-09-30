import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    tela:{
        backgroundColor:'#fffdf7'
    },
    imagem1:{
        width: 50, 
        height: 40,
        marginTop: 20,
        marginLeft: 20
    },
    imagem2: {
        marginTop: 15
    },
    viewImage:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    viewPrincipal:{
        marginTop: 30,
        marginBottom:20,
        alignItems: 'center',
  
    },
    texto1: {
        fontSize: 20, 
        color: '#858585'
    },
    texto2: {
        fontSize: 30, 
        fontWeight: 'bold'
    },
    viewSecundaria: {
        alignItems: 'center',
        marginTop: 10,
    },
    textTitulos: {
        color: '#858585',
        fontSize: 15
    },
    textDinheiro:{
        fontWeight: 'bold',
    },
    viewButtons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: '#dbdbdb',
        borderStyle: 'solid',
        borderTopWidth: 2,
        marginTop: 25
    },
    button:{
        padding: 20,
    },
    buttonText:{
        color: '#858585',
    },
    textMenus:{
        color: '#858585',
        paddingHorizontal: 7
    },
    textIndiqueGanhe:{
        color: '#660178',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 0
    },
    viewMenus:{
        marginTop: 113,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    menuIndiqueGanhe:{
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dbdbdb',
        backgroundColor: '#6ce5f0'
    },
    menus:{
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#dbdbdb'
    },
  })
  
  export default styles;