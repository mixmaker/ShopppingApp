/**
 * @format
 */
import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalState from './src/contexts/GlobalState';

const CustomTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#1E1F28',
  },
};
const customEntryPoint = () => (
  <SafeAreaProvider>
    <GlobalState>
      <PaperProvider>
        <NavigationContainer theme={CustomTheme}>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </GlobalState>
  </SafeAreaProvider>
);
AppRegistry.registerComponent(appName, () => customEntryPoint);
