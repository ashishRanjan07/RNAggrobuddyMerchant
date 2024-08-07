import {
  FlatList,
  Linking,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import CustomHeader from '../../components/CustomHeader';
import {responsive} from '../../utils/Responsive';
import LottieView from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Contacts from 'react-native-contacts';

const ShareApp = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    async function requestContactPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Permission',
            message:
              'This app needs access to your contacts ' +
              'so it can display them.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can access contacts');
          Contacts.getAll().then(contacts => {
            setContacts(contacts);
          });
        } else {
          console.log('Contacts permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }

    requestContactPermission();
  }, []);

  const handleInvite = item => {
    // Example message
    const message = "Hello! I'm inviting you to our app.";

    // Construct the WhatsApp URL
    const phoneNumber = item.phoneNumbers[0].number.replace(/\D/g, '');
    console.log(phoneNumber, 'Line 58');
    const url = `whatsapp://send?text=${encodeURIComponent(
      message,
    )}&phone=+91${phoneNumber}`;

    // Attempt to open the URL
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  const renderItem = ({item}) => {
    const initials = item.displayName
      .split(' ')
      .map(word => word.charAt(0))
      .join('');
    return (
      <TouchableOpacity
        key={item?.recordID}
        style={styles.renderHolder}
        onPress={() => handleInvite(item)}>
        <View style={styles.detailsHolder}>
          <View style={styles.thumbNail}>
            <Text>{initials}</Text>
          </View>
          <View>
            <Text style={styles.nameText}>{item?.displayName}</Text>
            <Text style={styles.nameText}>{item?.phoneNumbers[0]?.number}</Text>
          </View>
        </View>
        <Text style={styles.inviteText}>invite</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <CustomHeader title={'Share App'} />
      {/* <View style={styles.animationHolder}>
        <LottieView
          source={require('../../assets/animation/refer.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View> */}
      <View style={styles.animationHolder}>
        <Text style={styles.shareHeaderText}>Share Application</Text>
        <Text style={styles.linkText}>https://www.merchant.aggrobuddy.com</Text>
      </View>
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
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.recordID}
        style={{marginTop: responsive(10)}}
      />
    </View>
  );
};

export default ShareApp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  animationHolder: {
    marginVertical: responsive(10),
    width: '95%',
    padding: responsive(10),
    alignSelf: 'center',
  },
  animation: {
    width: '100%',
    height: responsive(300),
  },
  shareHeaderText: {
    fontSize: responsive(20),
    color: AppColor.C4,
    textAlign: 'center',
    fontFamily: 'NotoSans-Bold',
  },
  linkText: {
    fontSize: responsive(16),
    textAlign: 'center',
    marginVertical: responsive(10),
    color: AppColor.borderColor,
    backgroundColor: AppColor.white,
    padding: responsive(10),
    borderRadius: responsive(10),
  },
  socialMediaHolder: {
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    padding: responsive(10),
    borderRadius: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  renderHolder: {
    borderWidth: 2,
    marginVertical: responsive(5),
    padding: responsive(10),
    width: '95%',
    alignSelf: 'center',
    borderRadius: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    elevation: responsive(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inviteText: {
    width: '30%',
    alignItems: 'center',
    textAlign: 'center',
    padding: responsive(10),
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
    color: AppColor.C4,
  },
  detailsHolder: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(5),
  },
  nameText: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
  },
  thumbNail: {
    borderWidth: 2,
    backgroundColor: AppColor.C4,
    padding: responsive(10),
    marginHorizontal: responsive(10),
    borderRadius: responsive(20),
    borderColor: AppColor.C4,
  },
});
