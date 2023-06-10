import { View, Text , SafeAreaView , TouchableOpacity, TextInput , StyleSheet , Dimensions , FlatList , Image} from 'react-native'
import React , {useState , useEffect} from 'react'
import SpinnerTwo from './Spinnertwo'
import ModelAnalyse from './Modelanalyse'
import { globalConst } from './GlobalConst';
const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;




export default function Resultatduneanalyse() {

    const [loading , setLoading] = useState(false)
    const [error , setError] = useState('Aucune analyse ')
    const [idAnalyse , setIdAnalyse] = useState();
    const [DATA, setData] =  useState([])


    
    const getAnalyse = ()=>{
        
        fetch(`${globalConst.hostUrl}/api/Getanalyse`, {
            method: 'POST',
            headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
            },
        body:JSON.stringify({
            id_analyse:idAnalyse, 
         })
        
        })
        .then(response => response.json())
        .then((data) =>{
            
            console.log(data)
            if(data.statut === 'Aucune analyse avec ce ticket'){
                setError(data.statut)
                setData([])
            } else if (data.statut === 'Ok'){
                setError(""); 
                setData(data.analyse);
            }
            
        })

    }

  return (
    <SafeAreaView  style={styles.container} >

       <Image style={styles.userLog} source={require('../Image/laboratory.png')}  />
      <TextInput onChangeText={(text)=>{ setIdAnalyse(text)}} placeholder="Entrez le numero de ticket de l'analyse" style={styles.textinputone} />

        <TouchableOpacity style={styles.menu} 
          onPress={() => {
                getAnalyse()
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
             <View >
                 
                 <Text style={{ color:'red', fontSize:13,fontWeight:'bold'}}>  
                     {error} 
                 </Text>

                <FlatList
               
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={({item}) => <ModelAnalyse analyse={item} />}
                    keyExtractor={item => item.id}

                />  


            </View>

        }
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

    container:{
      display:'flex', 
      alignItems:'center', 
      width:width,
      marginTop:width*0.06,
      height:height,
      flexDirection:'column',
      backgroundColor:'white',
  },

  userLog:{
    width:width*0.20, 
    height:height*0.20,
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