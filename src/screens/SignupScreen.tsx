import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import SocialIcon from '../components/SocialIcon';
import InputText from '../components/InputText';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MyImageBackground from '../components/MyImageBackground';


type FormNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Form'>;

const SignupScreen = () => {
      const [isLogin, setIsLogin] = useState(true)
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);

      const navigation = useNavigation<FormNavigationProps>();

      const handleToggle = () => {
            navigation.navigate('Login')
      };

      const togglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible); 
      };

      const handleSubmit = () => {
            console.log('Form Submitted:');
            console.log('Username:',username);
            console.log('Email:', email);
            console.log('Password:', password);

            
            navigation.navigate('Login')
            

            setUsername('');
            setEmail('');
            setPassword(''); 
            

      };

      return (
            <View style={styles.container}>
                  {/* Top Image Section */}
                  <View style={styles.topSection}>
                        <MyImageBackground
                        source={require('../../assets/backgroundImage.jpg')}
                        // style={styles.topImage}
                        // resizeMode="cover"
                        >
                        <TouchableOpacity 
                              onPress={()=>navigation.goBack()}
                              style={styles.backArrow} >
                              <SocialIcon 
                                    source={require('../../assets/left-chevron.png')} 
                                    size={30}
                              />
                        
                        </TouchableOpacity>
                        </MyImageBackground>
                        
                  </View>

                  {/* Bottom Form Section */}

                  <SafeAreaView style={styles.bottomSection}>
                        <KeyboardAvoidingView
                              style={{flex:1}}
                              keyboardVerticalOffset={60}
                        >

                        <ScrollView
                              contentContainerStyle={styles.scrollContainer}
                              keyboardShouldPersistTaps="handled"
                        >
                              

                              <Text style={styles.title}>Sign Up</Text>

                              <Text style={styles.signUp}>
                                    Alreadyt have an account
                                    <Text style={styles.signUpLink} onPress={handleToggle}>
                                          LogIn
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

                                    
                              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                    <Text style={styles.text}>SignUp</Text>
                              </TouchableOpacity>

                              <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold'}}>OR</Text>
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
                        </ScrollView>
                        </KeyboardAvoidingView>
                  </SafeAreaView>
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'white',
      },
      topSection: {
            height: 250,
            position: 'relative',
      },
      backArrow: {
            position: 'absolute',
            top: 40,
            left: 16,
            backgroundColor: '#B57EDC',
            padding: 6,
            borderRadius: 20,
      },
      bottomSection: {
            flex: 1,
            backgroundColor: 'white',
            padding: 32,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            marginTop: -50, 
      },
      
      scrollContainer: {
            padding: 20,
            justifyContent: 'center',
      },

      title: {
            // fontFamily: 'monospace',
            fontSize: 50,
            color: 'black',
            marginBottom: 20,
            fontWeight: 'bold',
            textAlign: 'center',
      
      },

      signUp: {
            color: '#000',
            marginBottom: 30,
      },

      signUpLink: {
            color: '#B57EDC',
            textDecorationLine: 'underline',
      },

      forgotPassword: {
            // alignSelf: 'center',
            color: '#B57EDC',
      
      },

      button: {
            margin: 10,
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
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            gap: 30,
            justifyContent: 'center',
      },


      

});


export default SignupScreen