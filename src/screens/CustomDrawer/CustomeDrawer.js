import React, { useEffect, useState, } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, useDrawerStatus } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import styles from './style';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';


const CustomDrawer = (props) => {
    const navigation = useNavigation()
    const { t, i18n } = useTranslation();
    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
                <View style={{ width: "100%" }}>
                    <DrawerItemList {...props}
                    />
                    {/* <DrawerItem
                        labelStyle={{ width: "100%" }}
                        label="Spanish"
                        onPress={() => {
                            i18n.changeLanguage('es')
                            navigation.closeDrawer()
                        }}
                    />
                    <DrawerItem
                        labelStyle={styles.labelStyle}
                        label="English"
                        onPress={() => i18n.changeLanguage('en')}
                    /> */}
                </View>
            </DrawerContentScrollView>

        </View>
    )
}

export default CustomDrawer;