import React, { useState } from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';


const CardDemo = () => {

  const [clickMeTouched, setClickMeTouched] = useState(0)
  const [imageTouched, setImageTouched] = useState(0)

  const handlePress = () => {
    setClickMeTouched(clickMeTouched + 1)
  }

  const imagePress = () => {
    setImageTouched(imageTouched + 1)
  }
  return(
    <>
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text>USA</Text>
        <Text>Header Right</Text>
      </View>
      <TouchableOpacity onPress={imagePress}>
        <View style={styles.cardBody}>
          <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/62/93/08/629308463e4f44c84cce5603f6843f50.jpg'}}/>
          <Text>Image Touched: {imageTouched}</Text>
        </View>
      </TouchableOpacity>
      <Button onPress={handlePress} title='Click Me'/>
      <Text>CM Touched: {clickMeTouched}</Text>
    </View>
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text>Card 2</Text>
        <Text>Header Right</Text>
      </View>
      <Text>Hello</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  cardContainer : {
    backgroundColor: 'lightblue',
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },

  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  img: {
    width: 200,
    height: 200
  }
})


export default CardDemo