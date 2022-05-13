import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent'


const ButtonComponent = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
                <TextComponent />
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent