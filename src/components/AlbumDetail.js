import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box mt="16px" ml="16px" mb="16px">
       <Box w="140">
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
      <HStack>
        <VStack >
          <Text fontSize={16} fontFamily="Roboto" fontWeight={700} color="#131313" mt="16px">{album.title}</Text>
          <Text fontSize={12} fontFamily="Roboto" fontWeight={"bold"} color="#929292" mt="8px" >{album.artist}</Text>
        </VStack>
      </HStack>
    </Box>
  )};

export default AlbumDetail;