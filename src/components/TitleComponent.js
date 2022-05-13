import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TitleComponent = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
  )
}

export default TitleComponent
const styles = StyleSheet.create({

    itemTitle: {
      flex: 1,
      padding: 10,
      fontSize: 20,
      margin: 10,
    },

  
  
  });