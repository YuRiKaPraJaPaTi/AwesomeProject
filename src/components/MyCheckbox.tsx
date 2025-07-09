import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'

interface CheckboxProps {
      completed?: boolean;
      onToggle?: ()=> void;
}

const MyCheckbox = ({completed, onToggle }: CheckboxProps) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.box}>
      {completed && 
            <View style={styles.innerBox} />
      }
    </TouchableOpacity>
  )
}

export default MyCheckbox

const styles = StyleSheet.create({
      box: {
            width: 24,
            height: 24,
            borderRadius: 6,
            borderWidth: 2,
            borderColor: 'purple',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
      },
      innerBox: {
            width: 14,
            height: 14,
            backgroundColor: 'green',
            borderRadius: 3,
      },
})