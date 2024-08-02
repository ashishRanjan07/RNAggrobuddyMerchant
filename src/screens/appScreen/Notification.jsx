import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/AppColor';
import AppHeader from '../../components/AppHeader';

const Notification = () => {
  return (
    <View style={styles.main}>
      <AppHeader title={'Notification'} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
});
