import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppColor} from '../theme/AppColor';
import {responsive} from '../utils/Responsive';

const Switcher = ({
  iconName,
  name,
  isEnabled,
  isEnabledValued,
  isNotEnabledValue,
  handleEnable,
}) => {
  return (
    <View style={styles.viewHolder}>
      <View style={{width: '10%', alignItems: 'center'}}>
        <MaterialIcons
          name={iconName}
          color={AppColor.C4}
          size={responsive(32)}
        />
      </View>
      <View style={{width: '50%', alignItems: 'center'}}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={{width: '20%', alignItems: 'center'}}>
        <Text style={styles.text}>
          {isEnabled ? isEnabledValued : isNotEnabledValue}
        </Text>
      </View>
      <View style={{width: '15%', alignItems: 'center'}}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => handleEnable(value)}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default Switcher;

const styles = StyleSheet.create({
  viewHolder: {
    borderWidth: 2,
    backgroundColor: AppColor.white,
    marginVertical: responsive(10),
    padding: responsive(10),
    width: '95%',
    borderRadius: responsive(5),
    borderColor: AppColor.white,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    width:'100%',
    fontSize: responsive(20),
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'left',
    paddingHorizontal:responsive(10)
  },
});
