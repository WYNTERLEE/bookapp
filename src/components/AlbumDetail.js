import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2}>
       <Box p={1} bg="#000">
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <Box>
            <Image w="140" h="200"
              source={{ uri: album.image }}
              alt="album"
            />            
          </Box>
        </Pressable>
      </Box>   
      <HStack bg='#fff'>
        <VStack >
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </VStack>
      </HStack>
    </Box>
  )};

export default AlbumDetail;