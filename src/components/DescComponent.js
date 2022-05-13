import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DescComponent = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.itemDesc}>{item.desc}</Text>
        </View>
  )
}

export default DescComponent
const styles = StyleSheet.create({

    itemDesc: {
      flex: 1,
      padding: 10,
      fontSize: 15,
      margin: 10,
    },

  
  
  });