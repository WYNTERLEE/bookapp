import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image,HStack,Box} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MybookScreen from '../screens/MybookScreen';

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
    return (
        <Box>
        <HStack >
            <Image w="18px" h="12px" ml="6px"
                source={{uri: 'https://github.com/WYNTERLEE/react_img/blob/main/icon.png?raw=true'}}
                alt="icon"
            />
            <Image  w="17.5px" h="17.5px"  ml="310px"
                source={{uri: 'https://github.com/WYNTERLEE/react_img/blob/main/icon-search.png?raw=true'}}
                alt="icon"
            />
        </HStack>
        </Box>
        
    );
}
function DetailNav() {
    return (
        
        <MaterialCommunityIcons name="bookmark-outline"  size={26} />
            
        
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
        // headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
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
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
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
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
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
        options={({ route }) => ({
        //   headerBackImageSource:(props) => <DetailNav {...props} /> ,
          headerRight:(props) => <DetailNav {...props} /> ,
          headerShadowVisible:false,
        //   headerTitle: (props) => <DetailNav {...props} /> ,
        //   headerBackImageSource:() => (<MaterialCommunityIcons name="book-open" size={26} />),
          headerStyle: {
            
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default Navigation;