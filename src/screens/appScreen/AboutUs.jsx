import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../theme/AppColor';
import CustomHeader from '../../components/CustomHeader';
import {responsive} from '../../utils/Responsive';
import {string} from '../../utils/String';
import {ScrollView} from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.main}>
      <CustomHeader title={'About Us'} />
      <ScrollView
        style={styles.textViewHolder}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>{string.header}</Text>
        <Text style={styles.text}>{string.header2}</Text>
        <Text style={styles.text}>{string.header3}</Text>
        <Text style={styles.text}>{string.header4}</Text>
        {/* Problem Addressed */}
        <Text style={styles.headerText}>Problem Addressed</Text>
        <Text style={styles.text}>{string.problem}</Text>
        {/* Solution Offered */}
        <Text style={styles.headerText}>Solution Offered</Text>
        <Text style={[styles.text, {marginBottom: responsive(40)}]}>
          {string.solution}
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  textViewHolder: {
    width: '95%',
    padding: responsive(10),
    alignSelf: 'center',
  },
  text: {
    fontSize: responsive(18),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    letterSpacing: responsive(1),
    lineHeight: responsive(25),
    textAlign: 'justify',
    marginVertical: responsive(5),
  },
  headerText: {
    fontSize: responsive(20),
    color: AppColor.C4,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
    marginVertical: responsive(10),
    borderBottomWidth: 2,
    borderBottomColor: AppColor.C4,
  },
});
