import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from '../authContext';
import { navigationStrings } from '../../constants/navigationStrings';

type ProtectedRouteProps = {
    children: React.ReactNode;
    navigation: any; 
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, navigation }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === null) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!isAuthenticated) {
        navigation.navigate(navigationStrings.LOGIN);
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

