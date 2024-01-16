import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderItem = ({ item , fontSize , fontColor }) => {
    return (
        <View>
            <Text style={{fontSize:fontSize , color:fontColor}}>{item.Name}</Text>
        </View>
    )
}

export default RenderItem;