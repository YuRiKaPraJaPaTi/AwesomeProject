import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; 
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyImageBackground from '../components/MyImageBackground';


type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
      
            
            <MyImageBackground
                  source={require('../../assets/backgroundImage.jpg')}
                  
            >
                  
                  <View style={styles.main}>
                        <Text style={styles.titleText}>
                              Welcome!
                        </Text>

                        <View style={styles.imageContainer}>
                              <Image  
                                    source={require('../../assets/hello.png')}
                                    style={styles.image}
                              />
                        </View>
                        
                        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Login')}>
                              <Text style={styles.getStartedButtonText}>Get Started</Text>
                        </TouchableOpacity>

                        
                        <Text style={styles.signUp}>
                              Don't have an account?  
                              <Text style={styles.signUpLink}>
                                    Sign Up
                              </Text>
                        </Text>

                  </View>

            </MyImageBackground>

      
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
      

       

      main: {
            // flex:1,
            marginTop: 16,
            marginBottom: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', 
            padding: 40,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 30,
      },

      titleText: {
            color: 'white',
            alignSelf: 'center',
            fontSize: 50,
            fontWeight: 'bold',

      },

      imageContainer: {
            width: 250,
            height: 250,
      },

      image: {
            borderRadius: 50,
            width: '100%',
            height: '100%',
            
      },

      getStartedButton: {
            marginTop: 20,
            backgroundColor: '#B57EDC',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 25,
            alignSelf: 'center',
      },

      getStartedButtonText: {
            color: 'white',
            fontSize: 26,
            fontWeight: 'bold',
      },

      signUp: {
            color: '#000',
            marginBottom: 50,
            fontSize: 20,
            
      },

      signUpLink: {
            color: 'purple',
            textDecorationLine: 'underline',
            fontSize: 20,
      },
});
