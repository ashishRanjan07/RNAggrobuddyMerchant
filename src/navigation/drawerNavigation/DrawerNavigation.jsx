import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from '../bottomNavigation/BottomNavigation';
import SavePost from '../../screens/appScreen/SavePost';
import Demo from '../../screens/appScreen/Demo';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='DashBoard' component={BottomNavigation} options={{headerShown:false}}/>
      <Drawer.Screen name = 'Save Feed' component={SavePost} options={{headerShown:false}}/>
      <Drawer.Screen name='Demo' component={Demo} options={{headerShown:true}}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})