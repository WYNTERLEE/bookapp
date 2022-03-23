import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image,HStack,Box,Pressable,IconButton,Icon} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState}  from 'react';
import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MybookScreen from '../screens/MybookScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
    return (
        <Box>
        <HStack >
            <Image w="18px" h="12px" ml="6px" mt="12px"
                source={{uri: 'https://github.com/WYNTERLEE/react_img/blob/main/icon.png?raw=true'}}
                alt="icon"
            />
            <Box ml="303px">
            <IconButton colorScheme="indigo" _icon={{
                as: MaterialCommunityIcons,
                name: "magnify",
                size: "sm"
            }} />
            </Box>
        </HStack>
        </Box>
        
    );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        //headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />
       <Tab.Screen 
            name="My books" 
            component={MybookScreen} 
            options={{
            title: "My books",
            headerTitleStyle: {
                fontWeight: '400',
                fontSize: 20
            },
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book-open" color={color} size={24} />
            ),
            }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
    const [save, setSave] = useState(true);
    // const saveIcon = () => {
        
    // };
  return (
    <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{ 
            headerTitle: (props) => <HomeNav {...props} /> ,
            headerShadowVisible:false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route,navigation }) => ({
        //   headerShown: false,
          headerTitle:" ",
          headerShadowVisible:false,
          headerStyle: {
            backgroundColor: '#fff',
          },
         
          headerTintColor: '#fff',
          headerTitleStyle: {
              
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <Pressable   onPress={() => {navigation.goBack();}}   >
                <MaterialCommunityIcons name="chevron-left" color={'black'} size={26} />
            </Pressable>
            ),
           headerRight: () => (
                <Pressable onPress={() =>setSave(!save)}>
                {/* {(save?"qqq":"dddq" )} */}
                {(save?<MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={24} />:<MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={24} /> )}
                {/* <MaterialCommunityIcons name={save? "bookmark-outline":"bookmark"}/> */}
                </Pressable>
            ), 
            
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;