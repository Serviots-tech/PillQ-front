import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../components/authContext';
import { Home, LogIn, LogInAsGuest, SignUp, SplashScreen, VerifyEmail, Welcome } from '../screens';
import { navigationStrings } from '../constants/navigationStrings';
import GenderSelection from '../screens/GenderSelection';
import AppUsageSelection from '../screens/AppUsageSelection';
import BirthdaySelection from '../screens/BirthdaySelection';
import ForgetPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import ResetPasswordSuccess from '../screens/PasswordResetSuccess'
import OnboardSuccessScreen from '../screens/OnboSuccess';
import SearchMed from '../screens/SearchMed';
import MedForm from '../screens/MedForm';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HowOften from '../screens/HowOften';
import HowOftenEveryDay from '../screens/HowOftenEveryDay';
import PillPlanner from '../screens/PillPlanner';
import CustomProfileHeader from '../components/customProfileHeader';


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
	OnboardSuccess: undefined,
	SearchMed: undefined,
	MedForm: undefined,
	HowOften: undefined,
	HowOftenEveryDay: undefined,
	PillPlanner: undefined

};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
	const { isAuthenticated, isLoggedout, isAdditionalDataPending, isLoginAndAddMed } = useAuth();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, cardStyleInterpolator: CardStyleInterpolators.forFadeFromRightAndroid }}>


				{!isAuthenticated ? (
					<>
						{isLoggedout ?
							<Stack.Screen name={navigationStrings?.WELCOME} component={Welcome} /> :
							<>
								{isAdditionalDataPending ? <Stack.Screen name={navigationStrings?.GENDER_SELECTION} component={GenderSelection} /> :
									<>
										<Stack.Screen name={navigationStrings?.SPLASH_SCREEN} component={SplashScreen} />
										<Stack.Screen name={navigationStrings?.ONBOARD_SUCCESS} component={OnboardSuccessScreen} />
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
					<>{isLoginAndAddMed ? <Stack.Screen name={navigationStrings?.SEARCH_MED} component={SearchMed} /> :
						<>
							<Stack.Screen name={navigationStrings?.HOME} component={Home} />
							<Stack.Screen name={navigationStrings?.SEARCH_MED} component={SearchMed} />
							<Stack.Screen name={navigationStrings?.MED_FORM} component={MedForm} />
							<Stack.Screen name={navigationStrings?.HOW_OFTEN} component={HowOften} />
							<Stack.Screen name={navigationStrings?.HOW_OFTEN_EVERY_DAY} component={HowOftenEveryDay} />
							<Stack.Screen name={navigationStrings?.PILL_PLANNER} component={PillPlanner} />
						</>}
					</>
				)}

			</Stack.Navigator>
		</NavigationContainer>
	);
};
