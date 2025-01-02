
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SignUp,
    Welcome
} from '../screens';
import { navigationStrings } from '../constants/navigationStrings';

export type RootStackParamList = {
    Welcome: undefined,
    SignUp: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings?.WELCOME} component={Welcome} />
            <Stack.Screen name={navigationStrings?.SIGN_UP} component={SignUp} />
        </Stack.Navigator>

    )
}