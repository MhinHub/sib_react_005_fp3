import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ButtomNavigator} from '../components';
import {
  AppIntro,
  Splashscreen,
  SignIn,
  SignUp,
  Beranda,
  Favorit,
  Pesanan,
  Profil,
  About,
  Team,
  Help,
  DetailHotel,
  Search,
  ProfileEdit,
  DetailBooking,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favorit"
        component={Favorit}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splashscreen">
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppIntro"
        component={AppIntro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Team"
        component={Team}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailHotel"
        component={DetailHotel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailBooking"
        component={DetailBooking}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
