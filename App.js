// react has philosphy learn once write anywhere
// react has philosphy learn once write anywhere

import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import People from './screens/People'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './screens/Settings';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="People" component={People} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App