import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../screens/TelaInicial/TelaInicial.jsx'
import Login from '../screens/TelaLogin/TelaLogin.jsx'
import TelaPrincipal from '../screens/TelaPrincipal/TelaPrincipal.jsx'

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