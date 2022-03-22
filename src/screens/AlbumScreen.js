import React from "react";
import { Box ,ScrollView,Text} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import StarList from "../components/starList";

const AlbumScreen = ({ navigation }) => {
  return (
    <ScrollView bgColor="#fff">
      <Text mt="8px" ml="20px" fontWeight="700" fontSize={24}>Popular Books</Text>
      <AlbumList 
        list={albumData.albumList}
        navigation={navigation}
      />
      <Text ml="20px" fontWeight="700" fontSize={24}>Newest</Text>
      <StarList 
        list={albumData.starList}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default AlbumScreen;
