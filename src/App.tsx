import notifee, { AndroidImportance } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import { View, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { AuthProvider } from './components/authContext';
import { ToastProvider } from './components/customToast/ToastManager';
import Routes from './Navigation/Routes';
import store from './redux/store';


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
      id: 'default2',
      name: 'Default Channel 2',
      sound: "notification_sound",
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
        sound: "notification_sound"
      },
      ios:{
        
      }
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
