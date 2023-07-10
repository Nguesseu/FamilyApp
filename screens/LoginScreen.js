import { View, Text, Button, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const isDisabled = () => {
        return username === '' || password === '';
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20, backgroundColor: "#350540" }}>
           
            <View style={{ marginTop: 40 }}>
                <View style={{ padding: 32, backgroundColor: 'white', borderRadius: 10, marginBottom: 8 , padding:20 , opacity:.7}}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'  }}>Username</Text>
                    <TextInput 
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, borderRadius: 10 , backgroundColor:'white'}}
                        placeholder="john@doe.com"
                    />   
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 8, borderRadius: 10 , backgroundColor:'white'}}
                        placeholder="********"
                        secureTextEntry={true}
                    />  

                    <View style={{ marginTop: 20, padding: 3 }}>
                        <Button 
                            title='Login'
                            disabled={isDisabled()}
                            onPress={() => navigation.navigate("Home")} 
                            color="#FB8600"
                            style={{ borderRadius: 10, padding: 10  }}
                            titleStyle={{ fontSize: 20 }} 
                        />
                    </View>

                </View>
            
        </View>
        <View  style={{ flex: 1 , padding:16 , marginTop:70 , opacity:.5}}>
            <Image 
                source = {require ('../assets/familly.jpg') } 
                className = " h-80 w-80 rounded-full  " 
                />
        </View>
    </View>
    </SafeAreaView>
  )
}

export default LoginScreen;
