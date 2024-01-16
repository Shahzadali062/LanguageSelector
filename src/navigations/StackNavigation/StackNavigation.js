import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../../screens/FirstScreen/FirstScreen';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';


const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='DrawerNavigation'>
            {/* <Stack.Screen name="FirstScreen" component={FirstScreen} /> */}
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}
