import { View, Text , StyleSheet , TouchableOpacity, Dimensions , Alert , Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { globalConst } from './GlobalConst';
const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function Programmationmodele({programmation , patientEmail , setMyData}) {

  const [error , setError ] = useState('')
 
  const getRdvConfirmed = ()=>{
   
    fetch(`${globalConst.hostUrl}/api/getPatientRdv`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
       body:JSON.stringify({
        email:patientEmail, 
      })
     
    })
    .then(response => response.json())
    .then((data) =>{
    
      setMyData(data.rdv);
    
      
     })
  }


    
    const prendreRdv = ()=>{
   
        fetch(`${globalConst.hostUrl}/api/prendreRdv`, {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
           body:JSON.stringify({
             dr_email:programmation.dr_email,
             patient_email:patientEmail, 
             date:programmation.date,
             plage_horaire:programmation.plage_horaire
          })
         
        })
        .then(response => response.json())
        .then((data) =>{
        
              console.log(data)
             getRdvConfirmed()

             if(data.statut === 'Not Ok'){
             
              Alert.alert(
        
                'Erreur', 
                `Rendez-vous déjà confirmé pour le ${programmation.date} de ${programmation.plage_horaire} Heure`,
                
                [
        
                    {
                        text: 'Ok',
                        onPress: () => {
                            console.log('Declined')
                    },
                    },
                ]
            );
         }
          
         })
    }

  
    const createAlertAgree = () =>
    Alert.alert(
        
        'Confirmation', 
        `Veuillez confirmer ce rendez-vous `,
        
        [
            {
                text: 'Confirmer',
                onPress: () => {
                    prendreRdv();
            },
            },

            {
                text: 'Décliner',
                onPress: () => {
                    console.log('Declined')
            },
            },
        ]
    );




  return (
    <TouchableOpacity 
        onPress={createAlertAgree}
    >  
    <View style={styles.item}
    key={programmation.id}
    >
          <Image style={styles.userLog} source={require('../Image/medicalteam.png')}  />
      <View style={{ flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center', marginBottom:width*0.1}} >
         <Text  style={styles.title} > {'->'} Jour de la semaine  </Text>
         <Text > {programmation.date}</Text>
      </View>

      <View style={{ flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center' ,  marginBottom:width*0.1}} >
         <Text  style={styles.title} > {'->'} Heures de la journée   </Text>
         <Text > {programmation.plage_horaire} Heure</Text>
      </View>

      <View style={{ flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center' ,  marginBottom:width*0.1}} >
         <Text  style={styles.title} > {'->'} Docteur en charge   </Text>
         <Text > {programmation.dr_email}</Text>
      </View>

      <View style={{ flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Infirmiere en charge   </Text>
         <Text > {programmation.infirmiere_email}</Text>
      </View>



    </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    title:{
        fontWeight:'bold', 
        fontSize:width*0.035,
      },
      userLog:{
        width:width*0.20, 
        height:height*0.20,
    },
    item: {
      display:'flex',
      flexDirection:'column', 
      judtifyContent:'center',
      alignItems:'center',
      borderRadius:width*0.02,
      backgroundColor: 'rgba(255, 116, 105, 0.7)',
      width:width*0.6,
      marginVertical: 10,
      marginHorizontal: 3,
    },
  
  })