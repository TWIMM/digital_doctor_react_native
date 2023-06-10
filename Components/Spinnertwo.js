import { View, Text, Dimensions,  Image } from 'react-native'
import React from 'react'
import Spinnertwo from '../Image/gifTwo.gif'


const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;

export default function SpinnerTwo() {
  return (
    <View  style={{  display:'flex', justifyContent:'center', alignItems:'center'}}>
         <Image source={Spinnertwo} />
    </View>
  )
}