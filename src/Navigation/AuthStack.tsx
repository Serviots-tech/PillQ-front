
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SignUp,
    Welcome,
    LogIn,
} from '../screens';
import { navigationStrings } from '../constants/navigationStrings';
import VerifyEmail from '../screens/VerifyEmail';

export type RootStackParamList = {
    Welcome: undefined,
    SignUp: undefined,
    VerifyEmail:undefined
    LogIn:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings?.WELCOME} component={Welcome} />
            <Stack.Screen name={navigationStrings?.SIGN_UP} component={SignUp} />
            <Stack.Screen name={navigationStrings?.VERIFY_EMAIL} component={VerifyEmail} />
            <Stack.Screen name={navigationStrings?.LOGIN} component={LogIn} />
            

            <Stack.Screen name={navigationStrings?.VERIFY_EMAIL} component={VerifyEmail} />
        </Stack.Navigator>

    )
}
