import { View, Text, TouchableOpacity, Image, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react'
import { useNavigation } from '@react-navigation/native';


const TaskCard = ({id, imgUrl,title,priority, message, onDelete}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={() =>{
        navigation.navigate("Aufgabe", {
            id,
            imgUrl,
            title,
            priority,
            message,
        });
        }}
        style= {{borderRadius:10 , backgroundColor:"#DCD8C8"}} className ="mr-2 shadow">
      <Image
        source={imgUrl}
        style={{ height: 165, width: 266, borderRadius: 10 }}
      />
      <View className = 'px-3 pb-4'>
        <Text className ='font-bold text-lg pt-2 text-orange-600'>{title}</Text>

        <View className ="flex-row items-center space-x-1">
            <Icon name="check" size={20} opacity={0.5} color="green" />
            <Text>
                <Text>
                    <Text className ="text-xs text-gray-500 ">{priority}</Text>
                </Text>
            </Text>
        </View>
        <View className ="flex-row items-center space-x-1">
            <Icon name="envelope" size={20} opacity={10} color="black" />
            <Text>
                <Text className ="text-xs text-gray-500 ">{message}</Text>
            </Text>
        </View>
      </View> 

      <Button color="red" title='Delete' onPress={() => onDelete(id)} />
    </TouchableOpacity>
  );
};

export default TaskCard