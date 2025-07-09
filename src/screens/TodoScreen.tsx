import { StyleSheet, Text, View, TextInput, FlatList} from 'react-native'
import React, { useState } from 'react'
import InputText from '../components/InputText'
import SocialIcon from '../components/SocialIcon';
import TodoItem from '../components/TodoItem';
import MyButton from '../components/MyButton';


export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}


const TodoScreen = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState<string>('')

  const addTodo = () => {
    if (text.trim() === '') return;

    const newTask: Todo = {
      id: Date.now(),
      task: text,
      completed: false
    }
    const updatedTodos = ([...todos, newTask])
    setTodos(updatedTodos)
    setText('')
  }

  const onToggleComplete = (id:number) => {
    const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
    setTodos(updatedTodos);
  }

  const renderTask = ({ item }: { item: Todo }) => (
    <View style={styles.todoItem}>
      <TodoItem todo={item} onToggle={() => onToggleComplete(item.id)} />
    </View>
  )


  return (
    <View style={styles.app}>
      
        <Text style={styles.title}>Todo App</Text>



        <View style={styles.inputContainer}>
          <TextInput 
          placeholder='Enter a task'
          style={styles.input}
          value={text}
          onChangeText={setText}
        />

        <SocialIcon 
          source={require('../../assets/plus.png')}
          style={styles.plusicon}
          size={35}
          onPress={addTodo}
        />
        </View>

        <View style={styles.mybuttonWrap}>
          <MyButton label='All Tasks' />
          
          <MyButton label='Active Tasks' />

          <MyButton label='Completed Tasks' />
        </View>

        <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTask}
        contentContainerStyle={styles.todoListContainer}
      />
      
    </View>

    
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  app: {
    flex: 1,    
    backgroundColor: '#B57EDC',
    padding: 20,
  },
  title: {
    fontSize: 32,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: 'red',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  input: {
    flex: 1,
    fontSize: 20,
    // color: '#B57EDC',
  },

  plusicon: {
    padding: 1,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#B57EDC',
  },

  mybuttonWrap: {
    flexDirection: 'row',
    alignSelf: 'center',
    // backgroundColor: 'red',
  },

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
  todoText: {
    fontSize: 18,
    color: '#333',
  },

  

})