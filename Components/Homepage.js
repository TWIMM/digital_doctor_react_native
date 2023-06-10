import 'react-native-gesture-handler';
import { StyleSheet,Image, Text,Dimensions, View, useWindowDimensions , TouchableOpacity } from 'react-native';
import Background from '../Image/background.jpeg'; 
import Animated , {useAnimatedSensor,useAnimatedStyle, SensorType, interpolate} from 'react-native-reanimated';
import StartButton from './StartButton';


export default function Acceuil() {
   //sensor to check mobile move
  const pi = Math.PI;
  const half_pi = pi/2;
  const IMAGE_OFFSET = 200;
  const {width, height} = useWindowDimensions()
  const sensor = useAnimatedSensor(SensorType.ROTATION )
  
  const imageStyle = useAnimatedStyle(()=>{
    const {yaw , pitch , roll } = sensor.sensor.value; 
   // console.log(height);
    return {
      top:interpolate(pitch, [-half_pi , half_pi] , [-IMAGE_OFFSET, 0]), 
      left:interpolate(roll, [-pi, pi], [-IMAGE_OFFSET , 0])
    }
  }); 
  
  return (
    <View style={styles.container}>
        <Animated.Image style={[
          {
          width:width + 2 * IMAGE_OFFSET, 
          height:height + 2 *IMAGE_OFFSET , 
          position:'absolute', 
         
          } 
          , imageStyle]} source={Background}/>

           < StartButton/>
      
    
        
    </View>
  );
}

const styles = StyleSheet.create({
  imageBack:{
    width:'100%', 
    height:'100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
