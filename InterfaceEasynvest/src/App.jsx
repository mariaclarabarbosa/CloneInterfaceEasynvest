import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './navigator/StackNavigator.jsx'
import TabNavigator from './navigator/TabNavigator.jsx'

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigator>
          <TabNavigator/>
        </StackNavigator>
      </NavigationContainer>
    </>
  );
};

export default App;
