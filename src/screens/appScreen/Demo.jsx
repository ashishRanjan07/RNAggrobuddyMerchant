import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../theme/AppColor';
import {responsive} from '../../utils/Responsive';

const Demo = () => {
  const [form, setForm] = useState([
    {
      id: '1',
      name: 'Ashish Ranjan',
      email: 'aviashishranjan@gmail.com',
    },
    {
      id: '2',
      name: 'Monal',
      email: 'Monal@gmail.com',
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (inputValue) => {
    console.log('Submitted for name Change Name = :', inputValue);

    const updatedForm = form.map(item => ({
      ...item,
      name: inputValue,
    }));

    setForm(updatedForm);
  };

  return (
    <View style={styles.main}>
      {form.map((item, index) => (
        <View key={item?.id}>
          <Text style={styles.text}>{item?.email}</Text>
          <Text style={styles.text}>{item?.name}</Text>
          <Text style={styles.text}>{item?.id}</Text>
        </View>
      ))}
      <TextInput
        placeholder="Name Value"
        placeholderTextColor={AppColor.black}
        style={styles.textInput}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      <Button title="Submit" onPress={() => handleSubmit(inputValue)} />
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  text: {
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
  },
  textInput: {
    borderWidth: 1,
    borderColor: AppColor.black,
    color: AppColor.black,
  },
});
