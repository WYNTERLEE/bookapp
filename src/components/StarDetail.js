import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const StarDetail = ({ album, navigation }) => {
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
      <VStack>
        <HStack mt="16.5px">
            <Image h="13" w="14" source={{uri: album.star1}}/>
            <Image h="13" w="14" source={{uri: album.star2}}/>
            <Image h="13" w="14" source={{uri: album.star3}}/>
            <Image h="13" w="14" source={{uri: album.star4}}/>
            <Image h="13" w="14" source={{uri: album.star5}}/>
        </HStack>
        <VStack >
          <Text fontSize={16} fontFamily="Roboto" fontWeight={700} color="#131313" mt="16px">{album.title}</Text>
          <Text fontSize={12} fontFamily="Roboto" fontWeight={"bold"} color="#929292" mt="8px" >{album.artist}</Text>
        </VStack>
      </VStack>
    </Box>
  )};

export default StarDetail;