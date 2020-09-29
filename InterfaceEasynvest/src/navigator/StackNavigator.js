import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../screens/TelaInicial.js'
import Login from '../screens/TelaLogin.js'
import TelaPrincipal from '../screens/TelaPrincipal.js'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return(
    <>
      <Stack.Navigator initialRouteName='Início'>
        <Stack.Screen name='Início' component={TelaInicial} options={{headerShown: false}}/>
        <Stack.Screen name='Entrar' component={Login}/>
        <Stack.Screen name='Acompanhar' component={TelaPrincipal}/>
      </Stack.Navigator>
    </>   
  )
}

export default StackNavigator;