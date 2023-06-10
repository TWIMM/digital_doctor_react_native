import { View, Text , Dimensions,Image } from 'react-native'
import React from 'react'
import mySpinner from '../Image/spinner.gif'

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;

export default function Spinner() {
  return (
    <View style={{backgroundColor:'rgba(255, 116, 105, 0.7)', height:height, display:'flex', justifyContent:'center', alignItems:'center'}}>
         <Image source={mySpinner} />
    </View>
  )
}