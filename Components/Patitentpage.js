import { View, Text , SafeAreaView , StyleSheet , FlatList , Dimensions , TouchableOpacity , ScrollView , Image , Animated} from 'react-native'
import React , {useState , useEffect , useRef} from 'react'
import Programmationmodele from './Programmationmodele'
import { Entypo } from '@expo/vector-icons';
import Spinner from './Spinner';
import Patientrdvconfirmed from './Patientrdvconfirmed';
import { globalConst } from './GlobalConst';

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;



export default function Patitentpage({route, navigation}) {
 
  const [patientName , setpatientName] = useState('')
  const [DATA, setData] =  useState([])
  let [loading, setLoading] = useState(true);
  const [DATA2, setData2] =  useState([])
  const scrollX2 = useRef(new Animated.Value(0)).current

  const scrollX = useRef(new Animated.Value(0)).current
  const ITEM_SIZE =width*0.62
  const SPACER_ITEM_SIZE = (width - ITEM_SIZE)/2

  
  const getProgrammation = ()=>{
  
    fetch(`${globalConst.hostUrl}/api/getEmploiDuTempsDoctor`, {
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
    
        setData(data.programmation );
      
     })
  }

  const getRdvConfirmed = ()=>{
   
    fetch(`${globalConst.hostUrl}/api/getPatientRdv`, {
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
    
        setData2(data.rdv);
      
     })
  }


 
  

  useEffect(()=>{
     setpatientName(route.params.userCredential.name);
     getProgrammation();
     getRdvConfirmed()
     setLoading(true) ; 
     setTimeout(()=>{
       setLoading(false)
     } , 2000)


  } , []);
   
  

  useEffect(()=>{
    console.log(scrollX)


 } , [scrollX]);
  
  
  return (
    <ScrollView
    
    >

             
        {

          loading?
          <Spinner />

          :
        <View style={styles.container }  >

          <View style={styles.contain_hello}>
            <Image style={styles.userLog} source={require('../Image/patient.png')}/>
            <Text style={styles.title } > Bienvenu sur votre dashboard , {patientName} </Text>
        
        
            </View>

     
         <Text style={styles.title} > Prendre rendez-vous avec un médécin </Text>

                <View  style={{marginTop:width*0.05 , marginBottom:width*0.05}} >
                 
                <Animated.FlatList
                    onScroll={  
                      Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}} ],
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

                      const scale = scrollX.interpolate({
                        inputRange, 
                        outputRange:[0.7, 0.9,0.9]
                      })

                      const opacity = scrollX.interpolate({
                        inputRange, 
                        outputRange:[0.3, 0.9,0.3]
                      })
                    return(
                      <Animated.View
                        style={
                          {
                            opacity:opacity,
                            transform:[{scale:scale}]
                          }
                        }
                      >
                        <Programmationmodele programmation={item} patientEmail={route.params.userCredential.email } setMyData={setData2}/>
                      </Animated.View>
                    )
                    }
                   }
                    
                    />
                </View>

         <Text style={styles.title}> Voici la liste de vos rendez-vous cette semaine  </Text>
             
              <View >

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
                    data={DATA2}
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
                        outputRange:[0.8, 0.9,0.8]
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
                        <Patientrdvconfirmed rdv={item} />
                      </Animated.View>
                    )
                    }
                   }
                    
                    />
                 
               
             </View>
    
       </View>
        }

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  title:{
    fontWeight:'bold', 
    fontSize:width*0.035,
  },

  contain_hello:{
    padding:10,
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

})