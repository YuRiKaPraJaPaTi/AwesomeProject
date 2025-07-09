import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonProps {
      label: string;
      onPress?: ()=>void;
}

const MyButton = ({label, onPress}: ButtonProps) => {
  return (
      <TouchableOpacity
            style={styles.mybutton} 
            onPress={onPress}
      >
            <Text style={styles.buttontext}>{label}</Text>
      </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
      mybutton: {
            margin: 10,
            backgroundColor: 'purple',
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 25,
            alignSelf: 'center',
      },
      buttontext: {
            color: 'white',
      }
})