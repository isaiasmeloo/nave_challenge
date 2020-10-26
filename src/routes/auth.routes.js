import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/Auth/SignIn';

const Auth = createStackNavigator()

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' }
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
}
