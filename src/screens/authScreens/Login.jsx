// import {
//   Image,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import {AppColor} from '../../theme/AppColor';
// import {ImagePath} from '../../utils/ImagePath';
// import {responsive} from '../../utils/Responsive';
// import TextInputBox from '../../components/TextInputBox';
// import CustomButton from '../../components/CustomButton';
// import {useNavigation} from '@react-navigation/native';
// import {showToast} from '../../utils/ToastHelper';

// const Login = () => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleLoginButtonClick = () => {
//     if (mobileNumber.trim() === '') {
//       showToast(
//         'error',
//         'Mobile Number Required',
//         'Please enter mobile number for logging',
//       );
//       return;
//     }
//     if (password.trim() === '') {
//       showToast(
//         'error',
//         'Password Required',
//         'Please enter password for logging',
//       );
//       return;
//     }
//     if (mobileNumber.length != 10) {
//       showToast(
//         'error',
//         'Mobile number error',
//         'Please enter 10 digit valid mobile number',
//       );
//       return;
//     }
//   };
//   return (
//     <View style={styles.main}>
//       <StatusBar
//         barStyle={'dark-content'}
//         backgroundColor={AppColor.background}
//       />
//       <Image source={ImagePath.logo} resizeMode="center" style={styles.image} />
//       <View style={styles.formHolder}>
//         <TextInputBox
//           label={'Mobile Number'}
//           value={mobileNumber}
//           onChangeText={text => setMobileNumber(text)}
//           keyboardType={'number-pad'}
//         />
//         <TextInputBox
//           label={'Password'}
//           value={password}
//           onChangeText={text => setPassword(text)}
//           keyboardType={'default'}
//         />
//         <CustomButton
//           title={'Login'}
//           backgroundColor={AppColor.green}
//           textColor={AppColor.white}
//           handleAction={handleLoginButtonClick}
//         />
//       </View>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Registration')}
//         style={styles.forgetPasswordHolder}>
//         <Text style={styles.text}>Create Account</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           styles.forgetPasswordHolder,
//           {borderColor: 'red', marginTop: responsive(10)},
//         ]}>
//         <Text style={[styles.text, {color: 'red'}]}>Forget Password ?</Text>
//       </TouchableOpacity>
//       <View style={styles.bottomHolder}>
//         <Text style={styles.text}>
//           By Logging you are agree with our terms and conditions
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: AppColor.background,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: responsive(150),
//     height: responsive(150),
//   },
//   formHolder: {
//     borderWidth: 2,
//     marginVertical: responsive(20),
//     width: '95%',
//     alignSelf: 'center',
//     padding: responsive(10),
//     borderRadius: responsive(5),
//     borderColor: AppColor.borderColor,
//   },
//   forgetPasswordHolder: {
//     borderBottomWidth: 2,
//     padding: responsive(5),
//     borderColor: AppColor.C5,
//   },
//   text: {
//     fontSize: responsive(18),
//     fontFamily: 'NatoSans-Medium',
//     color: AppColor.C5,
//     textAlign: 'center',
//     lineHeight: responsive(25),
//   },
//   bottomHolder: {
//     position: 'absolute',
//     bottom: 20,
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
// });

import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppColor} from '../../theme/AppColor';
import {ImagePath} from '../../utils/ImagePath';
import {responsive} from '../../utils/Responsive';
import TextInputBox from '../../components/TextInputBox';
import CustomButton from '../../components/CustomButton';
import {showToast} from '../../utils/ToastHelper';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLoginButtonClick = () => {
    if (mobileNumber.trim() === '') {
      showToast(
        'error',
        'Mobile Number Required',
        'Please enter your mobile number.',
      );
      return;
    }
    if (!/^\d{10}$/.test(mobileNumber)) {
      showToast(
        'error',
        'Invalid Mobile Number',
        'Please enter a valid 10-digit mobile number.',
      );
      return;
    }

    // Password Validation
    if (password.trim() === '') {
      showToast('error', 'Password Required', 'Please enter your password.');
      return;
    }
    if (password.length < 6) {
      showToast(
        'error',
        'Weak Password',
        'Password should be at least 6 characters long.',
      );
      return;
    }

    // Successful Login (Placeholder Logic)
    showToast(
      'success',
      'Login Successful',
      'You have logged in successfully.',
    );
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <View style={styles.inner}>
        <Image
          source={ImagePath.logo}
          resizeMode="center"
          style={styles.image}
        />
        <View style={styles.formHolder}>
          <TextInputBox
            label={'Mobile Number'}
            value={mobileNumber}
            onChangeText={text => setMobileNumber(text)}
            keyboardType={'number-pad'}
            maxLength={10}
          />
          <TextInputBox
            label={'Password'}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <CustomButton
            title={'Login'}
            backgroundColor={AppColor.green}
            textColor={AppColor.white}
            handleAction={handleLoginButtonClick}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Registration')}
          style={styles.forgetPasswordHolder}>
          <Text style={styles.text}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.forgetPasswordHolder,
            {borderColor: 'red', marginTop: responsive(10)},
          ]}>
          <Text style={[styles.text, {color: 'red'}]}>Forget Password?</Text>
        </TouchableOpacity>
        <View style={styles.bottomHolder}>
          <Text style={styles.text}>
            By logging in, you agree to our terms and conditions
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    backgroundColor: AppColor.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: responsive(150),
    height: responsive(150),
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
  },
  text: {
    fontSize: responsive(16),
    fontFamily: 'NatoSans-Medium',
    color: AppColor.C5,
    textAlign: 'center',
    lineHeight: responsive(25),
  },
  bottomHolder: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
    // width:'90%'
  },
});
