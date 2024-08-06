import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from '../bottomNavigation/BottomNavigation';
import SavePost from '../../screens/appScreen/SavePost';
import CustomDrawer from './CustomDrawer';
import Feather from 'react-native-vector-icons/Feather';
import {responsive} from '../../utils/Responsive';
import {AppColor} from '../../theme/AppColor';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PrivacyPolicy from '../../screens/appScreen/PrivacyPolicy';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="DashBoard"
        component={BottomNavigation}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="dashboard"
              size={responsive(30)}
              color={AppColor.C4}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Save Post"
        component={SavePost}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="save-alt"
              size={responsive(30)}
              color={AppColor.C4}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="About us"
        component={SavePost}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name="users" size={responsive(30)} color={AppColor.C4} />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Share App"
        component={SavePost}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather name="share" size={responsive(30)} color={AppColor.C4} />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="policy"
              size={responsive(30)}
              color={AppColor.C4}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />

      <Drawer.Screen
        name="Change Theme"
        component={SavePost}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="dark-mode"
              size={responsive(30)}
              color={AppColor.C4}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
            <Drawer.Screen
        name="Help"
        component={SavePost}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="help-center"
              size={responsive(30)}
              color={AppColor.C4}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  labelStyle: {
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
  },
});
