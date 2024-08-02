import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {responsive} from '../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppColor} from '../theme/AppColor';
const CustomSearch = ({searchText, onChangeText}) => {
  return (
    <View style={styles.main}>
      <View style={styles.iconHolder}>
        <AntDesign name="search1" color={AppColor.C4} size={responsive(30)} />
      </View>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={AppColor.black}
        value={searchText}
        onChangeText={onChangeText}
        style={styles.textInputBox}
      />
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    marginVertical: responsive(10),
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    borderRadius: responsive(5),
  },
  iconHolder: {
    width: '20%',
    padding: responsive(10),
    alignItems: 'center',
  },
  textInputBox: {
    width: '80%',
    fontSize: responsive(18),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
  },
});
