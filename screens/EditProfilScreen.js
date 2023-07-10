import { View, Text , Image, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditProfilScreen = () => {

    const navigation = useNavigation();
    const {} = useRoute();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown:false,
        });

    },[])

  return (
    <SafeAreaView>
        <View>

            

            <View style={{ backgroundColor: '#E58251', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image className = "absolute top-28 "
                style={{ borderRadius: 50, width: 100, height: 100 }}
                source={require('../assets/profil_native.png')}
                />
            </View>

            <TouchableOpacity className = "absolute"
                            onPress={navigation.goBack}
                            style={{  top: 16, left: 16, padding: 3, borderRadius: 10, backgroundColor:'#E58251'}}>
                                <Icon name="arrow-left" size={25} color="#350540" />
            </TouchableOpacity>

            <View className = "absolute " style={{justifyContent: 'center', alignItems: 'center' }}
                
                >
                <Text className='text-white font-bold ' style={{fontSize: 18 , top:210 , left:137}} >
                    @Kim Kapoel
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("ConfigProfil")}className = "absolute " 
                style = {{ backgroundColor:'#FFFFFF',
                height:30,
                width:80,
                top:250,
                left: 154,
                opacity:.5,
                borderRadius:10
             }}>
                <View >
                    <Text className='text-black font-bold ' style ={{ textAlign: 'center' , top:4 }}>
                        Edit Profile
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      
    </SafeAreaView>

  )
}

export default EditProfilScreen