import React, { useEffect } from 'react';
import { Alert, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Navigation/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from './components/customToast/ToastManager';
import { AuthProvider } from './components/authContext';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    requestPermissionAndroid()
  }, [])

  const requestPermissionAndroid = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // Alert.alert("Permission granted")
      getTokens()
    } else {
      Alert.alert("Permission not granted")
    }
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const getTokens = async () => {
    const fcmToken = await messaging().getToken();
    console.log("🚀 ~ getTokens ~ fcmToken:", fcmToken)
  }

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ToastProvider>
          <Provider store={store}>
            <AuthProvider>
              <View style={{ flex: 1 }}>
                <Routes />
              </View>
            </AuthProvider>
          </Provider>
        </ToastProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
