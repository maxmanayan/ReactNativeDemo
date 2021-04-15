// react has philosphy learn once write anywhere
import axios from 'axios'
import useAxios from 'axios-hooks'
import React, { useState, useEffect } from 'react'
import { View, Button, Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import JamesCardDemo from '../components/JamesCardDemo';
const People = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://reqres.in/api/users?delay=3'
  )
  const renderData = ()=>{
    return data.data.map(person=>{
      return <JamesCardDemo key={person.id} {...person}/>
    })
  }
  const getContent = () => {
    console.log(data)
    if (loading) return    <ActivityIndicator size="large" color="#0000ff" />
    if (error) return <Text>Error</Text>
    else {
      return (
        <>
          <View style={styles.header} >
            <Text style={styles.headerText}>List of Things</Text>
          </View>
          <ScrollView>
            {renderData()}
          </ScrollView>
        </>
      )
    }
  }
  return (

      <SafeAreaView style={styles.appContainer}>
        {getContent()}
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  touchable: {
    borderColor: 'red',
    borderWidth: 1
  },
  img: {
    width: 20,
    height: 20
    // flex:1
  },
  header: {
    padding: 20,
    borderColor: "black",
    borderBottomWidth: 3
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700"
  },
  cardContainer: {
    borderColor: "#bbb",
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
// const styles = {
//   container: { 
//     border:'2px solid'
//   }
// }
export default People