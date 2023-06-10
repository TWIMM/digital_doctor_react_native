import { View, Text , StyleSheet , TouchableOpacity, Dimensions , Image} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'


const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function Rendezvousmodele({rendezVous}) {
  return (
    <View style={styles.item } >
          <Image style={styles.userLog} source={require('../Image/agenda.png')}  />
        <Text style={styles.texter} > Horaires de travail : {rendezVous.plage_horaire} heures</Text>
        <Text style={styles.texter}  >Jour de la semaine  : {rendezVous.date}</Text>
      
    </View>
  )
}


const styles = StyleSheet.create({
   
    texter:{
      fontWeight:'bold', 
      fontSize:13,
      marginTop:width*0.07,
    },

    item: {
      display:'flex',
      flexDirection:'column', 
      judtifyContent:'center',
      alignItems:'center',
      borderRadius:width*0.03,
      backgroundColor: 'rgba(255, 116, 105, 0.7)',
     
      width:width*0.8,
      marginVertical: 5,
      marginHorizontal: -6,
    },
    seemore:{
        width:width*0.25,
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
      height:height*0.10,

    },
    seemoretext:{
        fontSize:16,
        color:'white'
    }
  })