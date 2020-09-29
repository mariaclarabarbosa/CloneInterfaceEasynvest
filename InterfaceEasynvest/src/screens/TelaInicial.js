import React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const TelaInicial = ({navigation}) => {
  const handleChangeScreen =() =>{
      navigation.navigate('Entrar')
    }
  return(
    <>
    <SafeAreaView style={{backgroundColor:'#fff3db'}}>
      <View>
        <Text style={styles.textoPrincipal}>
          Que bom que você está aqui
        </Text>
        <Text style={styles.textoSecundario}>
          A Easynvest é um novo jeito de fazer seu dinheiro render mais.
        </Text>
      </View>
      <View>
        <ImageBackground source={require('../assets/images/background.jpg')} style={styles.imagem}>
          <TouchableOpacity style={styles.buttonAbri}>
            <Text style={styles.buttonAbriTexto}>Abrir Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEntrar} onPress={handleChangeScreen}>
            <Text style={styles.buttonEntrarTexto}>Entrar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
  buttonAbri: {
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
  buttonAbriTexto: {
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

export default TelaInicial;