import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, VStack,HStack } from "native-base";


const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    star1,
    star2,
    star3,
    star4,
    star5,
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
                {title}
            </Text>
            <Text fontSize="14px"  color="#929292">             
                {artist}
            </Text>
        </Center>
        <Center>
          <HStack>
            {/* {star?(<Image  w={13} h={14} source={{uri:star1}}/>):null}, */}
            <HStack mt="8.5px">
                <Image  w={14} h={13} source={{uri:star1}} alt='starImage'/>
                <Image  w={14} h={13} ml="4px" source={{uri:star2}} alt='starImage'/>
                <Image  w={14} h={13} ml="4px" source={{uri:star3}} alt='starImage'/>
                <Image  w={14} h={13} ml="4px" source={{uri:star4}} alt='starImage'/>
                <Image  w={14} h={13} ml="4px" source={{uri:star5}} alt='starImage'/>
            </HStack>
            <Heading mt="8.5px" fontSize="14px">{'\t'}{score}<Text  ml="13px" color="#929292">{'\t'}/</Text><Text color="#929292">{'\t'}{fullscore}</Text></Heading>
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