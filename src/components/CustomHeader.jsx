import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColor} from '../theme/AppColor';
import {responsive} from '../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const CustomHeader = ({title}) => {
  const navigation = useNavigation();
  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={handleOpenDrawer} style={styles.holder}>
        <AntDesign
          name="menu-unfold"
          size={responsive(40)}
          color={AppColor.C4}
        />
      </TouchableOpacity>
      <View style={[styles.holder, {width: '50%'}]}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.holder} onPress={()=> navigation.navigate('Notification')}>
        <Ionicons
          name="notifications-outline"
          size={responsive(40)}
          color={AppColor.C4}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.background,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderBottomWidth:2,
    borderColor:AppColor.C4
  },
  text: {
    fontSize: responsive(25),
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
