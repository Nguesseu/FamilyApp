import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import WeekCard from './WeekCard';

const Week = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flexDirection: 'row' }}>
        <WeekCard date="Mo 19" />
        <WeekCard date="Di 20" />
        <WeekCard date="Mi 21" />
        <WeekCard date="Do 22" />
        <WeekCard date="Fr 23" />
        <WeekCard date="Sa 24" />
        <WeekCard date="So 25" />
         
      </View>
    </ScrollView>
  );
};

export default Week;