import React from "react";
import { FlatList } from "react-native";
import StarDetail from "./StarDetail";

const StarList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <StarDetail album={item} navigation={navigation} />;
  return (
      
           <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
       
  );  
}

export default StarList;