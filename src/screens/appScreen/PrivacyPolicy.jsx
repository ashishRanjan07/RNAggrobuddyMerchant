import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader';
import {AppColor} from '../../theme/AppColor';
import {WebView} from 'react-native-webview';
import {BarIndicator} from 'react-native-indicators';

const PrivacyPolicy = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.main}>
    <SafeAreaView/>
      <CustomHeader title={'Privacy Policy'} />
      {isLoading && (
        <View style={styles.loaderContainer}>
          <CustomHeader title={'Privacy Policy'} />
          <BarIndicator color={AppColor.C4} />
        </View>
      )}
    
        <WebView
          source={{
            uri: 'https://www.freeprivacypolicy.com/live/cda4fe0e-2ca2-41d7-ad5c-d6bb20054b33',
          }}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          style={isLoading ? {display: 'none'} : {flex: 1}}
        />
     
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.background,
  },
});
