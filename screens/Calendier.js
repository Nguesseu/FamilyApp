import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import TaskCard from '../components/TaskCard';

const Calendier = ({id , title, description}) => {
  
  
  return (
    <View>
      <Calendar
        style={{
          borderColor: 'grau',
          height: 350
        }}
        markedDates={{
          [moment().format('YYYY-MM-DD')]: { selected: true, disableTouchEvent: true,  selectedColor: '#FB8600' },
          '2023-07-15': { selected: true, selectedColor: '#37536D' },
          '2023-07-18': { selected: true, selectedColor: '#4F7766' },
          '2023-07-19': { selected: true, selectedColor: '#971717' },
          '2023-07-26': { selected: true, selectedColor: '#A1EBCD' },
          '2023-08-01': { marked: true, dotColor: 'green' },
          '2023-08-03': { marked: true, dotColor: '#971717' },
          '2023-08-04': { selected: true, selectedColor: '#350540' }
        }}
        onDayPress={(day) => {
          console.log('Selected day', day);
        }}
      />

        <View>
            <View className ="mt-4 flex-row items-center justify-between px-4">
                <Text className ="font-bold text-lg text-purple-950  ">Öffene Aufgaben</Text>
            </View> 
            <Text className="text-xs text-gray-500 px-4">noch 2 Tagen</Text>
            
            <ScrollView
                horizontal
                contentContainerStyle = {{
                    paddingHorizontal:15,
                }}
                showsHorizontalScrollIndicator = {false}
                className= "pt-4"
                >
                {/* TaskCards*/}
                <TaskCard
                id ={12}
                imgUrl = {require('../assets/putzen.jpg')}
                title ="Putzen"
                priority = "offen"
                message = "0"
                />
                <TaskCard
                id ={123}
                imgUrl = {require('../assets/hausaufgaben.jpg')}
                title ="Hausaufgaben"
                priority = "offen"
                message = "0"
                />
                <TaskCard
                id ={1234}
                imgUrl = {require('../assets/einkauf.jpg')}
                title ="Einkauf"
                priority = "offen"
                message = "1"
                />
            </ScrollView>
        </View>

    </View>
  );
};

export default Calendier;
