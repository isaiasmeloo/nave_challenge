import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import 'react-native-gesture-handler';

import Routes from './routes';
import AppProvider from './hooks/index';
import themes from './theme';

const App = () => {
  const deviceTheme = useColorScheme()

  const theme = themes[deviceTheme] || theme.dark

  return (
    <>
      <StatusBar
        barStyle={deviceTheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={deviceTheme === "dark" ? "#212121" : "#FFFFFF"}
      />
      <ThemeProvider theme={theme}>
        <AppProvider>
          <NavigationContainer>
            <Routes theme={theme} />
          </NavigationContainer>
        </AppProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
