import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import TodoListDisplay from '../components/TodoListDisplay';

type ActiveTaskRouteProp = RouteProp<RootStackParamList, 'ActiveTask'>

const ActiveTaskScreen = () => {
  const route = useRoute<ActiveTaskRouteProp>();
  const { todos, deleteTodo, onToggleComplete } = route.params;
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
      

    <View>
      <Text>Active Tasks</Text>
      
      <TodoListDisplay 
        todos={activeTodos}
        onDelete={deleteTodo}
        onToggle={onToggleComplete}
      />
    </View>
  )
}

export default ActiveTaskScreen

const styles = StyleSheet.create({
    
})
