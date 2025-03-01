import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {AppColor} from '../../theme/AppColor';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader';

const Home = () => {
  return (
    <View style={styles.main}>
      <SafeAreaView/>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <CustomHeader title={'Home'} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
});
