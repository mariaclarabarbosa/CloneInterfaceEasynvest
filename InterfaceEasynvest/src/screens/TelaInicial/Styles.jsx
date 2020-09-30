import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  tela:{
    backgroundColor:'#fff3db'
  },
  textoPrincipal: {
    marginHorizontal: 30,
    marginTop: 80,
    marginBottom: 30,
    fontSize: 30, 
    color: '#660178',
    fontWeight: 'bold'
  },
  textoSecundario: {
    marginHorizontal: 30,
    fontSize: 15,
    color: '#660178',
  },
  buttonAbrirConta: {
    borderColor: '#34cceb',
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 130,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 2
  },
  buttonAbrirContaTexto: {
    color: '#34cceb',
    fontWeight: 'bold'
  },
  buttonEntrar: {
    borderColor: 'blue',
    backgroundColor: '#34cceb',
    paddingVertical: 15,
    paddingHorizontal: 55,
    marginTop: 130,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 50,
  },
  buttonEntrarTexto: {
    color: '#660178',
    fontWeight: 'bold'
  },
  imagem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 360, 
    height: 200,
    marginTop:225
  }
})
export default styles;