import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import TitleComponent from './TitleComponent'
import DescComponent from './DescComponent'
import ImgComponent from './ImgComponent'
import tpList from 'sequence6/assets/tp.json';

const ListeComponent = () => {
  return (
    <FlatList
    data={tpList}
    renderItem={({ item }) => (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ImgComponent />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <TitleComponent />
          <DescComponent />
        </View>
      </View>
    )}
    keyExtractor={item => item.id}
  />
  )
}

export default ListeComponent

