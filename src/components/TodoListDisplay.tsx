import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Todo } from '../screens/TodoScreen'
import TodoItem from './TodoItem'

interface TodoListDisplayProps {
      todos: Todo[];
      onToggle?: (id:number)=>void;
      onDelete?: (id:number)=>void
}



const TodoListDisplay = ({todos, onToggle, onDelete} : TodoListDisplayProps) => {
      const renderTask = ({item}: {item:Todo}) => (
            
                  <TodoItem 
                        todo={item}
                        onToggle={()=>onToggle?.(item.id)}
                        onDelete={()=>onDelete?.(item.id)}
                  />
            
      )
  return (
    <View>
      <FlatList 
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderTask}
    />
    </View>
      
  )
}

export default TodoListDisplay

const styles = StyleSheet.create({})