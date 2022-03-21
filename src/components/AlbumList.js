import React from "react";
import { FlatList } from "react-native";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (
    <FlatList
      horizontal={true}
      data={list}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.title}
    />    
  );  
}

export default AlbumList;