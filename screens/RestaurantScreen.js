import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../components/Categories';
import Week from '../components/Week';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {
        params:{
            id,
            imgUrl,
            title,
            priority,
            message,
        }, 
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View style={{ position: 'relative' }}>
                <Image
                    source={imgUrl}
                    className = "w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity 
                onPress={navigation.goBack}
                style={{ position: 'absolute', top: 40, left: 15, padding: 3, borderRadius: 10, backgroundColor:'#FFFFFF' }}>
                    <Icon name="arrow-left" size={25} color="#350540" />
                </TouchableOpacity>
            </View>
            
            <View style={{
                backgroundColor:'#DCD8C8'
                }}>
                <View className ="px-4 pt-4">
                    <Text className="text-3xl font-bold ">{title}</Text>
                </View>
                <View className ="flex-row space-x-2 my-1">

                </View>
            </View>
            <View>
                <Week/>
            </View>
            
            <View>
                
                <View style={{ marginVertical: 8 }}>
                    <ScrollView>
                        <View style={{ padding: 16 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8  }}>Name der Aufgabe</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', padding: 8 , borderRadius: 10 }}
                                placeholder={title}
                                
                                
                            />
                        </View>
                        <View style={{ padding: 16 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Wann</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', padding: 8, borderRadius: 10 }}
                                placeholder="Datum und die Uhrzeit..."
                                
                            />
                        </View>
                        <View style={{ padding: 16 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Wer</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', padding: 8 , borderRadius: 10}}
                                placeholder="Du, John, Marie"
                                
                                
                            />
                            
                        </View>
                        <View style={{ padding: 16 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Information</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', padding: 8 , borderRadius: 10 }}
                                placeholder="Geben Sie zusätzliche Informationen ein..."
                                multiline
                                
                            />
                            
                        </View>
                        <View style={{ padding: 16 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Anzahl Der Nachrichten</Text>
                            <Text
                                style={{ borderWidth: 1, borderColor: 'gray', padding: 8 , borderRadius: 10 }}>
                                    3
                            </Text>
                                
                            
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
    
};

export default RestaurantScreen;
