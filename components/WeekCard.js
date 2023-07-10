import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const WeekCard = ({ date }) => {

    const navigation = useNavigation();
    let cardColor = '#4F7766';
    let textColor = '#350540'
    if (date === 'Mi 21'){
        cardColor ='#350540';
        textColor ='#FB8600'
    }
    else if (date === 'Mercredi 26 juin'){
        cardColor ='green';
        textColor ='white'
    }
  return (
    <TouchableOpacity  onPress={() => navigation.navigate("Calendrier")}  style={{ marginRight: 10 }}>
      <View
        style={{
          height: 89,
          width: 57,
          borderRadius: 10,
          backgroundColor: cardColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ textAlign: 'center', color: textColor }}>{date.split(' ')[0]}</Text>
        <Text style={{ textAlign: 'center', color: textColor, marginVertical: 15}}>{date.split(' ')[1]}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

export default WeekCard;
