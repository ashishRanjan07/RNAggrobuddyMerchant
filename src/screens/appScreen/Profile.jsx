import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {AppColor} from '../../theme/AppColor';
import {ImagePath} from '../../utils/ImagePath';
import {responsive} from '../../utils/Responsive';
import CustomHeader from '../../components/CustomHeader';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListItem from '../../components/ListItem';
const Profile = () => {
  return (
    <>
    <SafeAreaView/>
      <CustomHeader title={'User Profile'} />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSectionHolder}>
          <Image
            source={ImagePath.logo}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <Text style={styles.text}>Ashish Ranjan</Text>
          <Text style={[styles.text, {fontSize: responsive(18)}]}>
            +91 6206416452
          </Text>
        </View>
        <View style={styles.lowerHolder}>
          <Text style={styles.overViewText}>Account Overview</Text>
          <View style={styles.separateLine} />
          {/* Profile List Section */}
          <ListItem
            title={'My Profile'}
            Icon={Feather}
            Name={'user'}
            handleAction={() => console.log('Clicked on User Profile')}
          />
          <ListItem
            title={'Order History'}
            Icon={Feather}
            Name={'box'}
            handleAction={() => console.log('Clicked on Order History')}
          />
          <ListItem
            title={'Worker History'}
            Icon={MaterialIcons}
            Name={'history'}
            handleAction={() => console.log('Clicked on Worker History')}
          />
          <ListItem
            title={'My Post'}
            Icon={MaterialIcons}
            Name={'rss-feed'}
            handleAction={() => console.log('Clicked on My Post')}
          />
          <ListItem
            title={'Change Language'}
            Icon={MaterialIcons}
            Name={'language'}
            handleAction={() => console.log('Clicked on Change language')}
          />
          <ListItem
            title={'Change Password'}
            Icon={MaterialIcons}
            Name={'password'}
            handleAction={() => console.log('Clicked on Change Password')}
          />
          <ListItem
            title={'Log-out'}
            Icon={Feather}
            Name={'log-out'}
            handleAction={() => console.log('Logout Button Clicked')}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  profileSectionHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: responsive(25),
    backgroundColor: AppColor.C3,
  },
  imageStyle: {
    height: responsive(170),
    width: responsive(150),
  },
  text: {
    fontSize: responsive(20),
    color: AppColor.white,
    fontFamily: 'NotoSans-Medium',
  },
  lowerHolder: {
    borderWidth: 2,
    borderColor: AppColor.white,
    borderTopLeftRadius: responsive(15),
    borderTopRightRadius: responsive(15),
    padding: responsive(10),
    backgroundColor: AppColor.white,
    marginTop: -15,
  },
  overViewText: {
    fontFamily: 'NotoSans-Bold',
    fontSize: responsive(25),
    color: AppColor.C4,
    textAlign: 'center',
  },
  separateLine: {
    borderWidth: 1,
    marginTop: responsive(5),
    backgroundColor: AppColor.black,
  },
  itemHolder: {
    borderWidth: 2,
    marginTop: responsive(10),
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: AppColor.C4,
  },
  listText: {
    color: AppColor.C4,
    fontSize: responsive(20),
    fontFamily: 'NotoSans-Medium',
  },
  commonView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(30),
  },
});
