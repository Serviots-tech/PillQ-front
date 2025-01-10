import React from 'react';
import {View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Navigation/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from './components/customToast/ToastManager';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ToastProvider>
          <Provider store={store}>
            <View style={{ flex: 1 }}>
              <Routes />
            </View>
          </Provider>
        </ToastProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
