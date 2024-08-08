import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import CustomHeader from '../../components/CustomHeader';
import {responsive} from '../../utils/Responsive';
import Switcher from '../../components/Switcher';

const Setting = () => {
  const [isNotificationEnable, setIsNotificationEnabled] = useState(true);
  const [isChangeTheme, setIsChangeTheme] = useState(false);
  const [isChangeLanguage, setIsChangeLanguage] = useState(false);

  return (
    <View style={styles.main}>
      <CustomHeader title={'Settings'} />
      {/* Notification Center */}
      <Switcher
        iconName={'notifications'}
        name={'Notification'}
        isEnabled={isNotificationEnable}
        isEnabledValued={'Yes'}
        isNotEnabledValue={'No'}
        handleEnable={value => setIsNotificationEnabled(value)}
      />
      {/* Change Theme */}
      <Switcher
        iconName={'dark-mode'}
        name={'Change Theme'}
        isEnabled={isChangeTheme}
        isEnabledValued={'Dark'}
        isNotEnabledValue={'Light'}
        handleEnable={value => setIsChangeTheme(value)}
      />
      {/* Change language */}
      <Switcher
        iconName={'language'}
        name={'Change Lang'}
        isEnabled={isChangeLanguage}
        isEnabledValued={'Hindi'}
        isNotEnabledValue={'En'}
        handleEnable={value => setIsChangeLanguage(value)}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
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
    gap: responsive(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: responsive(20),
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
});
