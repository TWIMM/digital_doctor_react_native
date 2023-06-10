import { View, Text , TextInput , SafeAreaView , TouchableOpacity  , StyleSheet , FlatList , Dimensions , Image  , ScrollView} from 'react-native'
import React , {useState , useEffect} from 'react'
import SpinnerTwo from './Spinnertwo';
import Consultations from './Consultations';
import { globalConst } from './GlobalConst';
import handleEmpty from './handleEmpty';




const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function Allconsultations() {
    
    let [loading, setLoading] = useState(false);
    const [DATA, setData] =  useState([])
    const [patientEmail, setPatientEmail] =  useState('')
  /*   setLoading(true) ; 
    setTimeout(()=>{
      setLoading(false)
    } , 2800) */


    const getConsultations = ()=>{
    
      fetch(`${globalConst.hostUrl}/api/getconsultations`, {
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
           setData(data.consultation);
          
         })

  }


  return (
    <ScrollView  
    keyboardShouldPersistTaps={'never'}
    automaticallyAdjustKeyboardInsets={true} 
      keyboardDismissMode={'on-drag'} 
    >
      <View  style={styles.container}>

      <Image style={styles.userLog} source={require('../Image/medical-history.png')}  />
        <TextInput onChangeText={(text)=>{ setPatientEmail(text)}} placeholder="Entrez l'email du patient" style={styles.textinputone} />

        <TouchableOpacity style={styles.menu} 
          onPress={() => {
                getConsultations();
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
        
                <FlatList
               
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    horizontal={true}
                    renderItem={({item}) => <Consultations consultations={item} />}
                    keyExtractor={item => item.id_consultation}
                    key={item => item.id_consultation}
                    ListEmptyComponent={handleEmpty}
                />  
         

        }
      </View>     
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  userLog:{
    width:width*0.17, 
    height:height*0.15,
},
  container:{
    display:'flex', 
    alignItems:'center', 
    width:width,
    marginTop:width*0.06,
    height:height,
    flexDirection:'column', 
    backgroundColor:'white'
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