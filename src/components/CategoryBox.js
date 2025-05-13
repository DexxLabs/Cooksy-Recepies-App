import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../data/colors'
import { fonts } from '../data/font'

const CategoryBox = ({name,focused}) => {
  return (
    <View style={{backgroundColor:focused?colors.pri:colors.sec,borderRadius:12,padding: 12, marginRight:6}}>
      <Text style={{fontFamily: fonts.b,color:colors.text}}>{name}</Text>
    </View>
  )
}

export default CategoryBox

const styles = StyleSheet.create({})