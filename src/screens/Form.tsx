import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import SocialIcon from '../components/SocialIcon';
import InputText from '../components/InputText';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MyImageBackground from '../components/MyImageBackground';


// type FormNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Form'>;

interface FormProps {
      title: string;
      buttonLabel: string;
      showUsernameField?: boolean;
      onSubmit: (form: FormValues)=>void;
      onToggleForm: ()=>void;
}

export interface FormValues {
      username?: string;
      email: string;
      password: string;
}

const Form = ({title, buttonLabel, showUsernameField, onSubmit, onToggleForm} : FormProps) => {
      const [form, setForm] = useState<FormValues>({email: '', password: '', username: ''})
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);

      // const navigation = useNavigation<FormNavigationProps>();

      const togglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible); 
      };

      const handleSubmit = () => {
            console.log('Form Submitted:');
            onSubmit(form);
            setForm({ email: '', password: '', username: '' });

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
                              // onPress={()=>navigation.goBack()}
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
                              

                              <Text style={styles.title}>
                                    {title}
                              </Text>

                              <Text style={styles.signUp}>
                                    {title === 'Login' ? "Don't have an account? " : "Already have an account? "}
                                    <Text style={styles.signUpLink} onPress={onToggleForm}>
                                          {title === 'Login' ? 'Sign Up' : 'Login'}
                                    </Text>
                              </Text>
                              
                              {showUsernameField && (
                                    <InputText
                                    placeholder="Username"
                                    iconSource={require('../../assets/username.png')}
                                    value={form.username!}
                                    onChangeText={(text) => setForm({ ...form, username: text })}
                                    />
                              )}

                              <InputText
                                    iconSource={require('../../assets/email.png')}
                                    placeholder="email"
                                    value={form.email}
                                    onChangeText={(text) => setForm({ ...form, email: text })}
                              />

                              <InputText
                                    iconSource={require('../../assets/password.png')}
                                    placeholder="password"
                                    value={form.password}
                                    onChangeText={(text) => setForm({ ...form, password: text })}
                                    secureTextEntry={!isPasswordVisible}
                                    onIconPress={togglePasswordVisibility}
                              />

                                    
                              
                              <Text style={styles.forgotPassword}>Forgot Password?</Text>
                                                          
                              
                              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                    <Text style={styles.text}>{buttonLabel}</Text>
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


export default Form