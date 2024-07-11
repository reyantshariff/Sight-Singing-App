import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ReviewMode from './screens/ReviewMode'
import TestMode from './screens/TestMode';
import ReactTutorial from './screens/ReactTutorial';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name = "Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name = "Review" component={ReviewMode}></Stack.Screen>
          <Stack.Screen name = "Test" component={TestMode}></Stack.Screen>
          <Stack.Screen name = "React Tutorial" component={ReactTutorial}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  );
}
