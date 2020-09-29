import React, {useState} from 'react'
import {Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

const Login = ({navigation}) => {
  const handleChangeScreen = () => {
    navigation.navigate('Acompanhar')
  }
    return(
        <>
        <SafeAreaView style={{backgroundColor:'#fffdf7'}}>
          <View style={{marginTop:70, marginHorizontal:30}}>
            <TextInput placeholder='CPF ou Email' style={styles.input}></TextInput>
            <TextInput placeholder='Senha' style={styles.input} secureTextEntry={true}></TextInput>
          </View>
          <View style={{marginBottom: 255}}>
            <TouchableOpacity style={styles.buttonEsq}>
              <Text style={styles.texto}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleChangeScreen}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
  input:{
    borderBottomColor: '#e0ded7',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    padding: 15,
    paddingBottom:2,
  },
  buttonEsq: {
    marginHorizontal: 115,
    marginBottom: 20
  },
  texto:{
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 13,
    color: '#660178',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  button:{
    marginTop: 10,
    marginHorizontal: 30,
    backgroundColor: '#660178',
    paddingVertical: 20,
    paddingHorizontal: 55,
    borderRadius: 50,
    alignItems: 'center'
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
  }
})

export default Login;