import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const TodoScreen = () => {
  return (
    <View style={styles.app}>
      <View style={styles.title}>
        <Text>TodoScreen</Text>
      </View>
      
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  app: {
    flex: 1,    
    backgroundColor: '#B57EDC',
  },
  title: {
    fontSize: 16,
  }
})