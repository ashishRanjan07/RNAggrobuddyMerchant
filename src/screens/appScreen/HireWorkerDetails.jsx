import {
    Alert,
  Linking,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import AppHeader from '../../components/AppHeader';
import {responsive} from '../../utils/Responsive';
import Capsule from '../../components/Capsule';
import CustomButton from '../../components/CustomButton';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import {CheckBox, Icon} from '@rneui/themed';
import Toast from 'react-native-toast-message';
import { showToast } from '../../utils/ToastHelper';
import { useNavigation } from '@react-navigation/native';

const HireWorkerDetails = ({route}) => {
    const navigation = useNavigation();
  const {item} = route.params;
  const [showHireModel, setShowHireModel] = useState(false);
  const [insurancePolicy, setInsurancePolicy] = useState(false);
  const [agreementPolicy, setAgreementPolicy] = useState(false);
  const [paymentPolicy, setPaymentPolicy] = useState(false);
  const [backgroundPolicy, setBackgroundPolicy] = useState(false);

  const handleContactWorker = () => {
    Linking.openURL(`tel:${item.mobile_no}`);
  };
  const handleHire = () => {
    console.log('HandleCHire Clicked');
    setShowHireModel(!showHireModel);
  };

  const handleOffer = () => {
    // console.log('JOb Offer');
    if (
      insurancePolicy === true &&
      agreementPolicy === true &&
      paymentPolicy === true &&
      backgroundPolicy === true
    ) {
      setShowHireModel(false);
      setInsurancePolicy(false);
      setAgreementPolicy(false);
      setPaymentPolicy(false);
      setBackgroundPolicy(false);
      showToast(
        'success',
        'success',
        'worked offered Successfully.'
      );
      navigation.goBack();
    }
    else{
        Alert.alert("Error","Select all the terms and condition for offering the job.")
    }
  };
  return (
    <View style={styles.main}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <AppHeader title={`${item.name} Details`} />
      <View style={styles.innerView}>
        <Text style={styles.headerText}>{item.name} Details</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerView2}>
            <Capsule name={'Name'} value={item.name} />
            <Capsule name={'Mobile Number'} value={item.mobile_no} />
            <Capsule name={'Email'} value={item.email} />
            <Capsule name={'Gender'} value={item.gender} />
            <Capsule name={'Age'} value={item.age} />
            <Capsule name={'Education'} value={item.education} />
            <Capsule name={'Minimum Rate'} value={item.minimum_rate} />
            <Capsule name={'Maximum Rate'} value={item.maximum_rate} />
            <Capsule name={'Work Type'} value={item.work_type} />
            <Capsule name={'Landmark'} value={item.landmark} />
            <Capsule name={'Address'} value={item.address} />
            <Capsule name={'City'} value={item.city} />
            <Capsule name={'State'} value={item.state} />
            <Capsule name={'Pin Code'} value={item.pincode} />
          </View>
          <CustomButton
            title={'Contact'}
            backgroundColor={AppColor.white}
            textColor={AppColor.black}
            handleAction={handleContactWorker}
          />
          <CustomButton
            title={'Hire'}
            backgroundColor={AppColor.white}
            textColor={AppColor.black}
            handleAction={handleHire}
          />
        </ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={showHireModel}
          onRequestClose={() => setShowHireModel(!showHireModel)}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Title title={`Are you hiring ${item.name}`} />
              <SubTitle
                subTitle={`Please provide the below details and submit them to hire`}
              />
              <View>
                <CheckBox
                  title="Insurance Policy"
                  checked={insurancePolicy}
                  onPress={() => {
                    setInsurancePolicy(!insurancePolicy);
                  }}
                />
                <CheckBox
                  title="Legal Agreement Policy"
                  checked={agreementPolicy}
                  onPress={() => {
                    setAgreementPolicy(!agreementPolicy);
                  }}
                />
                <CheckBox
                  title="Payment on Daily Basis"
                  checked={paymentPolicy}
                  onPress={() => {
                    setPaymentPolicy(!paymentPolicy);
                  }}
                />
                <CheckBox
                  title="Background Check"
                  checked={backgroundPolicy}
                  onPress={() => {
                    setBackgroundPolicy(!backgroundPolicy);
                  }}
                />
                <CustomButton
                  title={'Offer Job'}
                  backgroundColor={AppColor.background}
                  textColor={AppColor.black}
                  handleAction={handleOffer}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default HireWorkerDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  innerView: {
    flex: 1,
    marginVertical: responsive(10),
    alignItems: 'center',
    padding: responsive(10),
  },
  headerText: {
    textAlign: 'center',
    color: AppColor.C4,
    fontSize: responsive(25),
    fontFamily: 'NotoSans-Medium',
    borderBottomWidth: 2,
  },
  box: {
    borderWidth: 2,
    marginTop: responsive(10),
    padding: responsive(10),
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    borderRadius: responsive(20),
  },
  primaryText: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    textAlign: 'center',
    borderBottomWidth: 1,
    padding: responsive(5),
    fontSize: responsive(16),
  },
  secondaryText: {
    fontSize: responsive(16),
    color: AppColor.C4,
    padding: responsive(5),
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
  innerView2: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: responsive(10),
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: AppColor.white,
    padding: responsive(20),
    borderTopLeftRadius: responsive(20),
    borderTopRightRadius: responsive(20),
    gap: responsive(10),
  },
});
