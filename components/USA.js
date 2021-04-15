// react has philosophy learn once, writ anywhere

import useAxios from 'axios-hooks';
import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, ScrollView} from 'react-native';
import CardDemo from './components/CardDemo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  const [{ data, loading, error }, refetch] = useAxios(
    'https://reqres.in/api/users?delay=1'
  )

  if(loading) return <SafeAreaView><Text>Loading</Text></SafeAreaView>
  return(
    <SafeAreaView  style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>List of Things</Text>
      </View>
      <ScrollView>
        <CardDemo />
        <CardDemo />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },

  header: {
    padding: 20,
    borderColor: 'blue',
    borderBottomWidth: 3,
  },

  headerText: {
    fontSize: 20,
    fontWeight: '700',
   
  },
})

export default App