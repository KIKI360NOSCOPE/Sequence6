import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


const ImgComponent = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Image source={{ uri: item.img }} style={styles.itemImg} />
        </View>
    )
}

export default ImgComponent

const styles = StyleSheet.create({
    itemImg: {
        flex: 1,
        width: '75%',
        height: '75%',
        margin: 10,
    },


});