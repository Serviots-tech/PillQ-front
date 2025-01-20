
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { navigationStrings } from '../constants/navigationStrings';
import {
    Home
} from '../screens';
import GenderSelection from '../screens/GenderSelection';

export type MainStackParamList = {
    Home: undefined,
    GenderSelection:undefined
}

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings?.HOME} component={Home} />
            <Stack.Screen name={navigationStrings?.GENDER_SELECTION} component={GenderSelection} />
        </Stack.Navigator>

    )
}
