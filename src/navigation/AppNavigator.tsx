import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Form from '../screens/Form';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TodoScreen from '../screens/TodoScreen';
import AllTaskScreen from '../screens/AllTaskScreen'
import { Todo } from '../screens/TodoScreen';


export type RootStackParamList = {
  Welcome: undefined;
  Form: undefined;
  Login: undefined;
  Signup: undefined;
  Todo: undefined;
  AllTask: {todos: Todo[], deleteTodo: (id:number)=>void}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
      <Stack.Screen name="Todo" component={TodoScreen} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AllTask" component={AllTaskScreen}  />
    </Stack.Navigator>
  );
};

export default AppNavigator;
