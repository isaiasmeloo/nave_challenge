import React from 'react'
import { Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/Auth/SignIn';
import Home from '../pages/Home';
import NaverDetail from '../pages/NaverDetail';
import Naver from '../pages/Naver';

import logo from '../assets/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const App = createStackNavigator();

function Navers() {
  return (
    <App.Navigator
      screenOptions={{
        headerTitle: () => <Image source={logo} />,
        cardStyle: { backgroundColor: '#FFFFFF' },
        headerBackTitleVisible: false,
        headerTintColor: '#212121',
      }}
    >
      <App.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Text>menu</Text>
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
        component={SignIn}
      />
    </Drawer.Navigator>
  );
}
