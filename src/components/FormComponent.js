import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'

const FormComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput style={{ width: 50, height: 50 }}></TextInput>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ButtonComponent />
            </View>
        </View>
    )
}

export default FormComponent