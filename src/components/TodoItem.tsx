import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyCheckbox from './MyCheckbox'
import { Todo } from '../screens/TodoScreen'
import SocialIcon from './SocialIcon'

interface TodoItemProps {
      todo: Todo;
      onToggle?: ()=>void;
      onDelete?: ()=>void
}


const TodoItem = ({todo, onToggle, onDelete}: TodoItemProps) => {
  return (
    <View style={styles.container}>
            <MyCheckbox completed={todo.completed} onToggle={onToggle} />
            
            <View style={styles.textContainer}>
                  <Text 
                        // numberOfLines={2}
                        // ellipsizeMode='tail'
                        style={[styles.text, todo.completed && styles.completed]}>
                  {todo.task}
                  </Text>
            </View>

            <View style={styles.iconContainer}>
                  <SocialIcon 
                        source={require('../../assets/edit.png')}
                        size={22}
                  />
                  <SocialIcon 
                        source={require('../../assets/delete.png')}
                        size={22}
                        onPress={onDelete}
                  />
            </View>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
      container: {
            flex: 1,
            gap: 7,
            flexDirection: 'row',
            alignItems: 'flex-start',
            // backgroundColor: 'red',
      },

      textContainer: {
            flex:1,
            // marginRight: 10,
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
      iconContainer: {
            flexDirection: 'row',
            gap:10,
            alignItems: 'center',
      },
})