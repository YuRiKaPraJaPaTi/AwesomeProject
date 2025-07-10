import { StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Form from './Form';
import { FormValues } from './Form';


type LoginNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
      
      const navigation = useNavigation<LoginNavigationProps>();

      const handleLogin = (form: FormValues) => {
            console.log('Logging in with:', form);
            navigation.navigate('Todo');
      };
      

      return (
            
            <Form
                  title="Login"
                  buttonLabel="Log In"
                  onSubmit={handleLogin}
                  onToggleForm={() => navigation.navigate('Signup')}
            />
                              
      )
}

const styles = StyleSheet.create({

});


export default LoginScreen