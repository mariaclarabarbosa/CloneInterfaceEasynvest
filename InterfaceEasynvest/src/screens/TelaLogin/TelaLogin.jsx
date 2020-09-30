import React, {useState} from 'react'
import {Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Button from '../../components/Button.jsx'
import styles from './Styles.jsx'

const Login = ({navigation}) => {
  const handleChangeScreen = () => {
    navigation.navigate('Acompanhar')
  }
    return(
        <>
        <SafeAreaView style={styles.tela}>
          <View style={styles.viewInput}>
            <TextInput placeholder='CPF ou Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input} secureTextEntry={true}/>
          </View>
          <View style={styles.viewButtons}>
            <Button 
              buttonStyle={styles.buttonEsqueceuSenha} 
              textStyle={styles.textButtonEsqueceuSenha} 
              texto='Esqueci minha senha'
            />
            <Button 
              buttonStyle={styles.buttonEntrar} 
              textStyle={styles.textButtonEntrar} 
              texto='Entrar' 
              onPress={handleChangeScreen}
            />
          </View>
        </SafeAreaView>
        </>
    );
}



export default Login;