import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import {responsive} from '../../utils/Responsive';
import TextInputBox from '../../components/TextInputBox';
import CustomButton from '../../components/CustomButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

const Registration = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);
  const toggleGenderModal = () => {
    setShowGenderModal(!showGenderModal);
  };
  return (
    <ScrollView style={styles.main}>
      <SafeAreaView/>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <Title title={'Registration'} />
      <SubTitle subTitle={'Fill the below form to complete registration'} />
      <View style={styles.formHolder}>
        <TextInputBox
          label={'Name'}
          keyboardType={'default'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInputBox
          label={'Mobile Number'}
          keyboardType={'number-pad'}
          value={mobileNumber}
          onChangeText={text => setMobileNumber(text)}
        />
        <TextInputBox
          label={'Email Id'}
          keyboardType={'email'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInputBox
          label={'Address'}
          keyboardType={'default'}
          value={address}
          onChangeText={text => setAddress(text)}
        />
        {/* Gender */}
        <TouchableOpacity
          style={styles.inputHolder}
          onPress={() => setShowGenderModal(true)}>
          <Text style={styles.labelText}>Select Gender</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              placeholder={'Select Gender'}
              value={gender}
              placeholderTextColor={AppColor.black}
              style={[styles.textInputBox, {width: '85%'}]}
              editable={false}
              onChangeText={text => setGender(text)}
            />
            <AntDesign
              name="caretdown"
              size={responsive(25)}
              color={AppColor.primary}
            />
          </View>
        </TouchableOpacity>

        <CustomButton
          title={'Register'}
          backgroundColor={AppColor.green}
          textColor={AppColor.white}
        />
      </View>
      <View style={styles.termAndConditionView}>
        <Text style={styles.text}>
          While Registering you are accepting our terms and conditions
        </Text>
      </View>
      {/* Modal for the Gender */}
      <Modal isVisible={showGenderModal}>
        <View style={styles.modelContainer}>
          <Text style={styles.modelText}>Select Gender</Text>
          <TouchableOpacity
            style={styles.buttonHolder}
            onPress={() => {
              setGender('Male');
              toggleGenderModal();
            }}>
            <FontAwesome
              name="male"
              size={responsive(25)}
              color={AppColor.black}
            />
            <Text style={styles.buttonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonHolder}
            onPress={() => {
              setGender('Female');
              toggleGenderModal();
            }}>
            <FontAwesome
              name="female"
              size={responsive(25)}
              color={AppColor.black}
            />
            <Text style={styles.buttonText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonHolder}
            onPress={() => {
              setGender('Other');
              toggleGenderModal();
            }}>
            <Text style={styles.buttonText}>Other</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  formHolder: {
    marginTop: responsive(10),
    width: '95%',
    alignSelf: 'center',
    gap: responsive(5),
  },
  textInputBox: {
    margin: responsive(10),
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'NotoSans-Medium',
    marginTop: 0,
    backgroundColor: AppColor.white,
    padding: responsive(10),
    borderRadius: responsive(5),
  },
  modelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    padding: responsive(20),
    backgroundColor: AppColor.white,
    borderRadius: responsive(10),
    gap: responsive(20),
  },
  modelText: {
    color: AppColor.black,
    fontSize: responsive(22),
    fontFamily: 'NotoSans-Medium',
  },
  buttonText: {
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'NotoSans-Medium',
  },
  buttonHolder: {
    borderWidth: 2,
    width: '80%',
    alignItems: 'center',
    padding: responsive(10),
    alignSelf: 'center',
    borderRadius: responsive(10),
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  labelText: {
    fontSize: responsive(18),
    color: AppColor.black,
    width: '95%',
    alignSelf: 'center',
  },
  inputHolder: {
    gap: 5,
  },
  termAndConditionView: {
    width: '90%',
    alignSelf: 'center',
    padding: responsive(10),
    marginTop: responsive(20),
  },
  text: {
    fontSize: responsive(16),
    color: AppColor.borderColor,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
});
