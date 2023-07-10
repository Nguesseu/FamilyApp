import { View, Text , Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialIcons } from 'react-native-vector-icons';
import {  GestureHandlerRootView } from 'react-native-gesture-handler';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import FeaturedRow2 from '../components/FeaturedRow2';




const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown:false,
        });

    },[])
  return (
    <SafeAreaView className= "bg-white pt-5">
     
        {/*Header*/}   
        <View className ="flex-row pb-3 items-center mx-4 space-x-2  ">
          <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
          <Image 
               source = {require ('../assets/profil_native.png')}
               className = " h-8 w-8  bg-gray-300  rounded-full "
            /> 
          </TouchableOpacity>
             
          <View className ="flex-1">
            <Text className ="font-bold text-gray-400" >
                Hallo Eole!
                </Text>
            <Text className ="font-bold  text-xl text-purple-950">
                Hier sind deine Events
                <Feather name="chevron-down" size={20} color="#00CCBB"/>
            </Text>
          </View>
        </View>
        {/*'search*/}

        {/* Body*/} 
        <ScrollView className =" bg-gray-100" 
          contentContainerStyle = {{
            paddingBottom:100,
          }}
          > 
            {/*Category*/}
            <Categories />
            {/*Features Rows*/}
            <FeaturedRow
            id ="12"
            title = "Aufgaben der Wochen"
            description ="Du hast noch Aufträge"
            
            />
            {/*Features Rows*/}
            <FeaturedRow2
            id ="123"
            title = "Ab nächste Woche"
            description ="Fängt in 2 Tagen an"
            />
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen