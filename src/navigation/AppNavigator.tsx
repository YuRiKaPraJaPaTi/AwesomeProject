import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Form from '../screens/Form';
import TodoScreen from '../screens/TodoScreen';


export type RootStackParamList = {
  Welcome: undefined;
  Form: undefined;
  Todo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
      <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
