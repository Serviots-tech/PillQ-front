
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { navigationStrings } from '../constants/navigationStrings';
import {
    Home
} from '../screens';

export type RootStackParamList = {
    Home: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings?.HOME} component={Home} />
        </Stack.Navigator>

    )
}
