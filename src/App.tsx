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
import notifee, { AndroidImportance } from '@notifee/react-native';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage)
    })
    return unsubscribe
  })

  const onDisplayNotification = async (remoteMessage:any) =>{

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH, 
    })

    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage?.notification?.title || "New Notification",
      body: remoteMessage?.notification?.body || "You have a new message",
      android: {
        channelId,
        smallIcon: 'notification_icon', // Ensure this icon exists in your project
        pressAction: { id: 'default' },
      },
    });

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
