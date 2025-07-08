import React from 'react'
import Icon from 'react-native-vector-icons';

import { TextInput, StyleSheet, useColorScheme, View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import SocialIcon from './SocialIcon';
import InputText from './InputText';

const Form = () => {
  return (
      <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                  <Text style={styles.title}> LogIn</Text>

                  <Text style={styles.signUp}>
                        Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
                  </Text>
          
                  <InputText
                        iconSource={require('../../assets/username.png')}
                        placeholder="username"
                  />

                  <InputText
                        iconSource={require('../../assets/email.jpg')}
                        placeholder="email"
                        />

                  <InputText
                        iconSource={require('../../assets/password.jpg')}
                        placeholder="password"
                        />
                              
                  
              
                  
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                  
              
                  <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Login</Text>
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
      alignSelf: 'flex-end',
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