import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './navigator/StackNavigator.js'

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </>
  );
};

export default App;
