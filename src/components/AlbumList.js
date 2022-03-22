import React from "react";
import { FlatList ,Text} from "react-native";
import AlbumDetail from "./AlbumDetail";
import listTitle from "../json/albums.json"
const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
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

export default AlbumList;