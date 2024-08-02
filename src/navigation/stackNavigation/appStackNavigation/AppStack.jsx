import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from '../../drawerNavigation/DrawerNavigation';
import Notification from '../../../screens/appScreen/Notification';
import FarmerProductDetails from '../../../screens/appScreen/FarmerProductDetails';
import HireWorkerDetails from '../../../screens/appScreen/HireWorkerDetails';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product Details"
        component={FarmerProductDetails}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Hire Worker Details"
        component={HireWorkerDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
