import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsive} from '../../utils/Responsive';
import {AppColor} from '../../theme/AppColor';

const UserDetails = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);
      const hours = currentTime.getHours();

      if (hours < 12) {
        setGreeting('Good Morning');
      } else if (hours < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  return (
    <View style={styles.main}>
      <View style={styles.detailsHolder}>
        <Text style={styles.text}>Hello ☘️</Text>
        <Text style={styles.text}>Time : {formattedTime}</Text>
      </View>
      <View style={styles.detailsHolder}>
        <Text style={styles.text}>{greeting}</Text>
        <Text style={styles.text}>Ashish Ranjan</Text>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  main: {
    padding: responsive(10),
    borderBottomWidth: 2,
    borderBottomColor: AppColor.C4,
  },
  detailsHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsive(20),
  },
  text: {
    fontSize: responsive(20),
    color: AppColor.C4,
    fontFamily: 'NotoSans-Bold',
  },
});
