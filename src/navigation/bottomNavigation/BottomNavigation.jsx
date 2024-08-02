import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/appScreen/Home';
import Profile from '../../screens/appScreen/Profile';
import Hire from '../../screens/appScreen/Hire';
import Feed from '../../screens/appScreen/Feed';
import {responsive} from '../../utils/Responsive';
import {AppColor} from '../../theme/AppColor';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Farmer from '../../screens/appScreen/Farmer';
const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      activeColor={AppColor.C4}
      inactiveColor={AppColor.black}
      activeIndicatorStyle={styles.main}
      onTabLongPress={() => Alert.alert('Show ')}
      barStyle={styles.barStyle}
      keyboardHidesNavigationBar={true}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="home"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Farmer"
        component={Farmer}
        options={{
          tabBarLabel: 'Farmer',
          tabBarIcon: ({color}) => (
            <FontAwesome5
              name="tractor"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hire"
        component={Hire}
        options={{
          tabBarLabel: 'Worker',
          tabBarIcon: ({color}) => (
            <FontAwesome5
              name="hands-helping"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color}) => (
            <FontAwesome
              name="feed"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="user"
              size={responsive(24)}
              color={AppColor.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.white,
    width: responsive(40),
    height: responsive(40),
    borderRadius: responsive(10),
  },
  barStyle: {
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: AppColor.background,
    borderTopWidth: 2,
    borderColor: AppColor.C4,
  },
});
