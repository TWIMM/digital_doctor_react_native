import { View, Text , SafeAreaView , TouchableOpacity , StyleSheet , Dimensions } from 'react-native'
import React , {useState , useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function DifferentPart() {

  const navigation = useNavigation();

  return (
    <SafeAreaView>

        <View style={styles.container}>
     
      <TouchableOpacity style={styles.menu}
          onPress={()=>{
             navigation.navigate('Régistre des consultations')
          }}
      >
        <Text style={{ color:'black', fontSize:17,fontWeight:'bold'}}>  
           Registre des consultations du patient 
        </Text>
       </TouchableOpacity>

       <TouchableOpacity  style={styles.menu}
         onPress={()=>{
           navigation.navigate('Soins administrés')
         }}
       >
        <Text style={{ color:'black', fontSize:17,fontWeight:'bold'}}>  
          Registre de soins & analyses 
        </Text>
        </TouchableOpacity>


      <TouchableOpacity  style={styles.menu}
          onPress={()=>{
             navigation.navigate('Régistre médical du patient')
           }}
      >
        <Text  style={{ color:'black', fontSize:17,fontWeight:'bold'}}>  
           Registre médical du patient
        </Text>
      </TouchableOpacity>

    </View>
    </SafeAreaView>
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