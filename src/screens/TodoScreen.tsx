import { StyleSheet, Text, View, TextInput, FlatList} from 'react-native'
import React, { useState } from 'react'
import InputText from '../components/InputText'
import SocialIcon from '../components/SocialIcon';
import TodoItem from '../components/TodoItem';
import MyButton from '../components/MyButton';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TodoListDisplay from '../components/TodoListDisplay';
import MyImageBackground from '../components/MyImageBackground';


export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

type TodoScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Todo'>;


const TodoScreen = () => {
  const navigation = useNavigation<TodoScreenNavigationProps>();

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

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }




  return (
    
      <MyImageBackground source={require('../../assets/todobg.jpg')}  >
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Task Master</Text>
        </View>

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
          <MyButton label='All Tasks' onPress={()=>navigation.navigate('AllTask', {todos, deleteTodo, onToggleComplete})}/>
          
          <MyButton label='Active Tasks' onPress={()=>navigation.navigate('ActiveTask', {todos, deleteTodo, onToggleComplete})}/>

          <MyButton label='Completed Tasks' />
        </View>

      <TodoListDisplay 
        todos={todos}
        onToggle={onToggleComplete}
        onDelete={deleteTodo}
      />
      </View>
    </MyImageBackground>
    

    
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  app: {
    flex: 1,    
    // backgroundColor: '#B57EDC',
    padding: 20,
    
    width: '100%',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#5b86e5', 
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 32,
    alignSelf: 'center',
    marginBottom: 10,
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

})