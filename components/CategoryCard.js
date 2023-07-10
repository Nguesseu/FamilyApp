import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({ imgUrl, title }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Event" , {
    
      imgUrl,
      
  })} className =" relative mr-1.5">
      <Image
        source={imgUrl}
        style={{ height: 70, width: 70, borderRadius: 10 }}
      />
      <Text className = 'absolute bottom-1 left-1 text-white font-bold '>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
