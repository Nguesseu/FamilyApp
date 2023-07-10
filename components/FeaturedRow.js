import { View, Text, ScrollView} from 'react-native'
import React, { useState } from 'react'
import TaskCard from './TaskCard';

import image1 from "../assets/parent.jpg";
import image2 from "../assets/essen.jpg";
import image3 from "../assets/profil_native.png";


const FeaturedRow = ({id , title, description}) => {

  const [taskList, setTaskList] = useState([
    {
      id: 12,
      imgUrl: image1,
      title: 'Elternabend',
      priority: 'done',
      message: '3'
    },
    {
      id: 123,
      imgUrl: image2,
      title: 'Abendessen',
      priority: 'done',
      message: '3'
    },
    {
      id: 1234,
      imgUrl: image3,
      title: 'Film',
      priority: 'done',
      message: '3'
    }
    
  ]);


  const handleOnDelete = (givenId) => {
    const updatedTaskList = taskList.filter(item => item.id !== givenId);
    setTaskList(updatedTaskList);
  }


  return (
    <View>
        <View className ="mt-4 flex-row items-center justify-between px-4">
          <Text className ="font-bold text-lg text-purple-950  ">{title}</Text>
        </View> 
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        

        <ScrollView
         horizontal
         contentContainerStyle = {{
            paddingHorizontal:15,
         }}
         showsHorizontalScrollIndicator = {false}
         className= "pt-4"
          >
            {
              taskList.map((task, index) => (
                <TaskCard key={index} id={task.id}
                  imgUrl={task.imgUrl}
                  title={task.title}
                  priority={task.priority}
                  message={task.message}
                  onDelete={handleOnDelete}
                />
              ))
            }
            {/* TaskCards*/}
        </ScrollView>
    </View>
  );
};

export default FeaturedRow;