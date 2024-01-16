import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, StatusBar, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import CustomDrawer from '../../screens/CustomDrawer/CustomeDrawer';
import { useTranslation } from 'react-i18next';


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {

    const { t, i18n } = useTranslation();

    return (
        <Drawer.Navigator
            // useLegacyImplementation
            initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                sceneContainerStyle: { backgroundColor: "#c6cbef", },
                drawerType: "back",
                overlayColor: 'transparent',

                drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: 200,
                },
            }}>


            <Drawer.Screen
                options={{
                    drawerIcon: () => (
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={require('../../../assets/images/UK.png')} />
                    ),
                }}
                listeners={{
                    drawerItemPress: () => {
                        i18n.changeLanguage('en')
                    }
                }}
                name="English" component={HomeScreen}
            />



            <Drawer.Screen
                options={{
                    drawerIcon: () => (
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={require('../../../assets/images/Spain.png')} />
                    ),
                }}
                listeners={{
                    drawerItemPress: () => {
                        i18n.changeLanguage('es')
                    }
                }}
                name="Spanish" component={HomeScreen}
            />
        </Drawer.Navigator>

    );
}
