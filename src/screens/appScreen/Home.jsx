import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {AppColor} from '../../theme/AppColor';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader';
import UserDetails from '../../components/home/UserDetails';
import {responsive} from '../../utils/Responsive';
import CardContainer from '../../components/home/CardContainer';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <CustomHeader title={'Home'} />
      <UserDetails />
      <View style={styles.containerHolder}>
        <CardContainer text={"Total Active Hire"} value={'985 Workers'}/>
        <CardContainer text={"Complete Order"} value={'185 Orders'}/>
      </View>
      <View style={styles.containerHolder}>
        <CardContainer text={"Total Revenue generated"} value={'Rs.85Cr'}/>
        <CardContainer text={"Total Amount Saved"} value={'Rs.185'}/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  containerHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
   marginVertical:responsive(10),
   alignItems:'center',
  },
  
});
