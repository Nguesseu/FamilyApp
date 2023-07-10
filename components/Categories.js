import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
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
        <CategoryCard imgUrl={require('../assets/wedding.jpg')} title="Hochzeit" />
        <CategoryCard imgUrl={require('../assets/hbd.jpg')} title="Party" />
        <CategoryCard imgUrl={require('../assets/seychelles.jpg')} title="Reise" />
        
      </View>
    </ScrollView>
  );
};

export default Categories;
