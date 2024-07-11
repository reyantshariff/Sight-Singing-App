import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Spacer = ({ width }) => <View style={{ width }} />;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    space: { //Creates space between the buttons
      width: 20, // or whatever size you need
      height: 20,
    },
    input: {
      marginTop: 20,
    },
  });

export default function HomeScreen({navigation}) 
{

    return (<View style={styles.container}>
        <Text>Interval Trainer</Text>
        <StatusBar style="auto" />
        <View style={styles.input}>
          <Button title="Test Your Knowledge" onPress={() => navigation.navigate('Test')} />
          <View style={styles.space} />
          <Button title="Review" onPress={() => navigation.navigate('Review')} />
          <View style={styles.space} />
          <Button title="Tic Tac Toe" onPress={() => navigation.navigate('React Tutorial')} />
        </View>
      </View>);
}