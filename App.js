import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import { store } from './src/redux/store';
import Navigation from './src/navigation';

const App = () => {
  LogBox.ignoreAllLogs(true);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;