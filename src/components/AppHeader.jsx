import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {AppColor} from '../theme/AppColor';
import {responsive} from '../utils/Responsive';
const AppHeader = ({title}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={goBack} style={styles.holder}>
        <Ionicons name="arrow-back" size={responsive(30)} color={AppColor.C4} />
      </TouchableOpacity>
      <View style={[styles.holder, {width: '50%'}]}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.holder}
        onPress={() => navigation.navigate('Notification')}>
        <Ionicons
          name="notifications-outline"
          size={responsive(30)}
          color={AppColor.C4}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.background,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: AppColor.C4,
  },
  text: {
    fontSize: responsive(20),
    textAlign: 'center',
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
  },
  holder: {
    width: '25%',
    padding: responsive(10),
    alignItems: 'center',
  },
});
