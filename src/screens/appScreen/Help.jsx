import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader';
import {AppColor} from '../../theme/AppColor';
import {responsive} from '../../utils/Responsive';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/CustomButton';

const Help = () => {
  const [name, setName] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage]= useState('');

  const handleSubmitFeedback = () => {
    Alert.alert("success","Feedback Submitted Successfully")
    console.log(name,subject,message)
    setName('');
    setMessage('')
    setSubject('')
  }
  return (
    <View style={styles.main}>
    <SafeAreaView/>
      <CustomHeader title={'Help'} />
      <ScrollView>
        <View style={styles.textHolder}>
          <Title title={'Help Form'} />
          <SubTitle
            subTitle={
              'Please fill the below form for any help \n you will get revert back within 24 hrs'
            }
          />
        </View>
        {/* Form Holder */}
        <View style={styles.formHolder}>
          {/* Name */}
          <View style={styles.textInputView}>
            <FontAwesome
              name="user-circle-o"
              size={responsive(40)}
              color={AppColor.C4}
            />
            <TextInput
              placeholder="Name"
              placeholderTextColor={AppColor.black}
              value={name}
              onChangeText={text => setName(text)}
              style={styles.textInput}
              keyboardType="default"
              multiline={false}
            />
          </View>
          {/* Subject */}
          <View style={[styles.textInputView,{height:responsive(100)}]}>
            <TextInput
              placeholder="Subject"
              placeholderTextColor={AppColor.black}
              value={subject}
              onChangeText={text => setSubject(text)}
              style={[styles.textInput,{alignItems:''}]}
              keyboardType="default"
              multiline={true}
            />
          </View>
          {/* Message */}
          <View style={[styles.textInputView,{height:responsive(200)}]}>
            <TextInput
              placeholder="Message"
              placeholderTextColor={AppColor.black}
              value={message}
              onChangeText={text => setMessage(text)}
              style={styles.textInput}
              keyboardType="default"
              multiline={true}
            />
          </View>
          <View style={{width:'90%',alignSelf:'center'}}>
          <CustomButton title={"Submit Feedback"} backgroundColor={AppColor.C4} textColor={AppColor.white} handleAction={handleSubmitFeedback}/>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  textHolder: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsive(25),
  },
  textInputView: {
    borderWidth: 2,
    borderColor: AppColor.borderColor,
    width: '90%',
    padding: responsive(10),
    alignSelf: 'center',
    borderRadius: responsive(10),
    flexDirection: 'row',
    gap: responsive(5),
    alignItems: 'center',
  },
  textInput: {
    width: '85%',
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
    color: AppColor.C4,
  },
  formHolder: {
    gap: responsive(10),
  },
});
