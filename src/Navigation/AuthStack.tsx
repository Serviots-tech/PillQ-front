
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
import ResetPassword from '../screens/ResetPassword';
import ResetPasswordSuccess from '../screens/PasswordResetSuccess'

export type RootStackParamList = {
    Welcome: undefined,
    SignUp: undefined,
    LogIn: undefined,
    VerifyEmail: undefined,
    ForgotPassword:undefined,
    ResetPassword:undefined,
    ResetPasswordSuccess:undefined
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
            <Stack.Screen name={navigationStrings?.RESET_PASSWORD} component={ResetPassword} />
            <Stack.Screen name={navigationStrings?.RESET_PASSWORD_SUCCESS} component={ResetPasswordSuccess} />
        </Stack.Navigator>

    )
}
