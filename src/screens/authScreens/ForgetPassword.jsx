import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {responsive} from '../../utils/Responsive';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import TextInputBox from '../../components/TextInputBox';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import {showToast} from '../../utils/ToastHelper';
const ForgetPassword = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [step, setStep] = useState(1);

  const handleResetPassword = () => {
    console.log('Clicked on the reset Password Button');
    if (mobileNumber.trim() === '') {
      showToast(
        'error',
        'Mobile Number Error',
        'Please enter valid mobile number',
      );
      return;
    }
    if (/[^0-9]/g.test(mobileNumber)) {
      showToast(
        'error',
        'Invalid Mobile Number',
        'Please enter a valid 10-digit mobile number.',
      );
      return;
    }
    setStep(2);
  };
  const handleContinue = () => {
    console.log('Clicked on the continue button');
    if (otp.trim() === '') {
      showToast(
        'error',
        'Otp required',
        'Enter 6 digit Otp that sent on your mobile number',
      );
      return;
    }
    if (otp.length < 6) {
      showToast(
        'error',
        'Otp Error',
        'Enter 6 digit Otp that sent on your mobile number',
      );
      return;
    }
    setStep(3);
  };
  const handleOtpResend = () => {
    showToast(
      'success',
      'OTP resend',
      'OTP resend Successfully please check it ',
    );
  };
  const handleFinalStep = () => {
    console.log('handleFinalStep');
    if (newPassword.trim() === '') {
      showToast(
        'info',
        'New password error',
        'New Password required in order to change password',
      );
      return;
    }
    if (confirmNewPassword.trim() === '') {
      showToast(
        'info',
        'Confirm password error',
        'Confirm Password required in order to change password.',
      );
      return;
    }
    if (newPassword.length < 6) {
      showToast(
        'info',
        'New password error',
        'New Password length minimum of 6 digit.',
      );
      return;
    }
    if (confirmNewPassword.length < 6) {
      showToast(
        'info',
        'Confirm password error',
        'Confirm Password length minimum of 6 digit.',
      );
      return;
    }
    if (!(newPassword === confirmNewPassword)) {
      showToast(
        'error',
        'New and Confirm password error',
        'New and Confirm Password need to to same.',
      );
      return;
    }
    setStep(1);
    navigation.navigate('Login');
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.main}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={AppColor.background}
        />

        {step === 1 && (
          <>
            <FontAwesome5
              name="fingerprint"
              size={responsive(50)}
              color={AppColor.C3}
            />
            <Title title={'Forget Password'} />
            <SubTitle
              subTitle={"No worries we'll send you reset instruction"}
            />
            <View style={styles.formHolder}>
              <TextInputBox
                label={'Mobile Number'}
                value={mobileNumber}
                onChangeText={text => setMobileNumber(text)}
                keyboardType={'number-pad'}
                maxLength={10}
              />
              <CustomButton
                title={'Reset Password'}
                backgroundColor={AppColor.C5}
                textColor={AppColor.white}
                handleAction={handleResetPassword}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.forgetPasswordHolder}>
              <MaterialIcons
                name="keyboard-backspace"
                color={AppColor.C5}
                size={responsive(30)}
              />
              <Text style={styles.text}>Back to login</Text>
            </TouchableOpacity>
          </>
        )}
        {step === 2 && (
          <>
            <MaterialCommunityIcons
              name="android-messages"
              size={responsive(50)}
              color={AppColor.C3}
            />
            <Title title={'Password Required'} />
            <SubTitle subTitle={'We sent a code to 6206416452'} />
            <View style={styles.formHolder}>
              <TextInputBox
                label={'Code'}
                value={otp}
                onChangeText={text => setOtp(text)}
                keyboardType={'number-pad'}
                maxLength={6}
              />
              <CustomButton
                title={'Continue'}
                backgroundColor={AppColor.C5}
                textColor={AppColor.white}
                handleAction={handleContinue}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.forgetPasswordHolder}>
              <MaterialIcons
                name="keyboard-backspace"
                color={AppColor.C5}
                size={responsive(30)}
              />
              <Text style={styles.text}>Back to login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleOtpResend}
              style={styles.forgetPasswordHolder}>
              <Text style={styles.text}>
                Didn't received the OTP ? Click Here
              </Text>
            </TouchableOpacity>
          </>
        )}
        {step === 3 && (
          <>
            <MaterialCommunityIcons
              name="dots-horizontal-circle-outline"
              size={responsive(50)}
              color={AppColor.C3}
            />
            <Title title={'Set new Password'} />
            <SubTitle subTitle={'Must be at least 6 character'} />
            <View style={styles.formHolder}>
              <TextInputBox
                label={'New password'}
                value={newPassword}
                onChangeText={text => setNewPassword(text)}
                keyboardType={'default'}
              />
              <TextInputBox
                label={'Confirm new password'}
                value={confirmNewPassword}
                onChangeText={text => setConfirmNewPassword(text)}
                keyboardType={'default'}
              />
              <CustomButton
                title={'Reset Password'}
                backgroundColor={AppColor.C5}
                textColor={AppColor.white}
                handleAction={handleFinalStep}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.forgetPasswordHolder}>
              <MaterialIcons
                name="keyboard-backspace"
                color={AppColor.C5}
                size={responsive(30)}
              />
              <Text style={styles.text}>Back to login</Text>
            </TouchableOpacity>
          </>
        )}

        {step === 1 && (
          <View style={styles.lowerView}>
            <View style={styles.activeBar} />
            <View style={styles.inactiveBar} />
            <View style={styles.inactiveBar} />
          </View>
        )}
        {step === 2 && (
          <View style={styles.lowerView}>
            <View style={styles.activeBar} />
            <View style={styles.activeBar} />
            <View style={styles.inactiveBar} />
          </View>
        )}
        {step === 3 && (
          <View style={styles.lowerView}>
            <View style={styles.activeBar} />
            <View style={styles.activeBar} />
            <View style={styles.activeBar} />
          </View>
        )}
        {/* <View style={styles.activeBar} />
          <View
            style={[
              styles.activeBar,
              {
                borderColor: AppColor.borderColor,
                backgroundColor: AppColor.white,
              },
            ]}
          />
          <View
            style={[
              styles.activeBar,
              {
                borderColor: AppColor.borderColor,
                backgroundColor: AppColor.white,
              },
            ]}
          />
        </View> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formHolder: {
    marginVertical: responsive(20),
    width: '95%',
    alignSelf: 'center',
    padding: responsive(10),
    borderRadius: responsive(5),
    borderColor: AppColor.borderColor,
  },
  forgetPasswordHolder: {
    borderBottomWidth: 2,
    padding: responsive(5),
    borderColor: AppColor.C5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: responsive(10),
  },
  text: {
    fontSize: responsive(16),
    fontFamily: 'NatoSans-Medium',
    color: AppColor.C5,
    textAlign: 'center',
    lineHeight: responsive(25),
  },
  lowerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  activeBar: {
    width: '30%',
    borderWidth: 2,
    backgroundColor: AppColor.green,
    borderColor: AppColor.green,
    padding: 3,
    borderRadius: 10,
  },
  inactiveBar: {
    width: '30%',
    borderWidth: 2,
    borderColor: AppColor.borderColor,
    backgroundColor: AppColor.white,
    padding: 3,
    borderRadius: 10,
  },
});
