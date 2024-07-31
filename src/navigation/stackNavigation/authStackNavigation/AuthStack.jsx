import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../../../screens/authScreens/Splash';
import Login from '../../../screens/authScreens/Login';
import Registration from '../../../screens/authScreens/Registration';
import ForgetPassword from '../../../screens/authScreens/ForgetPassword';
import AppStack from '../appStackNavigation/AppStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forget Password"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
