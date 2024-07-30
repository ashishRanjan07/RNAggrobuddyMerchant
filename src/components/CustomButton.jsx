import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsive } from '../utils/Responsive'

const CustomButton = ({title,backgroundColor,textColor}) => {
  return (
    <TouchableOpacity style={[styles.main,{borderColor:backgroundColor,backgroundColor:backgroundColor}]}>
      <Text style={[styles.text,{color:textColor}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    main:{
        borderWidth:2,
        width:'100%',
        borderRadius:responsive(5),
        padding:responsive(10),
        alignItems:'center',
        marginVertical:responsive(5),
    },
    text:{
        fontSize:responsive(20),
        textAlign:'center',
        fontFamily:'NotoSans-Medium',
        letterSpacing:responsive(1)
    }
})