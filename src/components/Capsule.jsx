import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsive} from '../utils/Responsive';
import {AppColor} from '../theme/AppColor';

const Capsule = ({name, value}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.primaryText}>{name}</Text>
      <Text style={styles.secondaryText}>{value}</Text>
    </View>
  );
};

export default Capsule;

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    marginTop: responsive(10),
    padding: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    borderRadius: responsive(20),
  },
  primaryText: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    textAlign: 'center',
    borderBottomWidth: 1,
    padding: responsive(5),
    fontSize: responsive(16),
  },
  secondaryText: {
    fontSize: responsive(16),
    color: AppColor.C4,
    padding: responsive(5),
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
});
