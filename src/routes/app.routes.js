import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/Auth/SignIn';
import Home from '../pages/Home';
import { Image } from 'react-native';

import logo from '../assets/logo.png'

const Drawer = createDrawerNavigator();
const App = createStackNavigator();

function Navers() {
  return (
    <App.Navigator
      screenOptions={{
        headerTitle: () => <Image source={logo} />,
      }}
    >
      <App.Screen
        name="Home"
        component={Home}
      />
    </App.Navigator>
  )
}

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#212121',
        labelStyle: {
          fontSize: 24,
          fontWeight: '600',
          textAlign: 'center'
        },
        activeBackgroundColor: "#FFFFFF",
        inactiveBackgroundColor: "#FFFFFF",
        contentContainerStyle: {
          flex: 1,
          justifyContent: 'center',
        }
      }}

    >
      <Drawer.Screen
        name="Home"
        component={Navers}
        options={{ drawerLabel: 'Navers' }}
      />
      <Drawer.Screen
        name="Sair"
        component={SignIn}
      />
    </Drawer.Navigator>
  );
}
