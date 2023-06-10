import { View, Text , TextInput , ScrollView , TouchableOpacity  , StyleSheet , FlatList , Dimensions , Image} from 'react-native'
import React , {useState , useEffect} from 'react'
import SpinnerTwo from './Spinnertwo';
import Registremodele from './Registremodele'
import { globalConst } from './GlobalConst';
import handleEmpty from './handleEmpty';


const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function Registremedicale() {
    
    let [loading, setLoading] = useState(false);
    const [DATA, setData] =  useState([])
    const [patientEmail, setPatientEmail] =  useState('')
  /*   setLoading(true) ; 
    setTimeout(()=>{
      setLoading(false)
    } , 2800) */


    const getRegistremed = ()=>{
    
      fetch(`${globalConst.hostUrl}/api/getRegistreMedical`, {
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
            
           console.log(data)
           setData(data.registre_medical);
          
         })

  }


  return (
    <ScrollView 
      keyboardShouldPersistTaps={'never'}
      automaticallyAdjustKeyboardInsets={true} 
    >
        <View 
          style={styles.container}
        >
          <Image style={styles.userLog} source={require('../Image/medical-history.png')}  />
        <TextInput onChangeText={(text)=>{ setPatientEmail(text)}} placeholder="Entrez l'email du patient" style={styles.textinputone} />

        <TouchableOpacity style={styles.menu} 
          onPress={() => {
                getRegistremed();
                setLoading(true) ; 
                setTimeout(()=>{
                setLoading(false)
                } , 2800); 
              
          }}
        >
            <Text style={{ color:'black', fontSize:17,fontWeight:'bold'}}>  
              Voir les consultations 
            </Text>
        </TouchableOpacity>


        {
            loading? 
            <SpinnerTwo />
             :
             <View style={styles}>
                <FlatList
                       horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={({item}) => <Registremodele registre_medical={item} />}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={handleEmpty}
                    key={item => item.id }
                />
            </View>

        }
      </View>  
    </ScrollView>
  )
}


const styles = StyleSheet.create({

  container:{
    display:'flex', 
    alignItems:'center', 
    width:width,
    marginTop:width*0.06,
    height:height,
    flexDirection:'column'
},
userLog:{
  width:width*0.17, 
  height:height*0.15,
},
  
    menu:{
      display:'flex', 
      justifyContent:'center',
      alignItems:'center', 
      width:width*0.9,
      marginBottom:width*0.02,
      flexDirection:'row',
      height:height*0.05,
      borderRadius:width*0.03,
      backgroundColor:'rgba(255, 116, 105, 0.7)',
    },

    textinputone:{
      borderColor:'rgba(255, 116, 105, 0.7)',
      borderWidth:width*0.005,
      borderRadius:width*0.032,
      height:height*0.05,
      width:width*0.95,
      marginBottom:width*0.07, 
      color:'black'
  },
  
  })