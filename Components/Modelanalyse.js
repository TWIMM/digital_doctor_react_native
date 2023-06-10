import { View, Text , StyleSheet , Dimensions, } from 'react-native'
import React from 'react'

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;



export default function Registremodele({analyse}) {
  return (
    <View style={styles.item}
    key={analyse.id}
    >
   

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Type d'analyse : </Text>
         <Text > {analyse.type_analyse}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Date de début : </Text>
         <Text > {analyse.date_debut}</Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Date de fin : </Text>
         <Text >{analyse.date_fin} </Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Statut : </Text>
         <Text >{analyse.statut} </Text>
      </View>

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Resultat : </Text>
         <Text >{analyse.resultat} </Text>
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
      marginVertical: 5,
      marginHorizontal: 10,
    },
  
  })