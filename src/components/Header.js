import React from "react";
// import { StyleSheet, View ,Image,Pressable, Linking } from "react-native";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"
const Header=()=>{
    return(
      <Box>
        <HStack justifyContent={"space-between"} mt="66px">
              <Image w="18px" h="12px" ml="22px"
                source={{uri: 'https://github.com/WYNTERLEE/react_img/blob/main/icon.png?raw=true'}}
                alt="icon"
              />
            <Image  w="17.5px" h="17.5px" mr="19.5px"
                source={{uri: 'https://github.com/WYNTERLEE/react_img/blob/main/icon-search.png?raw=true'}}
                alt="icon"
            />
        </HStack>
      </Box>
        
    );
};

  export default Header;