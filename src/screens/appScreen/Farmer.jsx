import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import CustomHeader from '../../components/CustomHeader';
import CustomSearch from '../../components/CustomSearch';
import Data from '../../assets/json/farmer.json';
import {responsive} from '../../utils/Responsive';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const Farmer = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

const handleFarmerProductDetails = (item) => {
    navigation.navigate('Product Details',{item:item});
}

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=>handleFarmerProductDetails(item)} style={styles.renderItem}>
        <View style={styles.innerView}>
          <View style={{width: '40%'}}>
            <Swiper
              autoplay={true}
              autoplayTimeout={2}
              style={styles.swiper}
              showsPagination={false}>
              {item.product_images.map((image, index) => (
                <Image
                  key={index}
                  source={{uri: image}}
                  resizeMode="cover"
                  style={styles.imageStyle}
                />
              ))}
            </Swiper>
          </View>
          <View style={{width: '60%',gap:5}}>
            <Text style={styles.productName}>{item.product_name}</Text>
            <Text style={styles.sellerName}>Seller Name : {item.name}</Text>
            <Text style={styles.description}>{(item.product_description).slice(0, 75) + "..."}</Text>
            <Text style={styles.rate}>Rate : {item.product_rate}</Text>
            <Text style={styles.address}>Address : {item.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
    <SafeAreaView/>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <CustomHeader title={'Farmer'} />
      <CustomSearch
        searchText={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Farmer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  renderItem: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: AppColor.white,
    borderWidth: 2,
    marginVertical: responsive(5),
    borderColor: AppColor.white,
    borderRadius: responsive(5),
    padding: responsive(10),
  },
  innerView: {
    flexDirection: 'row',
    gap: responsive(10),
  },
  swiper: {
    height: responsive(200),
  },
  imageStyle: {
    width: responsive(150),
    height: responsive(200),
    borderRadius: responsive(20),
  },
  productName: {
    color: AppColor.C4,
    fontSize: responsive(18),
    fontFamily: 'NotoSans-Medium',
  },
  sellerName: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'NatoSans-Medium',
  },
  description:{
    fontSize:responsive(14),
    color:AppColor.borderColor,
    fontFamily:'NotoSans-Regular'
  },
  rate:{
    fontSize:responsive(14),
    color:AppColor.black,
    fontFamily:'NatoSans-Medium'
  },
  address:{
    fontSize:responsive(15),
    color:AppColor.black,
    fontFamily:'NatoSans-Medium'
  }
});
