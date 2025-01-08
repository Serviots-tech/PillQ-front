
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SignUp,
    LogIn,
    Welcome,
    VerifyEmail
} from '../screens';
import { navigationStrings } from '../constants/navigationStrings';
import ForgetPassword from '../screens/ForgotPassword';

export type RootStackParamList = {
    Welcome: undefined,
    SignUp: undefined,
    LogIn: undefined,
    VerifyEmail: { isPassword: boolean },
    ForgotPassword:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationStrings?.WELCOME} component={Welcome} />
            <Stack.Screen name={navigationStrings?.SIGN_UP} component={SignUp} />
            <Stack.Screen name={navigationStrings?.VERIFY_EMAIL} component={VerifyEmail} />
            <Stack.Screen name={navigationStrings?.LOGIN} component={LogIn} />
            <Stack.Screen name={navigationStrings?.FORGOT_PASSWORD} component={ForgetPassword} />
        </Stack.Navigator>

    )
}
