import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../data/colors'

const RecepieScreen = ({ route }) => {
    const item = route.params;
  return (
    <View style={{backgroundColor: colors.background,flex:1}}>
      <Text>{}</Text>
    </View>
  )
}

export default RecepieScreen

const styles = StyleSheet.create({})