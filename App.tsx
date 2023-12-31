import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';


const Stack = createStackNavigator();
const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        
        {/* <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="About" component={About} /> */}

      </Stack.Navigator>
     
    </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})