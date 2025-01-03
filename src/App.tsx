import React from 'react';
import { SafeAreaView, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Navigation/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
