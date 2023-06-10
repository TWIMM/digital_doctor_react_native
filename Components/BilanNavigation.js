import { View, Text , TextInput ,Dimensions, StyleSheet ,TouchableOpacity , Alert , KeyboardAvoidingView , Platform , ScrollView , Image} from 'react-native';
import React , {useState , useEffect} from 'react';
import SpinnerTwo from './Spinnertwo';
import * as Clipboard from 'expo-clipboard';
import { globalConst } from './GlobalConst';


const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;

export default function BilanNavigation({route , navigation}) {
  
    let [loading, setLoading] = useState(true);
    const [ticketValue , setTicketValue] = useState('');
    const [patientEmail , setPatientEmail] = useState('');
    const [symptome , setSymptome] = useState('');
    const [observationConsult , setObservation] = useState('');
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [date , setDate ] = useState("");
    const [vaccin , setVaccin ] = useState("");
    const [Analyse , setAnalyse ] = useState("");
    const [diagnostique , setDiagnostique ] = useState("");
    

    const userCredential = {
        name: route.params.docName, 
        email: route.params.docEmail,
    }

 

    const createAlertAgree = () =>
    Alert.alert(
        
        'Done', 
        `La consultation ${ticketValue} a bien été enregistrée. Vous serez redirigé pour enregistrer les soins adaptés à cette consultation `,
        
        [
            {
                text: 'OK',
                onPress: () => {
                navigation.goBack()   
                navigation.navigate('Médécin' , {
                    userCredential:userCredential
                });

            },
            },
        ]
    );


    const craeteAlertDisagree = () =>
    Alert.alert(
        
        'Done', 
        `La consultation ${ticketValue} ne sera pas enregistrée veuillez réessayer`,
        
        [
            {
                text: 'OK',
                onPress: () => navigation.navigate('Médécin' , {
                    userCredential:userCredential
                }),
            },
        ]
    );




    const handleEmailPatient = (text)=>{
        setPatientEmail(text);
    }

    const handleDiagnostique = (text)=>{
        setDiagnostique(text);
    }


    const handleSymptome = (text)=>{
        setSymptome(text);
    }

    const handleVaccin = (text)=>{
        setVaccin(text);
    }


    const handleAnalyse = (text)=>{
        setAnalyse(text);
    }

    const handleObservation = (text)=>{
       setObservation(text);
    }






    const getATicket = ()=>{
    
        fetch(`${globalConst.hostUrl}/api/doticket`, {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
          /*   body:JSON.stringify({
              email:route.params.userCredential.email, 
            }) */
           
          })
          .then(response => response.json())
          .then((data) =>{
          
            setTicketValue(data.ticket)
          
            
           })

    }

    const AddConsultation =  ()=>{

        
        fetch(`${globalConst.hostUrl}/api/doConsultation`, {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id_consultation:ticketValue, 
                dr_email:route.params.docEmail,
                date:date,
                patient_email:patientEmail,
                observation_postconsultation:observationConsult,
                symptome:symptome,
                vaccin:vaccin, 
                analyse:Analyse, 
                diagnostique:diagnostique
            }) 
           
          })
          .then(response => response.json())
          .then((data) =>{
             if(data.statut === 'OK'){
                createAlertAgree();
             } else if(data.statut == undefined) {
                craeteAlertDisagree();
             } else {
                craeteAlertDisagree();
             }
            console.log(data)
           }) 

           Clipboard.setString(ticketValue);

    }

    useEffect(()=>{
      //  console.log(route.params.docEmail) ; 
        getATicket();

        
       

        setLoading(true) ; 
        setTimeout(()=>{
          setLoading(false)
        } , 2800)
    } , [])

    useEffect(()=>{
       
        setDate(`${day}/${month}/${year}`);
//console.log( route.params.docEmail)
    } , [day , month , year])

  return (


       <ScrollView
       keyboardShouldPersistTaps={'never'}
       automaticallyAdjustKeyboardInsets={true} 
       keyboardDismissMode={'on-drag'} 
       >

            <View  style={Styles.container}>
            <Image style={Styles.userLog} source={require('../Image/medical-history.png')}  />
            <Text selectable style={Styles.title}>Veuillez remplir les details de la consultation</Text>

            {
            loading?
            <SpinnerTwo />
            :
            <View   style={{  display:'flex', justifyContent:'center', alignItems:'center'}}>

            
                <View style={{ flexDirection:'row', display:'flex', justifyContent:'center', alignItems:'center'}} >
                <Text  style={Styles.title2}>Numero de ticket de la consultation :  </Text>
                <Text selectable  style={Styles.title2}>{ticketValue} </Text>
               
                </View>
                <Text  style={Styles.title2}> Le numéro de ticket sera primordial pour enregistrer des soins  </Text>
                
                <TextInput keyboardType='email-address' onChangeText={handleEmailPatient} placeholder="Email du patient" style={Styles.textinputone}/>
                <TextInput onChangeText={handleSymptome} placeholder="Symptomes décrit par le patient" multiline={true} style={Styles.textinputtwo}/>
                <TextInput onChangeText={handleObservation} placeholder="Observation générale" multiline={true} style={Styles.textinputtwo}/>
                <TextInput onChangeText={handleVaccin} placeholder="Statut vaccinal" multiline={true} style={Styles.textinputtwo}/>
                <TextInput onChangeText={handleAnalyse} placeholder="Analyse complémentaires" multiline={true} style={Styles.textinputtwo}/>
                <TextInput onChangeText={handleDiagnostique} placeholder="Classification de la maladie repérée et diagnostique" multiline={true} style={Styles.textinputtwo}/>


                <View   style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' , marginTop:width*0.05}}>


                    <TextInput style={Styles.textinputfour} keyboardType='numeric' onChangeText={(text)=>{setDay(text)}} placeholder='Jour' maxLength={2} />
                    <TextInput style={Styles.textinputfour} keyboardType='numeric'  onChangeText={(text)=>{setMonth(text)}} placeholder='Mois' maxLength={2}/>
                    <TextInput style={Styles.textinputfour} keyboardType='numeric'  onChangeText={(text)=>{setYear(text)}} placeholder="Année" maxLength={4} />    
    
               </View>

            <TouchableOpacity style={Styles.insert_button } 
                onPress={AddConsultation}
            >  
                <Text  style={{fontSize:width*0.04 , fontWeight:'bold'}}>Valider les détails de la consultation </Text>
            </TouchableOpacity>

         

            <View  style={{height: 30 }}> 

            
            </View>

            </View>
            }
            </View>
                    
           
       </ScrollView>

       
  
  )
}

