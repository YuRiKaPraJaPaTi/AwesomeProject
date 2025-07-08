import React, { useState } from 'react'
import Icon from 'react-native-vector-icons';

import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native';
import SocialIcon from './SocialIcon';
import InputText from './InputText';

const Form = () => {
      const [isLogin, setIsLogin] = useState(true)
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

            setUsername('');
            setEmail('');
            setPassword('');

      };

      return (
            <SafeAreaView style={styles.container}>

                  <View style={styles.main}>

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
                              iconSource={require('../../assets/email.jpg')}
                              placeholder="email"
                              value={email}
                              onChangeText={setEmail}
                        />

                        <InputText
                              iconSource={require('../../assets/password.jpg')}
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
            
                  </View>
            </SafeAreaView>
      )
}

const styles = StyleSheet.create({
       container: {
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 6,
            backgroundColor: 'white',
            },

      main: {
            margin: 20,
            padding: 10,
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
            height: 50,
            width: 100,
            backgroundColor: '#B57EDC',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            margin: 20,
            alignSelf: 'center',
      },

      text: {
            color: 'white',
            fontSize: 20,
      },

      images: {
            display: 'flex',
            flexDirection: 'row',
            gap: 30,
            justifyContent: 'center',
      },

});


export default Form