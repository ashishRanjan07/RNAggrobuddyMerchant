import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from '../../drawerNavigation/DrawerNavigation';
import Notification from '../../../screens/appScreen/Notification';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} options={{headerShown:false}}/>
    <Stack.Screen name='Notification' component={Notification} options={{headerShown:true}}/>
   </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})