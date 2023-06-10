import { View, Text , StyleSheet , Dimensions, } from 'react-native'
import React from 'react'

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;



export default function Consultations({consultations}) {
  return (
    <View style={styles.item}
    key={consultations.id_consultation}
    >
      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >  {'->'} Date :</Text>
         <Text> {consultations.date}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >  {'->'} Numero de ticket de la consultation :</Text>
         <Text selectable> {consultations.id_consultation}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title}>  {'->'} Email du patient : </Text>
         <Text > {consultations.patient_email}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title}>  {'->'} Email du médécin :</Text>
         <Text> {consultations.dr_email}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >  {'->'} Observation du médécin :     </Text>
         <Text> {consultations.observation_postconsultation}</Text>
      </View>

      
      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >  {'->'} Analyse du médécin :     </Text>
         <Text> {consultations.analyse}</Text>
      </View>

      
      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >  {'->'} Symptomes du patient :     </Text>
         <Text> {consultations.symptome}</Text>
      </View>

      
      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >  {'->'} Vaccin du patient :     </Text>
         <Text> {consultations.vaccin}</Text>
      </View>

      
      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} >  {'->'} Diagnostique du médécin :     </Text>
         <Text> {consultations.diagnostique}</Text>
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
      padding:10,
      backgroundColor: 'rgba(255, 116, 105, 0.7)',
      width:width*0.95,
      height:height*0.2,
      marginVertical: 5,
      marginHorizontal: 10,
    },
  
  })