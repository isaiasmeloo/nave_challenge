import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/Auth/SignIn';
import { useColorScheme } from 'react-native';

const Auth = createStackNavigator()

export default function AuthRoutes() {
  const theme = useColorScheme();

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme === "dark" ? "#212121" : "#FFFFFF" }
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
}
