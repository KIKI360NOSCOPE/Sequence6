import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';


const App = () => {
  return (
    <View style={Styles.container}>
      <HomeScreen />
    </View>
  );
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;