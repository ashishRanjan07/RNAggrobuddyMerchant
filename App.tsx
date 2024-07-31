import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthStack from './src/navigation/stackNavigation/authStackNavigation/AuthStack';
import Toast from 'react-native-toast-message';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
    <AuthStack />
    <Toast />
  </View>
  );
};

export default App;

const styles = StyleSheet.create({});
