import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Auth = createStackNavigator()

export default function Routes() {
  return (
    <AppRoutes />
  );
}
