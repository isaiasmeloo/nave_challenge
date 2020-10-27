import React from 'react'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { useAuth } from '../hooks/auth';

export default function Routes() {
  const { user } = useAuth()
  console.log('USUARIO ROUTES ', user)

  return (
    user ? <AppRoutes /> : <AuthRoutes />
  );
}
