import { View, Text  ,TouchableOpacity , Dimensions, TextInput , StyleSheet , ScrollView} from 'react-native';
import React , {useState , useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { globalConst } from './GlobalConst';



const UserRole = ["Médécin", "Patient" , 'Infirmier', 'Autres'];
const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;



export default function StartButton(  ) {


 // const navigation = useNavigation();
  const [Email , setEmail] = useState(''); 
  const [password , setPassword]= useState('');
  const [userType , setUserType]  = useState('');
  const [userCredential , setCredentials] = useState({})
  const [error, setErrors] = useState('');
  const [ErrorType , setErrorType] = useState('');
  const navigation = useNavigation();



  const seConnecter = ()=>{

    fetch(`${globalConst.hostUrl}/api/Login`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:Email, 
        password:password, 
        typeofuser:userType
      })
     
    })
    .then(response => response.json())
    .then((data) =>{
     // console.log(data)
      
      if(data.message !== undefined) {    
      if(data.message === 'Bad credential'){
          setErrors('Mauvais identifiants')
      } else{
        setErrors('Aucun champs vide ')
      }
      }  else{
      //  console.log(data.user.typeofuser);
        //setCredentials(data);
       // setErrors('')

        if(userType !== data.user.typeofuser){
          
            setErrors(`L'utilisateur n'est pas un ${userType}`)
        } else {
            setCredentials(data);
            console.log('Everything fine')
            setErrors('')
            navigation.navigate(`${userType}` ,  {
              userCredential: data.user,
            })
        }

      }
    
    
     })

  };


  const handleEmail = (text)=>{
    setEmail(text);
  }; 

  const handlePassword = (text)=>{
    setPassword(text);
  }
  


  return (

    <ScrollView style={{height:height , flex:1}}>
    <View style={styles.container}>

        <View style={styles.formulaire}>
            
                <View style={styles}>
                    < TextInput  onChangeText={handleEmail}  style={styles.textInput}/>
                    < TextInput  onChangeText={handlePassword}  style={styles.textInput}/>
                                  
                    <View>
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
                                setUserType(selectedItem)
                                
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
                    </View>
                
                </View>
                <Text style={{ color:'black', fontSize:14}}>  
                      {error}
                </Text>

                <View style={styles}>
                    <TouchableOpacity 
                        style={styles.button_home_two}
                        onPress={seConnecter}
                    >  
                        <Text style={{marginTop:'auto', marginBottom:'auto', color:'black', fontWeight:'bold', fontSize:16}}>  
                        Se connecter
                        </Text>
                    </TouchableOpacity>

                </View>
                
        </View>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    textInput:{
        width:width*0.8, 
        height:height*0.05,
        borderRadius:10,
        marginBottom:'10%',
        borderWidth:1,
        borderColor:'rgb(251,127,126)',
        backgroundColor:'white'
    },
  formulaire:{
    backgroundColor:'rgba(255,242,241 , 0.7)',
    width:width*0.9,
    height:height*0.6, 
    borderRadius:8,
    display:'flex', 
    paddingTop:20,
    alignItems:'center', 
    flexDirection:'column'
  },
  button_home_one: {
   borderRadius:5,
    alignItems:'center',
    height:height*0.05,
    backgroundColor:'#aaa',
    width:width*0.5,
    display:'flex',
    marginTop:19
  },
  button_home_two: {
    borderRadius:5,
     alignItems:'center',
     height:height*0.05,
     backgroundColor:'rgba(236,16,55 , 0.7)',
     width:width*0.5,
     display:'flex',
     marginTop:19
   },
  container: {
    flex: 1,
    width:width,
   height:height, 
   display:'flex', 
   justifyContent:'center',
   alignItems:'center'
},
})