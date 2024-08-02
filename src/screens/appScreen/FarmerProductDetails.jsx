import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import AppHeader from '../../components/AppHeader';
import Swiper from 'react-native-swiper';
import {responsive} from '../../utils/Responsive';
import CustomButton from '../../components/CustomButton';
import TextInputBox from '../../components/TextInputBox';

const FarmerProductDetails = ({route}) => {
  const {item} = route.params;
  const [showFarmerDetails, setShowFarmerDetails] = useState(false);
  const [showOfferSection, setShowOfferSection] = useState(false);
  const [offerPrice, setOfferPrice] = useState('');
  const offerOne = item.product_rate - 100;
  const offerSecond = item.product_rate - 150;
  const offerThird = item.product_rate - 175;
  const makeOffer = () => {
    console.log('Make Offer clicked');
    setShowOfferSection(true);
    setShowFarmerDetails(false);
  };

  const handleSubmitOffer = () => {
    setOfferPrice('');
    Alert.alert('Success', 'Offer Submitted Successfully');
    setShowOfferSection(false);
  };

  return (
    <View style={styles.main}>
      <AppHeader title={'Product Details'} />
      {/* Content Data */}
      <ScrollView>
        <View style={styles.swiperHolder}>
          <Swiper
            autoplay={true}
            autoplayTimeout={2}
            style={styles.swiper}
            showsPagination={false}>
            {item.product_images.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                resizeMode="stretch"
                style={styles.imageStyle}
              />
            ))}
          </Swiper>
          <View style={styles.detailsHolder}>
            <Text style={styles.productName}>{item.product_name}</Text>
            <Text style={styles.productName}>Owner Name : {item.name}</Text>
            <View style={{flexDirection: 'row', gap: responsive(15)}}>
              <Text style={styles.productName}>
                Price : Rs. {item.product_rate}
              </Text>
              <Text style={styles.productName}>Quantity : {item.id}</Text>
            </View>
            <Text style={styles.descriptionText}>
              {item.product_description}
            </Text>

            <CustomButton
              title={'Farmer Details'}
              backgroundColor={AppColor.green}
              textColor={AppColor.white}
              handleAction={() => setShowFarmerDetails(!showFarmerDetails)}
            />
            {showFarmerDetails && (
              <View style={styles.farmerDetailsHolder}>
                <Text style={styles.mobileNumber}>
                  Farmer Name : {item.name}
                </Text>
                <Text style={styles.mobileNumber}>Mobile : {item.mobile}</Text>
                <Text style={styles.mobileNumber}>Email : {item.email}</Text>
              </View>
            )}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View style={{width: '40%'}}>
                <CustomButton
                  title={'Chat'}
                  backgroundColor={AppColor.green}
                  textColor={AppColor.white}
                  handleAction={() => console.log('hii')}
                />
              </View>
              <View style={{width: '40%'}}>
                <CustomButton
                  title={'Make Offer'}
                  backgroundColor={AppColor.green}
                  textColor={AppColor.white}
                  handleAction={makeOffer}
                />
              </View>
            </View>
            {showOfferSection && (
              <View style={styles.farmerDetailsHolder}>
                <Text style={[styles.mobileNumber, {textAlign: 'center'}]}>
                  Make an offer to {item.name}
                </Text>
                <Text style={[styles.mobileNumber, {textAlign: 'center'}]}>
                  Actual Price {item.product_rate}
                </Text>
                <TextInputBox
                  label={'Your Offer Price'}
                  value={offerPrice}
                  onChangeText={text => setOfferPrice(text)}
                  keyboardType={'number-pad'}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    style={styles.offerHolder}
                    onPress={() => setOfferPrice(offerOne.toString())}>
                    <Text style={styles.mobileNumber}>{offerOne}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.offerHolder}
                    onPress={() => setOfferPrice(offerSecond.toString())}>
                    <Text style={styles.mobileNumber}>{offerSecond}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.offerHolder}
                    onPress={() => setOfferPrice(offerThird.toString())}>
                    <Text style={styles.mobileNumber}>{offerThird}</Text>
                  </TouchableOpacity>
                </View>
                {
                  offerPrice.length() >=0 &&(
                <CustomButton
                  title={'Offer'}
                  backgroundColor={AppColor.C4}
                  textColor={AppColor.white}
                  handleAction={handleSubmitOffer}
                />
              )
            }
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FarmerProductDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  swiperHolder: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: responsive(5),
    backgroundColor: AppColor.background,
  },
  swiper: {
    height: responsive(250),
  },
  imageStyle: {
    width: '100%',
    alignSelf: 'center',
    height: responsive(250),
    borderRadius: responsive(5),
  },
  detailsHolder: {
    borderColor: AppColor.black,
    marginVertical: responsive(10),
    gap: 10,
    padding: responsive(10),
    width: '100%',
  },
  productName: {
    fontSize: responsive(20),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
  },
  descriptionText: {
    fontSize: responsive(16),
    color: AppColor.C3,
  },
  farmerDetailsHolder: {
    width: '95%',
    backgroundColor: AppColor.white,
    alignSelf: 'center',
    padding: responsive(10),
    borderRadius: responsive(5),
    gap: 10,
  },
  mobileNumber: {
    fontSize: responsive(16),
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
  },
  offerHolder: {
    borderWidth: 1,
    padding: responsive(5),
    borderRadius: responsive(10),
    backgroundColor: AppColor.background,
  },
});
