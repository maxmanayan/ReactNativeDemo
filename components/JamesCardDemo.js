import React, { useState } from 'react'
import { Image, TouchableOpacity, View, StyleSheet, Text, Button } from "react-native";
const JamesCardDemo = ({last_name, email, first_name, avatar, id}) => {
    const [touchableCount, setTouchableCount] = useState(0)
    const [buttonCount, setButtonCount] = useState(0)
    const handleClick = () => {
        setButtonCount(buttonCount + 1)
    }
    const touchPressed = () => {
        setTouchableCount(touchableCount + 1)
    }
    return (
        <TouchableOpacity onPress={touchPressed} style={styles.touchable}>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text>
                        <Image style={styles.img} source={{ uri: avatar }} />
      {first_name} {last_name}
      </Text>
                    <Text>{email}</Text>
                </View>
                <Text>touchable pressed {touchableCount} times</Text>
                <Text>button pressed {buttonCount} times</Text>
                <Button onPress={handleClick} title='click me' />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    touchable:{
      borderColor:'red',
      borderWidth:1
    },
    img: {
      width:50,
      height:50
     // flex:1
    },
    cardContainer:{
     borderColor: "#bbb",
     borderWidth:2,
     marginHorizontal:10,
     marginVertical:5,
     paddingHorizontal:10,
     paddingVertical:10
    },
    cardHeader:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }
 })
export default JamesCardDemo