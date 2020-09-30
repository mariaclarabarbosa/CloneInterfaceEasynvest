import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TelaPrincipal from '../screens/TelaPrincipal/TelaPrincipal.jsx'
import Investir from '../screens/Investir/TelaInvestir.jsx'
import Mais from '../screens/Mais/TelaMais.jsx'
import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return(
        <>
            <Tab.Navigator 
                initialRouteName='Acompanhar' 
                tabBarPosition='bottom' 
                initialLayout={{ width: Dimensions.get('window').width }}
                tabBarOptions={{
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: '#fff',
                    borderTopColor: '#dbdbdb',
                    borderStyle: 'solid',
                    borderTopWidth: 2,
                    },
                }}
            >
                <Tab.Screen 
                    name='Acompanhar' 
                    component={TelaPrincipal} 
                    options={{tabBarLabel: 'Acompanhar'}}
                />
                <Tab.Screen 
                    name='Investir' 
                    component={Investir}
                    options={{tabBarLabel: 'Investir'}}
                />
                <Tab.Screen 
                    name='Mais' 
                    component={Mais}
                    options={{tabBarLabel: 'Mais'}}
                />
            </Tab.Navigator>
        </>
    )
}

export default TabNavigator;