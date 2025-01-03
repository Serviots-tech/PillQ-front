
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SignUp,
    Welcome,
    LogIn,
} from '../screens';
import { navigationStrings } from '../constants/navigationStrings';
import { SafeAreaView } from 'react-native';

export type RootStackParamList = {
    Welcome: undefined,
    SignUp: undefined,
    LogIn:undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings?.WELCOME} component={Welcome} />
                  <SafeAreaView></SafeAreaView>
            
            <Stack.Screen name={navigationStrings?.SIGN_UP} component={SignUp} />
            <Stack.Screen name={navigationStrings?.LOGIN} component={LogIn} />

        </Stack.Navigator>

    )
}