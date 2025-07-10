import { StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Form from './Form';
import { FormValues } from './Form';


type SignupNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

const SignupScreen = () => {
      
      const navigation = useNavigation<SignupNavigationProps>();

      const handleSignup = (form: FormValues) => {
            console.log('Signing up with:', form);
            navigation.navigate('Login');
      };      

      return (
            
            <Form
                  title="Sign Up"
                  buttonLabel="Create Account"
                  showUsernameField
                  onSubmit={handleSignup}
                  onToggleForm={() => navigation.navigate('Login')}
            />
                                                
      )
}

const styles = StyleSheet.create({

});


export default SignupScreen