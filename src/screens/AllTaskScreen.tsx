import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import TodoListDisplay from '../components/TodoListDisplay';

type AllTaskRouteProp = RouteProp<RootStackParamList, 'AllTask'>

const AllTaskScreen = () => {
  const route = useRoute<AllTaskRouteProp>();
  const { todos, deleteTodo, onToggleComplete } = route.params;

  return (
    <View>
      <Text>All Tasks</Text>
      
      <TodoListDisplay 
        todos={todos}
        onDelete={deleteTodo}
        onToggle={onToggleComplete}
      />
    </View>
  )
}

export default AllTaskScreen

const styles = StyleSheet.create({
    
})
