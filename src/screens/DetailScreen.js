import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, VStack,HStack } from "native-base";


const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    score,
    fullscore,
    url,
    image,
    description
  } = route.params;
  return (
    <Center bgColor="#fff" flex={1}>
      <ScrollView>
        <Center>
          <Image w={210} h={300}
            source={{uri: image }}
            alt='albumImage'
          />
        </Center>
        <Center mt="28px">
            <Text fontSize="24px" fontWeight={"bold"}>
                {artist}
            </Text>
            <Text fontSize="14px" fontWeight={"bold" } color="#929292">             
                {title}
            </Text>
        </Center>
        <Center>
          <HStack>
            <Heading pt={1} fontSize="14px" color='#6099E4'>Discount Now!</Heading>
            <Heading pt={1} fontSize="14px">{'\t'}{score}<Text  ml="13px" color="#929292">{'\t'}/</Text><Text color="#929292">{'\t'}{fullscore}</Text></Heading>
          </HStack>
          <Box  mt="16px" ml="20px" mr="20px" w={320}>
            <Text lineHeight="24px" letterSpacing="0.018em" textAlign="center">{description}</Text>
          </Box>
          <Button 
            borderRadius="4px"
            mt="28px"
            w="190"
            h="36"
            bgColor="#6200EE"
            onPress={() => Linking.openURL(url)}
          >
            <Text color="#fff" fontSize="14px" letterSpacing="0.08em">BUY NOW FOR ${price}</Text>
          </Button>   
        </Center>
        
      </ScrollView>      
    </Center>

  );
}

export default DetailScreen;