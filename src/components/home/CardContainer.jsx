import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { responsive } from '../../utils/Responsive';
import { AppColor } from '../../theme/AppColor';

const CardContainer = ({text,value}) => {
  return (
  
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.subText}>{value}</Text>
      </View>
    
  );
};

export default CardContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: '45%',
        padding: responsive(10),
        borderRadius: responsive(5),
        borderColor: AppColor.white,
        backgroundColor: AppColor.white,
        gap:responsive(10)
      },
      text:{
        fontFamily:'NotoSans-Medium',
        color:AppColor.C4,
        fontSize:responsive(19),
        textAlign:'center'
      },
      subText:{
        fontFamily:'NotoSans-Medium',
        color:AppColor.black,
        fontSize:responsive(16),
        textAlign:'center'
      }
});
