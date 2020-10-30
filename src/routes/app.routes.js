import React from 'react'
import { Image, TouchableOpacity, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home';
import NaverDetail from '../pages/NaverDetail';
import Naver from '../pages/Naver';

import logo from '../assets/logo.png'
import logoWhite from '../assets/logoWhite.png'

import SignOut from '../pages/Auth/SignOut';

const Drawer = createDrawerNavigator();
const App = createStackNavigator();

function Navers() {
  const theme = useColorScheme();
  return (
    <App.Navigator
      screenOptions={{
        headerTitle: () => <Image source={theme === "dark" ? logoWhite : logo} />,
        cardStyle: { backgroundColor: theme === "dark" ? '#212121' : '#FFFFFF' },
        headerBackTitleVisible: false,
        headerTintColor: theme === "dark" ? '#FFFFFF' : '#212121',
        headerStyle: {
          backgroundColor: theme === "dark" ? '#212121' : '#FFFFFF',
        }

      }}
    >
      <App.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 25 }}>
              <Icon name="menu" size={24} color={theme === "dark" ? '#FFFFFF' : '#212121'} />
            </TouchableOpacity>
          ),
        })}
        name="Home"
        component={Home}
      />
      <App.Screen
        name="NaverDetail"
        component={NaverDetail}
      />
      <App.Screen
        name="Naver"
        component={Naver}
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
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 24,
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
        component={SignOut}
      />
    </Drawer.Navigator>
  );
}
