import { View, Text , Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import { React, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../components/Categories';

const EventScreen = () => {

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown:false,
        });

    },[])

    const navigation = useNavigation();
    const {
        params:{
            imgUrl,
        }, 
    } = useRoute();

  return (
    <SafeAreaView >
        <View >
            <Image className = "" style={{height:636}}  
            source={imgUrl}
            />
            
            <TouchableOpacity className = "absolute top-4 right-4 ">
                <Image  className = " rounded-full  h-8 w-8  "
                        source = {require ('../assets/profil_native.png')}

                        />  
            </TouchableOpacity>

            <TouchableOpacity className = "absolute"
                        onPress={navigation.goBack}
                        style={{  top: 16, left: 16, padding: 3, borderRadius: 10, backgroundColor:'#FFFFFF' }}>
                            <Icon name="arrow-left" size={25} color="#350540" />
            </TouchableOpacity>

            <View className="absolute " 
                style={{backgroundColor:'#4F7766' , height:299 , width:360 , top: 310 ,
                 left:16 , borderRadius:10 , opacity:.5}}
            >
            </View>

            <View className = 'absolute  left-1 ' style={{ top:320 , left:30}}>
                <Text className='text-white font-bold'>
                    Ihre kommendes Event!
                </Text>
            </View>

            
            <TouchableOpacity onPress={() => navigation.navigate("Calendrier")} className="absolute h-16 w-16 right-1">
                <View className="h-16 w-16 right-6 " 
                    style={{backgroundColor:'#FB8600' , top:530 , borderRadius:10}}>
                        <Text className='text-white font-bold' style ={{ textAlign: 'center' , top:8}}>
                            Ihre 
                            Kalendar
                        </Text>
                </View>

            </TouchableOpacity>
            
        </View>
         {/*Category*/}
         <Categories  />
          
      
    </SafeAreaView>
  )
}

export default EventScreen