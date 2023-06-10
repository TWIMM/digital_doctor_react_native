import { SafeAreaView, TouchableOpacity,Dimensions ,  ScrollView, FlatList, StatusBar,View, StyleSheet,Text , Image , Animated} from 'react-native'
import React , {useState,useEffect , useRef} from 'react'
import Rendezvousmodele from './Emploidetemps'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Rdvconfirmed from './RdvConfirmed';
import Spinner from './Spinner';
import { globalConst } from './GlobalConst';
import handleEmpty from './handleEmpty';

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default function Medecinpage({ route, navigation }) {


const [DATA, setData] =  useState([])
let [loading, setLoading] = useState(true);
const [DATA2, setData2] =  useState([])
const [Lundi, setLun] =  useState()
const [Mardi, setMar] =  useState()
const [Mercre, setMercre] =  useState()
const [Jeudi, setJeu] =  useState()
const [Vendredi, setVendre] =  useState()
const [Samedi, setSamedi] =  useState()
const [Dimanche, setDim] =  useState()
const scrollX2 = useRef(new Animated.Value(0)).current
const ITEM_SIZE =width*0.62



  const retrieveAppointement = () => {
    fetch(`${globalConst.hostUrl}/api/emploidetemps`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:route.params.userCredential.email, 
      })
     
    })
    .then(response => response.json())
    .then((data) =>{
        if(data.rendezVous[0] !== undefined){
        //  console.log(data.rendezVous);
          setData(data.rendezVous);
        } else {
          console.log('Aucune programmation pour vous cette semaine');
        }
    
     })
  }


  const retrieveAppointement2 = () => {
    fetch(`${globalConst.hostUrl}/api/rdvconfirmed`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:route.params.userCredential.email, 
      })
     
    })
    .then(response => response.json())
    .then((data) =>{
     //  console.log(data.Lundi)
       setLun(data.Lundi)
       setMar(data.Mardi)
       setMercre(data.Mercredi)
       setJeu(data.Jeudi)
       setVendre(data.Vendredi)
       setSamedi(data.Samedi)
       setDim(data.Dimanche)
     })
  }


  const [UserName , setUserName] = useState(''); 
  
  useEffect(()=>{
    // console.log(route.params.userCredential.name);
     setUserName(route.params.userCredential.name)
     retrieveAppointement()
     retrieveAppointement2()

     setLoading(true) ; 
     setTimeout(()=>{
       setLoading(false)
     } , 2000)

  }, [])

  

  return (
    <View style={styles.container}
      
    >
          
        {

          loading?
          <Spinner />
          :
     <View >

          {/*   <TouchableOpacity style={styles.seemore} 
              onPress={ ()=> {
                navigation.navigate('Menu' , {
                  docEmail:route.params.userCredential.email,
                  docName:route.params.userCredential.name,
              })
            }}
            >  
                <Entypo name="menu" size={43} color="black" />
           </TouchableOpacity> */}

            <View style={styles.contain_hello}>
            <Image style={styles.userLog} source={require('../Image/doctor.png')}/>
            <Text style={styles.title}>Bienvenu Docteur , {UserName}</Text> 

        
            </View>
          
            <Text style={{fontSize:14 , fontWeight:'bold'}}>Programmation de la semaine  </Text> 

            <View style={styles.contain_flatlist}>


            <Animated.FlatList
                    onScroll={  
                      Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX2}}} ],
                        {useNativeDriver:true}
                      )
                    }
                    snapToInterval={ITEM_SIZE}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    decelerationRate={0} 
                    bounces={false}
                    renderItem={({item , index}) => 
                    {  
                      

                      const inputRange = [
                        (index -1 )* ITEM_SIZE, 
                        (index )*ITEM_SIZE, 
                        (index  +1) * ITEM_SIZE
                      ]; 

                      const scale2 = scrollX2.interpolate({
                        inputRange, 
                        outputRange:[0.7, 0.9,0.9]
                      })

                      const opacity2 = scrollX2.interpolate({
                        inputRange, 
                        outputRange:[0.4, 0.9,0.9]
                      })
                    return(
                      <Animated.View
                        style={
                          {
                            opacity:opacity2,
                            transform:[{scale:scale2}]
                          }
                        }
                      >
                        <Rendezvousmodele rendezVous={item} />
                      </Animated.View>
                    )
                    }
                   }
                    
                    />
            </View>

            <Text style={{fontSize:14 , marginTop:5, fontWeight:'bold'}}>Rendez-vous de la semaine  </Text> 


            <ScrollView centerContent={true}  style={{height:height*0.6
            }}>

                    <View style={styles.contain_flatlist}>
                          <Text style={styles.title}> Lundi </Text> 
                          <FlatList
                          showsVerticalScrollIndicator={false}
                          data={Lundi}
                          renderItem={({item}) => <Rdvconfirmed retrieveAppointement2={retrieveAppointement2} rendezVous={item} />}
                          keyExtractor={item => item.id}
                          horizontal={true}
                          ListEmptyComponent={handleEmpty}
                         />
                    </View>

                    <View style={styles.contain_flatlist}>
                          <Text style={styles.title}> Mardi </Text> 
                          <FlatList
                          showsVerticalScrollIndicator={false}
                          data={Mardi}
                          renderItem={({item}) => <Rdvconfirmed retrieveAppointement2={retrieveAppointement2} rendezVous={item} />}
                          keyExtractor={item => item.id}
                          horizontal={true}
                         />
                    </View>

                    <View style={styles.contain_flatlist}>
                          <Text  style={styles.title}> Mercredi </Text> 
                          <FlatList
                          showsVerticalScrollIndicator={false}
                          data={Mercre}
                          renderItem={({item}) => <Rdvconfirmed retrieveAppointement2={retrieveAppointement2} rendezVous={item} />}
                          keyExtractor={item => item.id}
                          horizontal={true}
                          ListEmptyComponent={handleEmpty}
                         />
                    </View>

                    <View style={styles.contain_flatlist}>
                          <Text  style={styles.title}> Jeudi </Text> 
                          <FlatList
                          showsVerticalScrollIndicator={false}
                          data={Jeudi}
                          renderItem={({item}) => <Rdvconfirmed retrieveAppointement2={retrieveAppointement2} rendezVous={item} />}
                          keyExtractor={item => item.id}
                          horizontal={true}
                          ListEmptyComponent={handleEmpty}
                         />
                    </View>

                    <View style={styles.contain_flatlist}>
                          <Text  style={styles.title}> Vendredi </Text> 
                          <FlatList
                          showsVerticalScrollIndicator={false}
                          data={Vendredi}
                          renderItem={({item}) => <Rdvconfirmed retrieveAppointement2={retrieveAppointement2} rendezVous={item} />}
                          keyExtractor={item => item.id}
                          horizontal={true}
                          ListEmptyComponent={handleEmpty}
                         />
                    </View>

                    <View style={styles.contain_flatlist}>
                          <Text  style={styles.title}> Samedi </Text> 
                          <FlatList
                          showsVerticalScrollIndicator={false}
                          data={Samedi}
                          renderItem={({item}) => <Rdvconfirmed retrieveAppointement2={retrieveAppointement2} rendezVous={item} />}
                          keyExtractor={item => item.id}
                          horizontal={true}
                          ListEmptyComponent={handleEmpty}
                         />
                    </View>

                    <View style={styles.contain_flatlist}>
                          <Text  style={styles.title}> Dimanche </Text> 
                          <FlatList
                          showsVerticalScrollIndicator={false}
                          data={Dimanche}
                          renderItem={({item}) => <Rdvconfirmed retrieveAppointement2={retrieveAppointement2} rendezVous={item} />}
                          keyExtractor={item => item.id}
                          horizontal={true}
                          ListEmptyComponent={handleEmpty}
                         />
                    </View>

                    <View style={{height:height*0.2}}>
                        
                    </View>

            </ScrollView>


            </View>

   }
     
    </View>


  )
}

const styles = StyleSheet.create({
  contain_hello:{

    display:'flex',
    flexDirection:'column', 
    judtifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(255, 116, 105, 0.7)',
  },
  userLog:{
    width:width*0.25, 
    height:height*0.15,

  },

  title:{
    fontWeight:'bold', 
    fontSize:width*0.035,
    marginBottom:width*0.05,
  },
 
  contain_flatlist:{
    marginTop:width*0.06,
    
  },
  item: {
    display:'flex',
    flexDirection:'column', 
    judtifyContent:'center',
    alignItems:'center',
    borderRadius:width*0.03,
    backgroundColor: 'rgba(255, 116, 105, 0.7)',
    padding:10,
    height:height*0.2,
    width:width*0.7,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})