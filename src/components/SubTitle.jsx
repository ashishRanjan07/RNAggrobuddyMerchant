import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../theme/AppColor';
import {responsive} from '../utils/Responsive';

const SubTitle = ({subTitle}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{subTitle}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  main: {
    width: '95%',
    alignItems: 'center',
    alignSelf:'center'
  },
  text: {
    fontSize: responsive(18),
    color: AppColor.C4,
    textAlign: 'center',
    fontFamily: 'NotoSans-Medium',
    lineHeight: responsive(25),
    letterSpacing: responsive(1),
  },
});
