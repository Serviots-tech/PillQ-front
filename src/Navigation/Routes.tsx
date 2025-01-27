// import { NavigationContainer } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// import AuthStack from './AuthStack';
// import MainStack from './MainStack';

// export default function Routes() {
// 	const isLoggedIn = useSelector((data: any) => data?.isLoggedIn?.isLoggedIn);

// 	return (
// 		<NavigationContainer>
// 			{isLoggedIn? <MainStack /> : <AuthStack />}
// 		</NavigationContainer>
// 	);
// }


import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../components/authContext';
import { Home, LogIn, LogInAsGuest, SignUp, SplashScreen, VerifyEmail, Welcome } from '../screens';
import { navigationStrings } from '../constants/navigationStrings';
import GenderSelection from '../screens/GenderSelection';
import AppUsageSelection from '../screens/AppUsageSelection';
import BirthdaySelection from '../screens/BirthdaySelection';
import ForgetPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import ResetPasswordSuccess from '../screens/PasswordResetSuccess'


export type RootStackParamList = {
	SplashScreen: undefined,
	Welcome: undefined,
	SignUp: undefined,
	LogIn: undefined,
	VerifyEmail: undefined,
	ForgotPassword: undefined,
	ResetPassword: undefined,
	ResetPasswordSuccess: undefined,
	LogInAsGuest: undefined,
	GenderSelection: undefined,
	BirthdaySelection: undefined,
	AppUsageSelection: undefined,
	Home: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
	const { isAuthenticated, isLoggedout, isAdditionalDataPending } = useAuth();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{!isAuthenticated ? (
					<>
						{isLoggedout ?
							<Stack.Screen name={navigationStrings?.WELCOME} component={Welcome} /> :
							<>
								{isAdditionalDataPending ? <Stack.Screen name={navigationStrings?.GENDER_SELECTION} component={GenderSelection} /> :
									<>
										<Stack.Screen name={navigationStrings?.SPLASH_SCREEN} component={SplashScreen} />
										<Stack.Screen name={navigationStrings?.WELCOME} component={Welcome} />
										<Stack.Screen name={navigationStrings?.SIGN_UP} component={SignUp} />
										<Stack.Screen name={navigationStrings?.VERIFY_EMAIL} component={VerifyEmail} />
										<Stack.Screen name={navigationStrings?.LOGIN} component={LogIn} />
										<Stack.Screen name={navigationStrings?.LOGIN_AS_GUEST} component={LogInAsGuest} />
										<Stack.Screen name={navigationStrings?.FORGOT_PASSWORD} component={ForgetPassword} />
										<Stack.Screen name={navigationStrings?.RESET_PASSWORD} component={ResetPassword} />
										<Stack.Screen name={navigationStrings?.RESET_PASSWORD_SUCCESS} component={ResetPasswordSuccess} />
										<Stack.Screen name={navigationStrings?.GENDER_SELECTION} component={GenderSelection} />
										<Stack.Screen name={navigationStrings?.BIRTHDAY_SELECTION} component={BirthdaySelection} />
										<Stack.Screen name={navigationStrings?.APP_USAGE_SELECTION} component={AppUsageSelection} />
									</>
								}

							</>
						}
					</>

				) : (
					<>
						<Stack.Screen name={navigationStrings?.HOME} component={Home} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
