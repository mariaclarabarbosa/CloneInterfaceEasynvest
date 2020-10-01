import React, {useState, useEffect} from 'react'
import {SafeAreaView, TextInput, View} from 'react-native'
import Button from '../../components/Button.jsx'
import styles from './Styles.jsx'

const Login = ({navigation}) => {
  const [cpfEmail, setCpfEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleChangeScreen = () => {
    navigation.reset({
      index:0,
      routes: [{name: 'Root'}]
    })
  }
    return(
        <>
        <SafeAreaView style={styles.tela}>
          <View style={styles.viewInput}>
            <TextInput 
              placeholder='CPF ou Email' 
              style={styles.input}
              accessibilityLabel='Inserir CPF ou Email'
              onChangeText={(text) => setCpfEmail(text)}
            />
            <TextInput 
              placeholder='Senha' 
              style={styles.input} 
              secureTextEntry={true}
              accessibilityLabel='Inserir senha'
              onChangeText={(text) => setSenha(text)}
            />
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