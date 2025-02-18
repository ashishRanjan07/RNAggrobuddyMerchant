import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/AppColor';
import CustomHeader from '../../components/CustomHeader';
import Data from '../../assets/json/savePost.json';
import {responsive} from '../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const SavePost = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Post Details', {item: item})}>
        <ImageBackground
          source={{uri: item.image}}
          resizeMode="cover"
          style={styles.imageStyle}>
          <View style={styles.detailsHolder}>
            <View style={styles.dataHolder}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.iconHolder}>
            <AntDesign
              name={'heart'}
              size={responsive(25)}
              color={AppColor.red}
            />
            <Text style={styles.text}>{item.likes}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
    <SafeAreaView/>
      <CustomHeader title={'Save Posts'} />
      <View style={styles.flatListHolder}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default SavePost;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  flatListHolder: {
    flex: 1,
    width: '100%',
    padding: responsive(10),
    alignSelf: 'center',
    marginVertical: responsive(10),
    borderRadius: responsive(10),
  },
  itemContainer: {
    borderWidth: 2,
    width: '45%',
    borderRadius: responsive(5),
    padding: responsive(10),
    alignItems: 'center',
    borderColor: AppColor.white,
    backgroundColor: AppColor.white,
    marginVertical: responsive(5),
    marginHorizontal: responsive(10),
  },
  imageStyle: {
    height: responsive(200),
    width: '100%',
  },
  detailsHolder: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    alignContent: 'center',
    width: '100%',
  },
  dataHolder: {
    width: '100%',
    alignItems: 'center',
    elevation: responsive(10),
  },
  text: {
    color: AppColor.white,
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(15),
    textAlign: 'center',
  },
  iconHolder: {
    position: 'absolute',
    width: responsive(50),
    alignItems: 'center',
    gap: responsive(5),
    right: 0,
    top: 10,
  },
});
