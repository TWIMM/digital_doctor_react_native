import { View, Text , StyleSheet , Dimensions, } from 'react-native'
import React from 'react'

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;



export default function Getsoinsmodel({getsoinsmodel}) {
  return (
    <View style={styles.item}
    key={getsoinsmodel.id}
    >
   

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Traitement administré  : </Text>
         <Text > {getsoinsmodel.ordonnance}</Text>
      </View>

    


    </View>
  )
}



const styles = StyleSheet.create({
    title:{
        fontWeight:'bold', 
        fontSize:width*0.035,
      },


    item: {
      display:'flex',
      flexDirection:'column', 
      judtifyContent:'center',
      alignItems:'center',
      borderRadius:width*0.02,
      padding:width*0.02,
      backgroundColor: 'rgba(255, 116, 105, 0.7)',
      width:width*0.95,
      height:height*0.2,
      marginVertical: 5,
      marginHorizontal: 10,
    },
  
  })