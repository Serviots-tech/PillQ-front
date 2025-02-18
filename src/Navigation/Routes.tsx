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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, ManageIcon, MedicationIcon, ProgressIcon } from '../constants/svgs';
import ComingSoonScreen from '../screens/ComingSoon';


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

const Tab = createBottomTabNavigator();

export default function Routes() {
	const { isAuthenticated, isLoggedout, isAdditionalDataPending, isLoginAndAddMed } = useAuth();

	const Tab = createBottomTabNavigator();
	const HomeTabs = () => (
		<Tab.Navigator
			initialRouteName={navigationStrings.HOME}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					const color = focused ? "#00A8A8" : "#666";
					switch (route.name) {
						case navigationStrings.HOME:
							return <HomeIcon width={24} height={24} color={color} />;
						case navigationStrings.MEDICATIONS:
							return <MedicationIcon width={24} height={24} color={color} />;
						case navigationStrings.PROGRESS:
							return <ProgressIcon width={24} height={24} color={color} />;
						case navigationStrings.MANAGE:
							return <ManageIcon width={24} height={24} color={color} />;
						default:
							return null;
					}
				},
				tabBarLabel: (() => {
					switch (route.name) {
						case navigationStrings.HOME:
							return "Home";
						case navigationStrings.MEDICATIONS:
							return "Medications";
						case navigationStrings.PROGRESS:
							return "Progress"
						case navigationStrings.MANAGE:
							return "Manage"
						default:
							return "";
					}
				})(),
				tabBarActiveTintColor: '#00A8A8',
				tabBarInactiveTintColor: '#666',
				headerShown: false, 
			})}
		>
			<Tab.Screen name={navigationStrings.HOME} component={(props: any) => <Home {...props} />} />
			<Tab.Screen name={navigationStrings.MEDICATIONS} component={(props: any) => <ComingSoonScreen {...props} />} />
			<Tab.Screen name={navigationStrings.PROGRESS} component={(props: any) => <ComingSoonScreen {...props} />} />
			<Tab.Screen name={navigationStrings.MANAGE} component={(props: any) => <ComingSoonScreen {...props} />} />
		</Tab.Navigator>
	);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromRightAndroid }}>
				{/* <Stack.Screen name={navigationStrings?.SEARCH_MED} component={SearchMed} />
				<Stack.Screen name={navigationStrings?.MED_FORM} component={MedForm} />
				<Stack.Screen name={navigationStrings?.HOW_OFTEN} component={HowOften} />
				<Stack.Screen name={navigationStrings?.HOW_OFTEN_EVERY_DAY} component={HowOftenEveryDay} />
				<Stack.Screen name={navigationStrings?.PILL_PLANNER} component={PillPlanner} /> */}

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
								<Stack.Screen name={navigationStrings?.HOME} component={HomeTabs} options={{ headerShown: false }} />
							{/* <Stack.Screen name={navigationStrings?.HOME} component={Home}/> */}
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
