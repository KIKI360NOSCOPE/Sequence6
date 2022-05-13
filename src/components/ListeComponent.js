import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import tpList from '../../assets/tp.json'

const ListeComponent = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 35 }}>
          <FlatList
            data={tpList}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Image source={{ uri: item.img }} style={styles.itemImg} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDesc}>{item.desc}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      );
    }

    const styles = StyleSheet.create({
        itemImg: {
            flex: 1,
            width: '75%',
            height: '75%',
            margin: 10,
        },
        itemTitle: {
            flex: 1,
            padding: 10,
            fontSize: 20,
            margin: 10,
          },
          itemDesc: {
            flex: 1,
            padding: 10,
            fontSize: 15,
            margin: 10,
          },
      
    });
    


export default ListeComponent

