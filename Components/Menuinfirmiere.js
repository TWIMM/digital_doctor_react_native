import { View, Text , StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React , {useState, useEffect} from 'react'


const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function Menuinfirmier({ route, navigation }) {

    useEffect(()=>{console.log(route.params)}, [])
  

  return (

    <View style={styles.container}>
     
       <TouchableOpacity  style={styles.menu}
         onPress={()=>{
          navigation.goBack();
          navigation.navigate("Constantes d'une consultation", {
            docEmail:route.params.docEmail,
            docName:route.params.docName,
          });
         }}
       >
        <Text style={{ color:'black', fontSize:17,fontWeight:'bold'}}>  
          Constante d'une consultation
        </Text>
        </TouchableOpacity>
        



    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    display:'flex', 
    justifyContent:'center',
    alignItems:'center', 
    width:width,
    padding:width*0.04,
    flexDirection:'column'
  }, 

  menu:{
    display:'flex', 
    justifyContent:'center',
    alignItems:'center', 
    width:width*0.9,
    marginBottom:width*0.02,
    flexDirection:'row',
    height:height*0.1,
    borderRadius:width*0.03,
    backgroundColor:'rgba(255, 116, 105, 0.7)',
  }

})