import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function loadStoragedData() {
      setLoading(true)
      const [userStorage, token] = await AsyncStorage.multiGet(
        [
          '@Navers:user',
          '@Navers:token',
        ],
      );

      if (userStorage[1]) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token[1])}`;
        setUser(JSON.parse(userStorage[1]));
      }
      setLoading(false)
    }

    loadStoragedData()
  }, [])

  const signIn = useCallback(async (email, password) => {
    try {
      const response = await api.post('/users/login', {
        email,
        password
      })

      if (response.status === 200) {
        const { email, id, token } = response.data

        await AsyncStorage.multiSet([
          ['@Navers:user', JSON.stringify({ email, id })],
          ['@Navers:token', JSON.stringify(token)],
        ]);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser({ email, id })
      }
    } catch (error) {
      console.log('error requiest ', error.response.data)
    }
  }, []);



  return (
    <AuthContext.Provider
      value={{ user, signIn, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth }
