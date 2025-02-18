import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerItemList} from '@react-navigation/drawer';
import {AppColor} from '../../theme/AppColor';
import {responsive} from '../../utils/Responsive';
import {ImagePath} from '../../utils/ImagePath';
import DeviceInfo from 'react-native-device-info';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomDrawer = props => {
  return (
    <View style={styles.drawerContent}>
    <SafeAreaView/>
      {/* Upper Head */}
      <View style={styles.upperSection}>
        <Image
          source={ImagePath.logo}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <Text
          style={styles.text}>{`Welcome \n to \n Aggrobuddy Worker App`}</Text>
      </View>
      <View style={styles.versionSection}>
        <Text style={styles.versionText}>
          App Version : {DeviceInfo.getVersion()}
        </Text>
        <TouchableOpacity>
          <MaterialIcons
            name="browser-updated"
            color={AppColor.C4}
            size={responsive(30)}
          />
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
      <View style={styles.socialMediaHolder}>
        <MaterialCommunityIcons
          name="whatsapp"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="linkedin"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="facebook"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="instagram"
          size={responsive(40)}
          color={AppColor.C4}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  upperSection: {
    padding: responsive(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: responsive(150),
    width: responsive(100),
  },
  text: {
    width: '60%',
    lineHeight: responsive(30),
    letterSpacing: responsive(1),
    fontSize: responsive(18),
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
  versionText: {
    fontSize: responsive(16),
    textAlign: 'center',
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
    borderColor: AppColor.C4,
  },
  versionSection: {
    flexDirection: 'row',
    borderWidth: 2,
    marginBottom: responsive(10),
    padding: responsive(10),
    alignItems: 'center',
    borderColor: AppColor.C4,
    justifyContent: 'space-evenly',
  },
  bottomHolder: {
    borderWidth: 2,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: responsive(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialMediaHolder: {
    borderWidth: 2,
    borderColor: AppColor.white,
    position: 'absolute',
    padding: responsive(10),
    borderRadius: responsive(5),
    gap: responsive(10),
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
