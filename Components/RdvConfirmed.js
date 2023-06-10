import { View, Text , StyleSheet , TouchableOpacity, Dimensions , Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;
import { globalConst } from './GlobalConst';

export default function Rdvconfirmed({rendezVous , retrieveAppointement2}) {


    const cancelRdv = ( ) => {
      fetch(`${globalConst.hostUrl}/api/cancelrdv`, {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          id_rdv:rendezVous.id, 
        }) 
       
      })
      .then(response => response.json())
      .then((data) =>{
          
         console.log(data)
         if(data.statut === 'OK'){
          //getUsersAgain()
          retrieveAppointement2()
         }
        
       })
    }



    
    const finishRdv = ( ) => {
      fetch(`${globalConst.hostUrl}/api/finishrdv`, {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          id_rdv:rendezVous.id, 
        }) 
       
      })
      .then(response => response.json())
      .then((data) =>{
          
         console.log(data)
         if(data.statut === 'OK'){
          //getUsersAgain()
          retrieveAppointement2()
         }
        
       })
    }
  
  return (
    <TouchableOpacity 
      
    >  
    <View style={styles.item } >
        <Image style={styles.userLog} source={require('../Image/patient.png')}  />
        <Text style={styles.texter} > {rendezVous.patient_email} </Text>
       
        <View style={{ flexDirection:'row', display:'flex', justifyContent:'space-between', alignItems:'center' , width:width*0.5}} >
          <TouchableOpacity onPress={cancelRdv} style={{backgroundColor:'red',borderRadius:width*0.02, flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center' , }} >
            <Text > Annuler </Text>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
      
          <TouchableOpacity onPress={finishRdv} style={{backgroundColor:'rgb(163,160,255)',borderRadius:width*0.02, flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center' ,}} >
            <Text > Termminé </Text>
            <Ionicons name="checkmark-done-circle" size={24} color="black" />
          </TouchableOpacity>
        </View>
      
    </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
   
  texter:{
  
      fontWeight:'bold', 
      fontSize:13,
    },

    item: {
      display:'flex',
      flexDirection:'column', 
      judtifyContent:'space-between',
      alignItems:'center',
      borderRadius:width*0.02,
      padding:10,
      backgroundColor: 'rgba(255, 116, 105, 0.7)',
      width:width*0.6,
      marginVertical: 5,
      marginHorizontal: 10,
    },
    seemore:{
        width:width*0.20,
        borderRadius:width*0.03,
        height:width*0.08,
        display:'flex',
        flexDirection:'column', 
        judtifyContent:'center',
        alignItems:'center',
        marginTop:width*0.07,
        backgroundColor:'black', 
       
    },
    userLog:{
      width:width*0.15, 
      height:height*0.15,
    },
    seemoretext:{
        fontSize:16,
        color:'white'
    }
  })