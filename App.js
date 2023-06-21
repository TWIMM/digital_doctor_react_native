import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import {Platform} from 'react-native';
import Homepage from './Components/Homepage'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Patitentpage from './Components/Patitentpage';
import Medecinpage from './Components/Medecinpage';
import Infirmierpage from './Components/Infirmierepage';
import Adminpanel from './Components/Adminpanel'; 
import Menu from './Components/Menu';
import BilanNavigation from './Components/BilanNavigation';
import { Ionicons } from '@expo/vector-icons';
import EnregistrerSoins from './Components/EnregistrerSoins';
import DifferentPart from './Components/DifferentPart';
import Allconsultations from './Components/Allconsultations';
import Registremedicale from './Components/Registremedicale';
import Getsoins from './Components/Getsoins';
import Menupatient from './Components/Menupatient';
import { Entypo } from '@expo/vector-icons';
import Monregistremedical from './Components/Monregistremedical'
import Resultatduneanalyse from './Components/Resultatduneanalyse'
import Paiement from './Components/Paiement';
import Delete from './Components/Delete';
import Menuinfirmier from './Components/Menuinfirmiere';
import Constantes from './Components/Constantes';


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
        <Stack.Navigator> 

          <Stack.Screen
              name='Homepage'
              component={Homepage}
              options={
              {
              backgroundColor:'rgba(255, 116, 105, 0.75)',
              headerShown:false,
              presentation:'',
              }
            }
           />

          <Stack.Screen
              name='Régistre des consultations'
              component={Allconsultations}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />

            <Stack.Screen
              name='Mon analyse'
              component={Resultatduneanalyse}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />

             <Stack.Screen
              name='Mon régistre médical'
              component={Monregistremedical}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />

          <Stack.Screen
              name='Soins administrés'
              component={Getsoins}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />

           <Stack.Screen
              name='Régistre médical du patient'
              component={Registremedicale}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />

            <Stack.Screen
              name='Facturation'
              component={Paiement}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />
           
            <Stack.Screen
              name='Constituant du dossier médical'
              component={DifferentPart}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />

            <Stack.Screen
              name='Enregistrer des soins'
              component={EnregistrerSoins}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />

           <Stack.Screen
              name="Bilan d'une consultation"
              component={BilanNavigation}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />
           <Stack.Screen
              name="Constantes d'une consultation"
              component={Constantes}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />
            <Stack.Screen
              name='Menu'
              component={Menu}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
              }
           />

            <Stack.Screen
              name='Menu infirmier'
              component={Menuinfirmier}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
              }
           />

            <Stack.Screen
              name='Patient dashboard'
              component={Menupatient}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
              }
           />

           
            <Stack.Screen
              name="Delete user"
              component={Delete}
              options={
                {
                  headerStyle: {
                    backgroundColor:'rgba(255, 116, 105, 0.75)',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  headerShadowVisible: false, // applied here
                  headerShown:true,
                }
            }
           />
          
          <Stack.Screen
              name='Patient'
              component={Patitentpage}
              options={({ navigation, route }) => ({

                headerStyle: {
                          backgroundColor:'rgba(255, 116, 105, 0.75)',
                          elevation: 0,
                          shadowOpacity: 0,
                          borderBottomWidth: 0,
               },
               headerShadowVisible: false, // applied here
               headerShown:true,
             
                  headerRight: () => (
                    <TouchableOpacity style={styles.seemore} 
                          onPress={ ()=> {
                            navigation.navigate('Patient dashboard' , {
                               patientEmail:route.params.userCredential.email
                          }); 
                         // console.log(route.params.userCredential.email)
                        }}
                     >  
                       <Entypo name="menu" size={43} color="black" />
                  </TouchableOpacity>
                ),
            })}
          />
          <Stack.Screen
              name='Autres'
              component={Adminpanel}
              options={({ navigation, route }) => ({

                headerStyle: {
                          backgroundColor:'rgba(255, 116, 105, 0.75)',
                          elevation: 0,
                          shadowOpacity: 0,
                          borderBottomWidth: 0,
               },
               headerShadowVisible: false, // applied here
               headerShown:true,
             
                  headerRight: () => (
                    <TouchableOpacity style={styles.seemore} 
                          onPress={ ()=> {
                            navigation.navigate('Delete user' , {
                               patientEmail:route.params.userCredential.email
                          }); 
                         // console.log(route.params.userCredential.email)
                        }}
                     >  
                      <Ionicons name="add" size={24} color="black" />
                  </TouchableOpacity>
                ),
            })}
          />

           <Stack.Screen
              name='Médécin'
              component={Medecinpage}
              options={({ navigation, route }) => ({

                headerStyle: {
                          backgroundColor:'rgba(255, 116, 105, 0.75)',
                          elevation: 0,
                          shadowOpacity: 0,
                          borderBottomWidth: 0,
               },
               headerShadowVisible: false, // applied here
               headerShown:true,
             
                  headerRight: () => (
                    <TouchableOpacity style={styles.seemore} 
                          onPress={ ()=> {
                            navigation.navigate('Menu' , {
                              docEmail:route.params.userCredential.email,
                            docName:route.params.userCredential.name,
                          }); 
                         // console.log(route.params.userCredential.email)
                        }}
                     >  
                       <Entypo name="menu" size={43} color="black" />
                  </TouchableOpacity>
                ),
            })}
          />


           <Stack.Screen
              name='Infirmier'
              component={Infirmierpage}
              options={({ navigation, route }) => ({

                headerStyle: {
                          backgroundColor:'rgba(255, 116, 105, 0.75)',
                          elevation: 0,
                          shadowOpacity: 0,
                          borderBottomWidth: 0,
               },
               headerShadowVisible: false, // applied here
               headerShown:true,
             
                  headerRight: () => (
                    <TouchableOpacity style={styles.seemore} 
                          onPress={ ()=> {
                            navigation.navigate('Menu infirmier' , {
                              docEmail:route.params.userCredential.email,
                            docName:route.params.userCredential.name,
                          }); 
                         // console.log(route.params.userCredential.email)
                        }}
                     >  
                       <Entypo name="menu" size={43} color="black" />
                  </TouchableOpacity>
                ),
            })}
          />




        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
       ios: {
        backgroundColor: 'grey',
      },
       android: {
        backgroundColor: 'green',
      },
      
    })
  },
});
