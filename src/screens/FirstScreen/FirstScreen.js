import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import RenderItem from '../../utils/RenderItem/RenderItem';


const FirstScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text onPress={() => { navigation.navigate("DrawerNavigation") }}>Go to Navigation 1</Text>
        </View>
    );
};

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c6cbef"
    }
});
