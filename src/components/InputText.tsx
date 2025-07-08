import { StyleSheet, TextInput, View, Image } from 'react-native'
import React from 'react'



const InputText = ({iconSource, placeholder}:{iconSource:any, placeholder:string}) => {
  return (
    <View style={styles.inputContainer}>
                            {/* <Icon name = "mail-outline" size={25} style={styles.icon} /> */}
                            <Image
                            style={styles.icon}
                            resizeMode="contain" 
                            source={iconSource}
                      />
                            <TextInput  style={styles.input}
                            placeholder={placeholder}
                            />
                      </View>
  )
}

export default InputText

const styles = StyleSheet.create({
      inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

   icon: {
    marginRight: 10,
    height:30,
    width: 30,
  },

   input: {
    flex: 1,
    height: '100%',
    
  },
})