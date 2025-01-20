import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default function Routes() {
	const isLoggedIn = useSelector((data: any) => data?.isLoggedIn?.isLoggedIn);

	return (
		<NavigationContainer>
			{isLoggedIn? <MainStack /> : <AuthStack />}
		</NavigationContainer>
	);
}
