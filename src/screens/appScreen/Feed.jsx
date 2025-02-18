import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader';
import {AppColor} from '../../theme/AppColor';
import CustomSearch from '../../components/CustomSearch';
import Data from '../../assets/json/feed.json';
import {responsive} from '../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Feed = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const renderItem = ({item}) => {
    return (
      <View key={item.id} style={styles.renderView}>
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          style={{
            height: responsive(200),
            width: '100%',
            borderRadius: responsive(10),
          }}
        />
        <Text style={styles.headingText}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.lowerView}>
          <View style={styles.innerHolder}>
            {/* Read More Button */}
            <TouchableOpacity onPress={()=> navigation.navigate('Post Details',{item:item})} style={styles.readMoreHolder}>
              <Text style={styles.text}>Read </Text>
              <AntDesign
                name="right"
                color={AppColor.white}
                size={responsive(20)}
              />
            </TouchableOpacity>
            {/* Save Post Options */}
            <TouchableOpacity style={styles.saveButton}>
              <MaterialIcons
                name="save-alt"
                color={AppColor.black}
                size={responsive(25)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingHolder}>
            <Text style={styles.ratingText}>Rating : - {item.rating} </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.main}>
     <SafeAreaView/>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <CustomHeader title={'Articles'} />
      <CustomSearch
        searchText={searchText}
        onChangeText={text => setSearchText(text)}
      />
      {/* FlatList */}
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={Item => Item.id}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  renderView: {
    borderWidth: 2,
    width: '95%',
    padding: responsive(10),
    alignSelf: 'center',
    marginVertical: responsive(5),
    borderRadius: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    gap: 10,
  },
  headingText: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
  },
  description: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.C3,
    fontSize: responsive(16),
  },
  lowerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerHolder: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsive(5),
    justifyContent: 'space-evenly',
  },
  readMoreHolder: {
    width: responsive(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColor.C2,
    padding: responsive(5),
    borderWidth: 2,
    borderRadius: responsive(5),
    borderColor: AppColor.C2,
    paddingHorizontal: responsive(15),
    gap: responsive(5),
  },
  text: {
    fontSize: responsive(18),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.white,
  },
  saveButton: {
    borderWidth: 2,
    width: responsive(50),
    alignItems: 'center',
    padding: responsive(5),
    borderRadius: responsive(5),
  },
  ratingHolder: {
    width: '40%',
    alignItems: 'center',
    padding: responsive(5),
  },
  ratingText: {
    fontSize: responsive(18),
    color: AppColor.C3,
    fontFamily: 'NotoSans-Medium',
  },
});
