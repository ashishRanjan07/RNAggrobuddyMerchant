import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/AppColor';
import {ImagePath} from '../../utils/ImagePath';
import {responsive} from '../../utils/Responsive';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import CustomButton from '../../components/CustomButton';
import DeviceInfo from 'react-native-device-info';

const Splash = () => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={AppColor.C1} barStyle={'dark-content'} />
      <Image
        source={ImagePath.logo}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <Title title={'Aggrobuddy'} />
      <SubTitle subTitle={'Welcome Merchant to Aggrobuddy Application'} />
      <View style={styles.buttonHolder}>
        <CustomButton
          title={'Registration'}
          backgroundColor={AppColor.C3}
          textColor={AppColor.black}
        />
        <CustomButton
          title={'Login'}
          backgroundColor={AppColor.green}
          textColor={AppColor.white}
        />
      </View>
      <View style={styles.appVersionHolder}>
        <Text style={styles.appVersionText}>
          App version {DeviceInfo.getVersion()}
        </Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: responsive(300),
    height: responsive(300),
  },
  buttonHolder: {
    width: '90%',
    marginVertical: responsive(10),
    gap: responsive(10),
  },
  appVersionHolder: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  appVersionText: {
    fontSize: responsive(16),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.borderColor,
  },
});
