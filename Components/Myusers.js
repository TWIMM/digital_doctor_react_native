import { View, Text , StyleSheet , Dimensions, TouchableOpacity} from 'react-native'
import React , {useState , useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;
import { globalConst } from './GlobalConst';



export default function Mysusers({users , getUsersAgain}) {

  const [error , setError ] = useState('')

  const deleteUser = ( ) => {
    fetch(`${globalConst.hostUrl}/api/deleteuser`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:users.email, 
      }) 
     
    })
    .then(response => response.json())
    .then((data) =>{
        
       console.log(data)
       if(data.statut === 'OK'){
        getUsersAgain()
       }
      
     })
  }

  return (
    <View style={styles.item}
    key={users.email}
    >
   

      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Email de l'utilisateur : </Text>
         <Text > {users.email}</Text>
      </View>



      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Nom de l'utilisateur : </Text>
         <Text > {users.name}</Text>
      </View>



      <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
         <Text  style={styles.title} > {'->'} Type  d'utilisateur : </Text>
         <Text > {users.email}</Text>
      </View>


      <TouchableOpacity onPress={deleteUser} style={{backgroundColor:'red',borderRadius:width*0.02, flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center' , marginVertical:width*0.15}} >
      <Text > Supprimer </Text>
       <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>

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