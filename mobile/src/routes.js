import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppsStack = createStackNavigator()

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppsStack.Navigator screenOptions={{ headerShown: false }}>
                <AppsStack.Screen name="Incidents" component={Incidents} />
                <AppsStack.Screen name="Detail" component={Detail} />
            </AppsStack.Navigator>
        </NavigationContainer>
    )
}