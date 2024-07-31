import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { AppColor } from '../../theme/AppColor'

const Hire = () => {
  return (
    <View style={styles.main}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={AppColor.background}
      />
      <CustomHeader title={"Worker"}/>
    </View>
  )
}

export default Hire

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: AppColor.background,
      },
})