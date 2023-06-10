import { View, Text , TextInput , SafeAreaView , TouchableOpacity  , StyleSheet , FlatList , Dimensions , Image  , ScrollView} from 'react-native'
import React , {useState , useEffect} from 'react'
import SpinnerTwo from './Spinnertwo';
import Consultations from './Consultations';
import { globalConst } from './GlobalConst';
import handleEmpty from './handleEmpty';
import SelectDropdown from 'react-native-select-dropdown';


const UserRole = ["Médécin", "Patient" , 'Infirmier',];

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function Allconsultations() {
    
    let [loading, setLoading] = useState(false);
    const [DATA, setData] =  useState([])
    const [patientEmail, setPatientEmail] =  useState(''); 
    const [name , setName] = useState(''); 
    const [password , setPassword] = useState(''); 
    const [typeofuser , setTypeOfUser] = useState('');
    const [error , setError ] = useState('')
    /*   setLoading(true) ; 
    setTimeout(()=>{
      setLoading(false)
    } , 2800) */


    const insertUsers = ()=>{
    
      fetch(`${globalConst.hostUrl}/api/registeruser`, {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
         body:JSON.stringify({
            email:patientEmail, 
            name:name, 
            password:password, 
            typeofuser:typeofuser
          })
         
        })
        .then(response => response.json())
        .then((data) =>{
            
           console.log(data)
           if(data.statut === 'OK'){
            setError('Done')
           }
          // setData(data.consultation);
          
         })

  }


  return (
 
      <View  style={styles.container}>

                  <TextInput onChangeText={(text)=>{ setPatientEmail(text)}} placeholder="Entrez l'email de l'utilisateur" style={styles.textinputone} />

                  <TextInput onChangeText={(text)=>{ setName(text)}} placeholder="Entrez le nom de l'utilisateur" style={styles.textinputone} />

                  <TextInput onChangeText={(text)=>{ setPassword(text)}} placeholder="Entrez le mot de passe de l'utilisateur" style={styles.textinputone} />

                 
                      <SelectDropdown
                            buttonStyle={{
                            width:width*0.8,
                            borderRadius:10,
                            height:height*0.05,
                            borderWidth:1,
                            borderColor:'rgb(251,127,126)', 
                            }}
                            defaultButtonText='Sélectionnez une option'
                            data={UserRole}
                            onSelect={(selectedItem, index) => {
                              setTypeOfUser(selectedItem)
                                
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                      />
                  

                    <TouchableOpacity style={styles.menu} 
                      onPress={() => {
                            insertUsers();
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

               
               <Text style={{ color:'red', fontSize:17,fontWeight:'bold'}}>  
                 {error }
               </Text>
     
      </View>     
  
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
      marginTop:width*0.1,
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