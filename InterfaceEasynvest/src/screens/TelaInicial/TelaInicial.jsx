import React from 'react';
import {View, SafeAreaView, Text, ImageBackground } from 'react-native';
import Button from '../../components/Button.jsx'
import styles from './Styles.jsx'

const TelaInicial = ({navigation}) => {
  const handleChangeScreen =() =>{
      navigation.navigate('Entrar')
    }
    
  return(
    <>
    <SafeAreaView style={styles.tela}>
      <View>
        <Text style={styles.textoPrincipal}>
          Que bom que você está aqui
        </Text>
        <Text style={styles.textoSecundario}>
          A Easynvest é um novo jeito de fazer seu dinheiro render mais.
        </Text>
      </View>
      <View>
        <ImageBackground 
          source={require('../../assets/images/background.jpg')} 
          style={styles.imagem}>
          <Button 
            buttonStyle={styles.buttonAbrirConta} 
            textStyle={styles.buttonAbrirContaTexto} 
            texto='Abrir Conta'
          />
          <Button 
            buttonStyle={styles.buttonEntrar} 
            textStyle={styles.buttonEntrarTexto} 
            texto='Entrar' 
            onPress={handleChangeScreen}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
    </>
  );
}

export default TelaInicial;