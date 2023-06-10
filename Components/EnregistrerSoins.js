import { View, Text , StyleSheet ,TextInput ,Dimensions ,TouchableOpacity , Alert , Image , ScrollView} from 'react-native'
import React , {useState , useEffect} from 'react'
import { globalConst } from './GlobalConst';


const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function EnregistrerSoins({route , navigation}) {

    const [idTicket , setIdTicket] = useState(''); 
    const [doctorOrdonance , setOrdonance] = useState(''); 
    const [error , setError] = useState('');

    const userCredential = {
        email:route.params.docEmail, 
        name: route.params.name
    }

    const handleTicket = (text)=>{
        setIdTicket(text)
    }

    const handleOrdonance = (text)=>{
        setOrdonance(text)
    }

    

    const createAlertAgree = () =>
    Alert.alert(
        
        'Done', 
        `Les soins pour la consultation numero : ${idTicket} a bien été enregistrée. Vous serez redirigé à la page Home `,
        
        [
            {
                text: 'OK',
                onPress: () => {  
                navigation.navigate('Médécin' , {
                    userCredential:userCredential
                });

            },
            },
        ]
    );



    const sendSoins = ()=>{
        
        fetch(`${globalConst.hostUrl}/api/dosoin`, {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id_consultation:idTicket,
                observation_postconsultation:doctorOrdonance,
            }) 
           
        })
          .then(response => response.json())
          .then((data) =>{

            console.log(data)
           
            if(data.statut === 'OK'){
                createAlertAgree();
             } else if(data.statut == undefined) {
                setError('Enregistrement impossible veuillez rééssayer');
             } else {
                setError('Enregistrement impossible veuillez rééssayer');
             }
            
        })
    }

  return (
    <ScrollView 
        keyboardShouldPersistTaps={'never'}
        automaticallyAdjustKeyboardInsets={true} 
    >
        
        <View style={Styles.container}>
            <Image style={Styles.userLog} source={require('../Image/healthcare.png')}  />
            <Text style={Styles.title2}>
                Veuillez coller le numero de la consultation corespondante 
            </Text>

            <TextInput onChangeText={handleTicket} placeholder="Numero de ticket de la consultation" style={Styles.textinputone}/>
            <TextInput onChangeText={handleOrdonance}  placeholder="Ordonance" multiline={true} style={Styles.textinputtwo}/>

            <Text  style={{fontSize:width*0.04 ,marginTop:width*0.03, color:'red', fontWeight:'bold'}}>{error} </Text>

            <TouchableOpacity onPress={sendSoins} style={Styles.insert_button } 
                
            >  
                <Text  style={{fontSize:width*0.04 , fontWeight:'bold'}}>Valider l'Ordonance </Text>
            </TouchableOpacity>
     </View>

  </ScrollView>
  )
}


const Styles = StyleSheet.create({
    userLog:{
        width:width*0.17, 
        height:height*0.15,
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
        height:height*0.06,
        width:width*0.95,
        marginBottom:width*0.07, 
        color:'black'
    },
    textinputtwo:{
        borderColor:'rgba(255, 116, 105, 0.7)',
        borderWidth:width*0.005,
        borderRadius:width*0.032,
        width:width*0.95, 
        height:height*0.15,
    },
    container:{
        display:'flex', 
        alignItems:'center', 
        width:width,
        height:height,
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