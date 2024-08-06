import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsive } from '../utils/Responsive';
import { AppColor } from '../theme/AppColor';
const ListItem = ({title,Icon,Name,handleAction}) => {
  return (
    <TouchableOpacity style={styles.itemHolder} onPress={handleAction}>
    <View style={styles.commonView}>
    <Icon name={Name} size={responsive(30)} color={AppColor.C4} />
    <Text style={styles.listText}>{title}</Text>
    </View>
    <Feather name="arrow-right" size={responsive(30)} color={AppColor.C4} />
  </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
    itemHolder: {
        borderWidth: 2,
        marginTop: responsive(10),
        padding: responsive(10),
        borderRadius: responsive(5),
        backgroundColor: AppColor.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor:AppColor.C4
      },
      listText: {
        color: AppColor.C4,
        fontSize: responsive(20),
        fontFamily: 'NotoSans-Medium',
      },
      commonView:{
        flexDirection:'row',
        alignItems:'center',
        gap:responsive(30)
      }
})