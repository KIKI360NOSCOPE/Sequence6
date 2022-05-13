import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{width: 300, height: 300}} source={require('sequence6/assets/MohAvatar.png')} />
    </View>
  )
}

export default ImageComponent