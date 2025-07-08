import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


type Props = {
  source: any; 
  onPress?: () => void;
  size?: number;
};

const SocialIcon = ({ source, onPress, size = 40 }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.imgsize}>
        <Image source={source} style={{ width: size, height: size }} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  )
}



export default SocialIcon

const styles = StyleSheet.create({
  imgsize: {
      height: 30,
      width: 30,
  }
})