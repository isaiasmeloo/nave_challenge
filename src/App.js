import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';

import 'react-native-gesture-handler';

import Routes from './routes';
import AppProvider from './hooks/index';
import theme from './theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ThemeProvider>
        <AppProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </AppProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
