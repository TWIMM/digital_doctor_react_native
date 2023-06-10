import { View, Text , StyleSheet , Dimensions, } from 'react-native'
import React from 'react'

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;



export default function Registremodele({registre_medical}) {
  return (
    <View style={styles.item}
    key={registre_medical.id}
    >
   

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Email du patient : </Text>
         <Text > {registre_medical.patient_email}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >   {'->'} Groupe sanguin :</Text>
         <Text> {registre_medical.groupe_sanguin}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >  {'->'}Type d'assurance :</Text>
         <Text> {registre_medical.type_assurance}</Text>
      </View>
 
      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title}>  {'->'}Electrophorese :</Text>
         <Text> {registre_medical.electrophorese}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title}>  {'->'}Allergie :</Text>
         <Text> {registre_medical.allergie}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title}>  {'->'} Maladie héréditaires :    </Text>
         <Text> {registre_medical.maladie_hereditaire}</Text>
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
      height:height*0.2,
      backgroundColor: 'rgba(255, 116, 105, 0.7)',
      width:width*0.95,
      marginVertical: 5,
      marginHorizontal: 10,
    },
  
  })