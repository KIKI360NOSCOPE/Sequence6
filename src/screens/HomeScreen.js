import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FormComponent from '../components/FormComponent';
import ImageComponent from '../components/ImageComponent';
import TextComponent from '../components/TextComponent';
import ListeComponent from '../components/ListeComponent';


const HomeScreen1 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <FormComponent />
        </View>
    );
}

const HomeScreen2 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <ImageComponent />
            <TextComponent />
        </View>
    );
}

const HomeScreen3 = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 35 }}>
          <ListeComponent />
      </View>
    );
  }


export default HomeScreen3