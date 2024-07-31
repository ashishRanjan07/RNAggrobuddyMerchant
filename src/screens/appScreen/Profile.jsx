import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../theme/AppColor'
import CustomHeader from '../../components/CustomHeader'

const Profile = () => {
  return (
    <View style={styles.main}>
     <StatusBar barStyle={"dark-content"} backgroundColor={AppColor.background}/>
     <CustomHeader title={"Profile"}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:AppColor.background
    }
})