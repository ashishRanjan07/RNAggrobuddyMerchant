import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader';
import {AppColor} from '../../theme/AppColor';
import CustomSearch from '../../components/CustomSearch';
import Data from '../../assets/json/worker.json';
import {responsive} from '../../utils/Responsive';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Hire = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleContactNow = (item) => {
    navigation.navigate('Hire Worker Details',{item:item});
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItemHolder}>
        <View style={styles.innerView}>
          <View style={{width: '40%'}}>
            <Image
              source={{uri: item.profile_image}}
              resizeMode="cover"
              style={{width: responsive(150), height: responsive(150)}}
            />
          </View>
          <View style={{width: '60%', paddingLeft: responsive(5)}}>
            <Text style={styles.nameText}>Name : {item.name}</Text>
            <Text style={styles.nameText}>Mobile : {item.mobile_no}</Text>
            <Text style={styles.nameText}>Age : {item.age}</Text>
            <Text style={styles.nameText}>Gender : {item.gender}</Text>
            <Text style={styles.nameText}>
              Address : {item.address} {item.landmark} {item.city} {item.state}{' '}
              {item.pincode}
            </Text>
          </View>
        </View>

        <CustomButton
          title={'Contact Now'}
          backgroundColor={AppColor.background}
          textColor={AppColor.black}
          handleAction={()=>handleContactNow(item)}
        />
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <CustomHeader title={'Worker'} />
      <CustomSearch
        searchText={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Hire;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  renderItemHolder: {
    borderWidth: 2,
    backgroundColor: AppColor.white,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    borderColor: AppColor.white,
    padding: responsive(10),
    borderRadius: responsive(5),
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontSize: responsive(18),
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
  },
});
