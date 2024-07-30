import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../theme/AppColor'
import { responsive } from '../utils/Responsive'

const Title = ({title}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    main:{
        padding:responsive(20),
        width:'95%',
        alignItems:'center',
        alignSelf:'center'
    },
    text:{
        fontSize:responsive(22),
        color:AppColor.green,
        fontFamily:'NotoSans-Bold',
        textAlign:'center'
    }
})