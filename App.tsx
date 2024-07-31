import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthStack from './src/navigation/stackNavigation/authStackNavigation/AuthStack';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
      <Toast />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
