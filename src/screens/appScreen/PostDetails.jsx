import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import AppHeader from '../../components/AppHeader';
import {responsive} from '../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PostDetails = ({route}) => {
  const {item} = route.params;
  //   console.log(item, 'Line 5');
  const [like, setLike] = useState(false);

  return (
    <View style={styles.main}>
      <AppHeader title={item.title} />
      <ScrollView style={styles.contentHolder}>
        <View>
          <Image
            source={{uri: item.image}}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        </View>
        {/* Title Holder */}
        <View style={styles.titleHolder}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <TouchableOpacity
            style={styles.likeIconHolder}
            onPress={() => setLike(!like)}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              size={responsive(25)}
              color={like ? AppColor.red : AppColor.black}
            />
            <Text style={styles.likeText}>
              {like ? item.likes + 1 : item.likes}
            </Text>
          </TouchableOpacity>
        </View>
        {/* Description Holder */}
        <View style={styles.detailsHolder}>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.storyText}>{item.story}</Text>
        </View>
        <View style={styles.detailsHolder}>
          <Text style={styles.authorText}>Author : - {item.author} </Text>
        </View>
      </ScrollView>
      <View style={styles.socialMediaHolder}>
        <MaterialCommunityIcons
          name="whatsapp"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="android-messages"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="linkedin"
          size={responsive(40)}
          color={AppColor.C4}
        />
      </View>
      <View style={styles.socialMediaHolder2}>
        <MaterialCommunityIcons
          name="facebook"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="pinterest"
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

export default PostDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  imageStyle: {
    width: '100%',
    height: responsive(250),
    borderBottomLeftRadius: responsive(10),
    borderBottomRightRadius: responsive(10),
  },
  contentHolder: {
    flex: 1,
  },
  titleHolder: {
    gap: responsive(10),
    padding: responsive(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleView: {
    width: '75%',
    padding: 10,
  },
  title: {
    fontSize: responsive(20),
    color: AppColor.C3,
    fontFamily: 'NotoSans-Medium',
  },
  likeIconHolder: {
    width: '20%',
    alignItems: 'center',
    gap: responsive(5),
  },
  likeText: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
  detailsHolder: {
    width: '95%',
    alignSelf: 'center',
    padding: responsive(10),
    gap: responsive(15),
  },
  description: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.C3,
    fontSize: responsive(16),
  },
  storyText: {
    fontSize: responsive(16),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    lineHeight: responsive(28),
    letterSpacing: responsive(1),
  },
  authorText: {
    fontSize: responsive(18),
    textAlign: 'center',
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
  },
  socialMediaHolder: {
    borderWidth: 2,
    borderColor: AppColor.white,
    position: 'absolute',
    padding: responsive(10),
    borderRadius: responsive(5),
    gap: responsive(10),
    alignItems: 'center',
    top: '50%',
    backgroundColor: AppColor.white,
    elevation: responsive(10),
  },
  socialMediaHolder2: {
    borderWidth: 2,
    borderColor: AppColor.white,
    position: 'absolute',
    padding: responsive(10),
    borderRadius: responsive(5),
    gap: responsive(10),
    alignItems: 'center',
    top: '50%',
    right: 0,
    backgroundColor: AppColor.white,
    elevation: responsive(10),
  },
});
