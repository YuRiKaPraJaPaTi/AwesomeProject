import React, { useState } from 'react'
import Icon from 'react-native-vector-icons';

import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native';
import SocialIcon from '../components/SocialIcon';
import InputText from '../components/InputText';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'react-native';

type FormNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Form'>;

const Form = () => {
      const [isLogin, setIsLogin] = useState(true)
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);

      const navigation = useNavigation<FormNavigationProps>();

      const handleToggle = () => {
            setIsLogin(!isLogin);
            setUsername('');
            setEmail('');
            setPassword('');
            setIsPasswordVisible(false);
      };

      const togglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible); 
      };

      const handleSubmit = () => {
            console.log('Form Submitted:');
            console.log('Username:',username);
            console.log('Email:', email);
            console.log('Password:', password);

            if (isLogin) {
                  navigation.navigate('Todo')
            }
            else {
                  setIsLogin(true)
            }

            setUsername('');
            setEmail('');
            setPassword(''); 
            

      };

      return (
            <View style={styles.container}>
                  <SafeAreaView style={styles.main}>
                         <View style={styles.backarrow}>
                              <TouchableOpacity
                                    onPress={()=>navigation.goBack()}
                                    style={styles.backarrow}
                              >
                                    <SocialIcon 
                                          source={require('../../assets/left-chevron.png')}
                                          size={30}
                                    />
                              </TouchableOpacity>
                         </View>

                        <View>
                              <Image 
                                    source={require('../../assets/backgroundImage.jpg')}
                                    style={styles.topimage}
                                    resizeMode="cover"
                              />
                        </View>

                        <Text style={styles.title}>{isLogin ? 'LogIn' : 'Sign Up'}</Text>

                        <Text style={styles.signUp}>
                              {isLogin ? 'Donot have an account? ' : 'Already have an account! '}
                              <Text style={styles.signUpLink} onPress={handleToggle}>
                                    {isLogin ? 'Sign Up' : 'LogIn'}
                              </Text>
                        </Text>
                        
                        <InputText
                              iconSource={require('../../assets/username.png')}
                              placeholder="username"
                              value={username}
                              onChangeText={setUsername}
                        />

                        <InputText
                              iconSource={require('../../assets/email.png')}
                              placeholder="email"
                              value={email}
                              onChangeText={setEmail}
                        />

                        <InputText
                              iconSource={require('../../assets/password.png')}
                              placeholder="password"
                              value={password}
                              onChangeText={setPassword}
                              secureTextEntry={!isPasswordVisible}
                              onIconPress={togglePasswordVisibility}
                        />

                              
                        {isLogin && (
                              <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        )}
                        
                        
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                              <Text style={styles.text}>{isLogin ? 'LogIn' : 'Sign Up'}</Text>
                        </TouchableOpacity>


                        <View style={styles.images}>

                              <SocialIcon
                                    source={require('../../assets/fb-image.png')}
                                    onPress={()=>console.log('FaceBook')}
                              />

                              <SocialIcon
                                    source={require('../../assets/google-image.png')}
                                    onPress={()=>console.log('Google')}
                              />

                              <SocialIcon
                                    source={require('../../assets/x-image.jpg')}
                                    onPress={()=>console.log('X Twitter')}
                              />

                        </View>
            
                  </SafeAreaView>
            </View>
      )
}

const styles = StyleSheet.create({
       container: {
            flex: 1,
            // justifyContent: 'center',
            // marginHorizontal: 6,
            backgroundColor: 'white',
            },

      main: {
            flex: 1,
      },

      backarrow: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            
      },

      topimage: {
            flexDirection: 'row',
            justifyContent: 'center',
            width: 200,
            height: 200,
      },

      title: {
            fontFamily: 'monospace',
            fontSize: 50,
            color: 'black',
            marginBottom: 20,
      
      },

      signUp: {
            color: '#000',
            marginBottom: 50,
      },

      signUpLink: {
            color: '#B57EDC',
            textDecorationLine: 'underline',
      },

      forgotPassword: {
            alignSelf: 'center',
            color: '#B57EDC',
      
      },

      button: {
            margin: 20,
            backgroundColor: '#B57EDC',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 25,
            alignSelf: 'center',
      },

      text: {
            color: 'white',
            fontSize: 26,
            fontWeight: 'bold',
      },

      images: {
            display: 'flex',
            flexDirection: 'row',
            gap: 30,
            justifyContent: 'center',
      },

});


export default Form