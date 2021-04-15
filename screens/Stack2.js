import React from 'react';
import { Button, Text, View } from 'react-native';


const Stack2 = ({navigation}) => {
  return(
    <View>
      <Text>Stack 2 Screen</Text>
      <Button title='Stack 1' onPress={()=> navigation.pop()} />
    </View>
  )
}

export default Stack2