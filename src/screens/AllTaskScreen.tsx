import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import TodoItem from '../components/TodoItem';
import { Todo } from './TodoScreen';

type AllTaskRouteProp = RouteProp<RootStackParamList, 'AllTask'>

const AllTaskScreen = () => {
  const route = useRoute<AllTaskRouteProp>();
  const { todos, deleteTodo } = route.params;

    const renderTask = ({ item }: { item: Todo }) => (
    <View style={styles.todoItem}>
      <TodoItem 
        todo={item} 
        
        onDelete={() => deleteTodo(item.id)}
      />
    </View>
  )
  

  return (
    <View>
      <Text>All Tasks</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTask} 
        contentContainerStyle={styles.todoListContainer}
      />
    </View>
  )
}

export default AllTaskScreen

const styles = StyleSheet.create({
    todoListContainer: {
    padding: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    gap: 5,
  },
  todoItem: {
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
})
