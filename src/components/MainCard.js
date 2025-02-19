import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../data/colors'
import { fonts } from '../data/font';
const {height, width} = Dimensions.get('window');


const MainCard = ({title,time}) => {
  return (
    <View style={{backgroundColor:colors.sec,height:height/5,borderRadius:15,width:width-24,flexDirection: 'row'}}>
        <View style={{flex:1, margin:12,}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../images/cutlery.png')} style={{aspectRatio:1,width:20,marginRight:6}}/>
            <Text style={{fontFamily: fonts.b,color: colors.text,fontSize:18}}>{title}</Text>
            </View>
            <View style={{flexDirection:'row',flex:1,alignItems: 'flex-end'}}>
            <Image source={require('../images/fire.png')} style={{width:15,height:15,marginRight:6}}/>
            <Text style={{fontFamily: fonts.m,color: colors.text,fontSize:12}}>{time}</Text>
            </View>

        </View>
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
        <Image source={require('../images/biriyani.png')} style={{resizeMode:'center'}}/>

        </View>
    </View>
  )
}

export default MainCard

const styles = StyleSheet.create({})