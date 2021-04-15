import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';


const Stack1 = ({navigation}) => {
  return(
    <View>
      <Text>Stack 1 Screen</Text>
      <Button title='Stack 2' onPress={()=> navigation.push('Stack2')} />
    </View>
  )
}

export default Stack1