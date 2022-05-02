import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';
const Navigation = () => {

  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName={Home} screenOptions={{
    headerShown: false
  }}>
   <Stack.Screen name="home" component={Home}>
   </Stack.Screen>
   <Stack.Screen name="Room" component={MeetingRoom}
   options={{
     title:'Start a Meeting',
     headerStyle: {
       backgroundColor:'#1c1c1c',
       shadowOpacity:0,
     },
     headerTintColor: 'white'
   }}
   >
   </Stack.Screen>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation