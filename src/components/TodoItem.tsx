import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyCheckbox from './MyCheckbox'
import { Todo } from '../screens/TodoScreen'

interface TodoItemProps {
      todo: Todo;
      onToggle: ()=>void;
}


const TodoItem = ({todo, onToggle}: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <MyCheckbox completed={todo.completed} onToggle={onToggle} />
      <Text style={[styles.text, todo.completed && styles.completed]}>
        {todo.task}
      </Text>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
            
      },
      text: {
            fontSize: 18,
            color: '#333',
      },
      completed: {
            textDecorationLine: 'line-through',
            color: 'green',
      },
})