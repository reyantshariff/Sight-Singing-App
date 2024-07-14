import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native';

const TrainerButton = ({onPress, title}) => 
    {
        return(
            <TouchableOpacity style = {styles.button} onPress = {onPress}>
                <Text style={styles.Text}>{title}</Text>
            </TouchableOpacity>
        )
    }

const styles = StyleSheet.create({
    button: 
    {
      paddingVertical: 12,
      paddingHorizontal: 32,
      justifyContent: 'space-around',
      borderRadius: 100,
      alignItems: 'center',
      backgroundColor: 'blue',
      position: 'fixed',
    },
    Text: 
    {
        color: 'white',
        fontsize: 16,
    },
  });
export default TrainerButton;