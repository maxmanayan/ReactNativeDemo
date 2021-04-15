import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Stack1 from './Stack1';
import Stack2 from './Stack2';

const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack1" component={Stack1} />
      <Stack.Screen name="Stack2" component={Stack2} />
    </Stack.Navigator>
  );
}

export default Home
