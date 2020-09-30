import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaInicial from '../screens/TelaInicial/TelaInicial.jsx'
import Login from '../screens/TelaLogin/TelaLogin.jsx'
import TabNavigation from './TabNavigator.jsx'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return(
    <>
      <Stack.Navigator initialRouteName='Início'>
        <Stack.Screen 
          name='Início' 
          component={TelaInicial} 
          options={{headerShown: false, abBarLabel: 'Início'}}
        />
        <Stack.Screen 
          name='Entrar' 
          component={Login}
          options={{tabBarLabel: 'Entrar'}}
        />
        <Stack.Screen 
          name='Root' 
          component={TabNavigation} 
          options={{headerShown: false, tabBarLabel: 'Acompanhar'}}/>
      </Stack.Navigator>
    </>   
  )
}

export default StackNavigator;