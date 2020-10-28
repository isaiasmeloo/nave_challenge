import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { useAuth } from '../hooks/auth';

export default function Routes() {
  const { user, loading } = useAuth()
  console.log('USUARIO ROUTES ', user)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
}
