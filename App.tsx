/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Form from './src/screens/Form';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'

function App() {
  

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}


export default App;
