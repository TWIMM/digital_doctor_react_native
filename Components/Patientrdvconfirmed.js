import { View, Text , StyleSheet , TouchableOpacity, Dimensions , Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function Patientrdvconfirmed({rdv}) {
  return (
  
    <View style={styles.item}
    key={rdv.id}
    >
        <Image style={styles.userLog} source={require('../Image/agenda.png')}  />
      <View style={{ flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center' ,  marginBottom:width*0.1}} >
         <Text  style={styles.title} > {'->'} Jour de la semaine  </Text>
         <Text > {rdv.date}</Text>
      </View>

      <View style={{ flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center',  marginBottom:width*0.1}} >
         <Text  style={styles.title} > {'->'} Heures de la journée   </Text>
         <Text > {rdv.plage_horaire} Heure</Text>
      </View>

      <View style={{ flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Docteur en charge   </Text>
         <Text > {rdv.dr_email}</Text>
      </View>

    


    </View>
 
  )
}


const styles = StyleSheet.create({
    title:{
        fontWeight:'bold', 
        fontSize:width*0.035,
      },
      userLog:{
        width:width*0.17, 
        height:height*0.15,
    },
    item: {
      display:'flex',
      flexDirection:'column', 
      judtifyContent:'center',
      alignItems:'center',
      borderRadius:width*0.02,
      padding:10,
      backgroundColor: 'rgba(255, 116, 105, 0.7)',
      width:width*0.5,
      marginVertical: 10,
      marginHorizontal: 3,
    },
  
  })