const Styles = StyleSheet.create({

    textinputfour:{
        borderColor:'rgba(255, 116, 105, 0.7)',
        borderWidth:width*0.005,
        borderRadius:width*0.032,
        height:height*0.06,
        width:width*0.2,
        marginBottom:width*0.07, 
        color:'black', 
        marginHorizontal:20
    },

    insert_button:{
        display:'flex', 
        justifyContent:'center',
        alignItems:'center', 
        width:width*0.95,
        marginTop:width*0.02,
        flexDirection:'row',
        height:height*0.08,
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
    userLog:{
        width:width*0.17, 
        height:height*0.15,
    },
    dateinput:{
        borderColor:'rgba(255, 116, 105, 0.7)',
        borderWidth:width*0.005,
        borderRadius:width*0.032,
        width:width*0.2, 
        height:height*0.05,
        marginLeft:width*0.05
    },

    containerinp:{
      display:'flex', 
      justifyContent:'center',
      alignItems:'center', 
      marginTop:width*0.05
    },
    textinputtwo:{
        borderColor:'rgba(255, 116, 105, 0.7)',
        borderWidth:width*0.005,
        borderRadius:width*0.032,
        width:width*0.95, 
        height:height*0.1,
        marginBottom:width*0.07, 
    },
    container:{
        display:'flex', 
        alignItems:'center', 
        width:width,
        backgroundColor:'white',
        flexDirection:'column'
    }, 
    
    title:{
        fontWeight:'bold', 
        fontSize:width*0.04,
        marginBottom:width*0.05, 
        marginTop:width*0.02,  

    }, 
    title2:{
        fontWeight:'bold', 
        fontSize:width*0.03,
        marginBottom:width*0.02,  
    },
    title3:{
        fontWeight:'bold', 
        fontSize:width*0.03,
        marginBottom:width*0.02,  
    }

    
})