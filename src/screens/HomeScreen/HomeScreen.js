import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, StatusBar, Pressable, TouchableOpacity } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';
import LanguageModal from '../../components/LanguageModal/LanguageModal';
import { useTranslation } from 'react-i18next';

export default function HomeScreen({ navigation }) {
    const drawerStatus = useDrawerStatus();
    const [LangModalVisible, setLangModalVisible] = React.useState(false)
    const { t, i18n } = useTranslation();
    return (
        <>
            <StatusBar backgroundColor={drawerStatus == "open" ? "#c6cbef" : "gray"} />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={
                        styles.button
                    }
                    onPress={() => {
                        navigation.openDrawer()
                        // setLangModalVisible(true)
                    }}>
                    <Text style={{ color: 'black' }}>{t('changeLang')}</Text>
                </TouchableOpacity>

                <Text>{t('welcomeMessage')}</Text>
            </SafeAreaView>

            <LanguageModal
                LangModalVisible={LangModalVisible}
                setLangModalVisible={setLangModalVisible}
            />
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "gray"
    },

    button:
    {
        backgroundColor: 'white',
        padding: 5,
        margin: 2,
        borderRadius: 5,
        position: 'absolute',
        top: 0,
        left: 0
    }
});