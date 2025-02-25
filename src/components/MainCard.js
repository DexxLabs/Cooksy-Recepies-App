import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../data/colors'
import { fonts } from '../data/font';
const {height, width} = Dimensions.get('window');


const MainCard = ({title,img,time,desc,diffculty}) => {
  return (
    <View style={{backgroundColor:colors.sec,height:height/5,borderRadius:15,width:width-24,flexDirection: 'row',marginVertical:10}}>
        <View style={{flex:1, margin:12,}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../images/cutlery.png')} style={{aspectRatio:1,width:15,marginRight:3}}/>
            <Text style={{fontFamily: fonts.b,color: colors.text,fontSize:18}}>{title}</Text>
            </View>
            <Text style={{fontFamily:fonts.s, color:'#808080',marginTop:6,fontSize:11,paddingRight:18}}>{desc}</Text>
            <View style={{flexDirection:'row',flex:1,alignItems: 'flex-end'}}>
            <Image source={require('../images/level.png')} style={{width:10,height:10,marginRight:3}}/>
            <Text style={{fontFamily: fonts.m,color: colors.text,fontSize:12,marginRight:3}}>{diffculty}</Text>

            </View>
            <View style={{flexDirection:'row',alignItems: 'flex-end',marginTop:3}}>
            <Image source={require('../images/fire.png')} style={{width:10,height:10,marginRight:3}}/>
            <Text style={{fontFamily: fonts.m,color: colors.text,fontSize:12}}>{time}</Text>
            </View>

        </View>
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
        <Image source={img} style={{height: height/6,resizeMode:'center'}}/>

        </View>
    </View>
  )
}

export default MainCard

const styles = StyleSheet.create({})